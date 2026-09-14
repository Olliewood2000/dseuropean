import { createHash } from "node:crypto";
import { z } from "zod";
import {
  contactSchema,
  quoteSchema,
  submissionSchema,
  MAX_PHOTO_BYTES,
  photoMessages,
} from "./enquiry-schema";
import { services } from "../content/services/index";
import { site } from "../content/site";

type Kind = "quote" | "contact";
type Attachment = { filename: string; content: string; content_type: string };
const response = (status: number, extra = {}) =>
  Response.json(
    { ok: status === 200, ...extra },
    { status, headers: { "Cache-Control": "no-store" } },
  );
const MAX_BODY_BYTES = MAX_PHOTO_BYTES + 100_000;

function imageType(bytes: Buffer): string | undefined {
  if (bytes.subarray(0, 3).equals(Buffer.from([255, 216, 255]))) return "image/jpeg";
  if (bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])))
    return "image/png";
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP")
    return "image/webp";
  if (bytes.toString("ascii", 4, 8) === "ftyp") {
    const boxSize = bytes.readUInt32BE(0);
    const brands = [bytes.toString("ascii", 8, 12)];
    for (let offset = 16; offset + 4 <= Math.min(boxSize, bytes.length, 128); offset += 4)
      brands.push(bytes.toString("ascii", offset, offset + 4));
    if (brands.some((b) => ["heic", "heix", "hevc", "hevx"].includes(b))) return "image/heic";
  }
}

async function readBody(request: Request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) throw new RangeError();
  const reader = request.body?.getReader();
  if (!reader) throw new Error();
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError();
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks);
}

async function sendEmail(payload: object, key: string, apiKey: string) {
  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": key,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(12000),
  });
  if (!sent.ok) throw new Error("Email provider rejected submission");
  const result: unknown = await sent.json();
  if (!z.object({ id: z.string().min(1) }).safeParse(result).success)
    throw new Error("No email receipt");
}

export async function handleEnquiry(request: Request, kind: Kind): Promise<Response> {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return response(403);
  let input: unknown;
  let files: File[] = [];
  try {
    const bytes = await readBody(request);
    const type = request.headers.get("content-type") ?? "";
    if (type.startsWith("multipart/form-data")) {
      const data = await new Response(bytes, { headers: { "Content-Type": type } }).formData();
      const entries = data.getAll("photos");
      if (entries.some((entry) => typeof entry === "string")) return response(400);
      files = entries as File[];
      input = JSON.parse(String(data.get("payload")));
    } else if (type.startsWith("application/json")) input = JSON.parse(bytes.toString("utf8"));
    else return response(415);
  } catch (error) {
    return response(error instanceof RangeError ? 413 : 400);
  }
  const signals = submissionSchema.safeParse(input);
  if (!signals.success) return response(400);
  const elapsed = Date.now() - signals.data.startedAt;
  if (signals.data.company_website || elapsed < 3000) return response(200);
  const parsed = (kind === "quote" ? quoteSchema : contactSchema).safeParse(input);
  if (!parsed.success) return response(400, { errors: parsed.error.flatten().fieldErrors });
  if (files.length > (kind === "quote" ? 3 : 0))
    return response(400, { photoError: photoMessages.count });
  if (files.reduce((sum, file) => sum + file.size, 0) > MAX_PHOTO_BYTES)
    return response(413, { photoError: photoMessages.size });
  const attachments: Attachment[] = [];
  for (const [index, file] of files.entries()) {
    const bytes = Buffer.from(await file.arrayBuffer());
    const type = imageType(bytes);
    if (
      !type ||
      !file.size ||
      (file.type &&
        file.type !== type &&
        !(type === "image/heic" && file.type === "application/octet-stream"))
    )
      return response(400, { photoError: photoMessages.type });
    const extension = type === "image/jpeg" ? "jpg" : type.split("/")[1];
    attachments.push({
      filename: `photograph-${index + 1}.${extension}`,
      content: bytes.toString("base64"),
      content_type: type,
    });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.ENQUIRY_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;
  // Enabling delivery is a deliberate deployment step after inbox/domain verification.
  if (
    process.env.ENQUIRY_DELIVERY_ENABLED !== "true" ||
    !apiKey ||
    !z.email().safeParse(from).success ||
    !z.email().safeParse(to).success
  )
    return response(503);
  const data = parsed.data;
  const lines = [`Name: ${data.name}`, `Email: ${data.email}`, `Phone: ${data.phone}`];
  let subject = `Contact message: ${data.name}`;
  if ("moving" in data) {
    const service = services.find((s) => s.slug === data.service)?.title ?? "Not supplied";
    subject = `Quote request: ${service}, ${data.from} to ${data.to}`;
    lines.push(
      `Collecting from: ${data.from}`,
      `Delivering to: ${data.to}`,
      `What needs moving: ${data.moving}`,
      `Service: ${service}`,
      `When do you need it: ${data.when || "Not supplied"}`,
      `Installation or set up required: ${data.installation ? "Yes" : "No"}`,
      `Photographs: ${attachments.length || "Not supplied"}`,
    );
  } else lines.push(`Message: ${data.message}`);
  subject = subject.replace(/[\r\n\u0000-\u001f]/g, " ").slice(0, 250);
  const text = lines.join("\n\n");
  const key = createHash("sha256")
    .update(
      JSON.stringify({ kind, data, attachments, requestId: signals.data.requestId, from, to }),
    )
    .digest("hex");
  try {
    await sendEmail(
      {
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text,
        ...(attachments.length ? { attachments } : {}),
      },
      `enquiry-${key}`,
      apiKey,
    );
    const confirmation =
      kind === "quote"
        ? `We will come back to you with a price. If it is urgent, ring us on ${site.phone} rather than waiting for the email.`
        : `We will get back to you. If it is urgent, ring us on ${site.phone}.`;
    await sendEmail(
      {
        from,
        to: [data.email],
        reply_to: to,
        subject: "Thanks, that is with us.",
        text: `${confirmation}\n\n${text}`,
      },
      `confirmation-${key}`,
      apiKey,
    );
    return response(200);
  } catch {
    return response(502);
  }
}
