/* eslint-disable @typescript-eslint/no-require-imports -- CommonJS loader runs isolated TypeScript route tests without a new dependency. */
// Isolated route tests. The email transport is replaced before any handler runs.
const assert = require("node:assert/strict");
const fs = require("node:fs");

const ts = require("typescript");
require.extensions[".ts"] = (module, filename) =>
  module._compile(
    ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2022,
        esModuleInterop: true,
      },
    }).outputText,
    filename,
  );
const { handleEnquiry } = require("../lib/enquiry-handler.ts");
const { quoteSchema } = require("../lib/enquiry-schema.ts");
const { randomUUID } = require("node:crypto");
const base = {
  name: "Staging test",
  email: "test@example.com",
  phone: "+441234567890",
  from: "Maidstone",
  to: "Lyon",
  moving: "A dining table and six chairs",
  service: "furniture-transport",
  when: "",
  installation: false,
  company_website: "",
  startedAt: Date.now() - 10000,
  requestId: randomUUID(),
};
const requests = [];
let failAt = 0;
global.fetch = async (url, options) => {
  assert.equal(url, "https://api.resend.com/emails");
  requests.push({ ...options, payload: JSON.parse(options.body) });
  return requests.length === failAt
    ? Response.json({ error: "test failure" }, { status: 500 })
    : Response.json({ id: randomUUID() });
};
Object.assign(process.env, {
  RESEND_API_KEY: "test-key-no-network",
  ENQUIRY_TO_EMAIL: "office@example.com",
  ENQUIRY_FROM_EMAIL: "forms@example.com",
  ENQUIRY_DELIVERY_ENABLED: "true",
});
function json(data = base, headers = {}) {
  return new Request("https://staging.example/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: "https://staging.example", ...headers },
    body: JSON.stringify(data),
  });
}
function multipart(files, data = base) {
  const body = new FormData();
  body.set("payload", JSON.stringify(data));
  files.forEach((f) => body.append("photos", f));
  return new Request("https://staging.example/api/quote", { method: "POST", body });
}
let passed = 0;
async function check(name, fn) {
  requests.length = 0;
  failAt = 0;
  await fn();
  passed++;
  console.log("PASS " + name);
}
(async () => {
  await check(
    "quote sends notification then confirmation with reply-to and all fields",
    async () => {
      assert.equal((await handleEnquiry(json(), "quote")).status, 200);
      assert.equal(requests.length, 2);
      assert.equal(requests[0].payload.reply_to, base.email);
      assert.equal(requests[0].payload.subject, "Quote request: Furniture, Maidstone to Lyon");
      assert.ok(requests[0].payload.text.includes("When do you need it: Not supplied"));
      assert.ok(requests[0].payload.text.includes("Installation or set up required: No"));
      assert.deepEqual(requests[1].payload.to, [base.email]);
    },
  );
  await check("contact sends both emails", async () => {
    assert.equal(
      (await handleEnquiry(json({ ...base, message: "A test general enquiry" }), "contact")).status,
      200,
    );
    assert.equal(requests.length, 2);
    assert.match(requests[0].payload.subject, /^Contact message:/);
  });
  await check("invalid email and service are rejected server side", async () => {
    for (const patch of [
      { email: "bad" },
      { service: "unknown" },
      { name: "" },
      { moving: "tiny" },
    ])
      assert.equal((await handleEnquiry(json({ ...base, ...patch }), "quote")).status, 400);
    assert.equal(requests.length, 0);
  });
  await check("honeypot and fast/future submissions are silently discarded", async () => {
    for (const patch of [
      { company_website: "spam" },
      { startedAt: Date.now() },
      { startedAt: Date.now() + 50000 },
    ])
      assert.equal((await handleEnquiry(json({ ...base, ...patch }), "quote")).status, 200);
    assert.equal(requests.length, 0);
  });
  await check("missing spam metadata cannot bypass validation", async () => {
    assert.equal(
      (await handleEnquiry(json({ ...base, startedAt: undefined }), "quote")).status,
      400,
    );
    assert.equal(requests.length, 0);
  });
  await check("cross-origin requests are rejected", async () => {
    assert.equal(
      (await handleEnquiry(json(base, { Origin: "https://elsewhere.example" }), "quote")).status,
      403,
    );
    assert.equal(requests.length, 0);
  });
  await check("malformed and oversized requests are rejected", async () => {
    assert.equal(
      (
        await handleEnquiry(
          new Request("https://staging.example/api/quote", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: "{",
          }),
          "quote",
        )
      ).status,
      400,
    );
    assert.equal(
      (await handleEnquiry(json(base, { "Content-Length": "4100001" }), "quote")).status,
      413,
    );
    assert.equal(requests.length, 0);
  });
  await check("unconfigured delivery fails honestly without sending", async () => {
    process.env.ENQUIRY_DELIVERY_ENABLED = "false";
    assert.equal((await handleEnquiry(json(), "quote")).status, 503);
    process.env.ENQUIRY_DELIVERY_ENABLED = "true";
    assert.equal(requests.length, 0);
  });
  await check("provider failure returns retryable error", async () => {
    failAt = 1;
    assert.equal((await handleEnquiry(json(), "quote")).status, 502);
    assert.equal(requests.length, 1);
  });
  await check("retry after confirmation failure reuses both idempotency keys", async () => {
    failAt = 2;
    assert.equal((await handleEnquiry(json(), "quote")).status, 502);
    failAt = 0;
    assert.equal((await handleEnquiry(json(), "quote")).status, 200);
    assert.equal(requests[0].headers["Idempotency-Key"], requests[2].headers["Idempotency-Key"]);
    assert.equal(requests[1].headers["Idempotency-Key"], requests[3].headers["Idempotency-Key"]);
  });
  await check("JPEG and HEIC attachments are accepted and renamed safely", async () => {
    const jpeg = new File([Buffer.from([255, 216, 255, 224, 0, 0])], "../../unsafe.jpg", {
      type: "image/jpeg",
    });
    const heic = new File(
      [Buffer.from("000000186674797068656963000000006d69663168656963", "hex")],
      "phone.heic",
      { type: "image/heic" },
    );
    assert.equal((await handleEnquiry(multipart([jpeg, heic]), "quote")).status, 200);
    assert.equal(requests[0].payload.attachments.length, 2);
    assert.equal(requests[0].payload.attachments[1].content_type, "image/heic");
    assert.equal(requests[0].payload.attachments[0].filename, "photograph-1.jpg");
    assert.equal(requests[1].payload.attachments, undefined);
  });
  await check("spoofed types, too many files and contact attachments are rejected", async () => {
    const fake = new File(["not an image"], "fake.jpg", { type: "image/jpeg" });
    assert.equal((await handleEnquiry(multipart([fake]), "quote")).status, 400);
    assert.equal((await handleEnquiry(multipart([fake, fake, fake, fake]), "quote")).status, 400);
    assert.equal(
      (
        await handleEnquiry(
          multipart([fake], { ...base, message: "General test message" }),
          "contact",
        )
      ).status,
      400,
    );
    assert.equal(requests.length, 0);
  });
  await check("compressed photo total is capped at 4MB", async () => {
    const bytes = Buffer.alloc(4000001);
    bytes[0] = 255;
    bytes[1] = 216;
    bytes[2] = 255;
    assert.equal(
      (
        await handleEnquiry(
          multipart([new File([bytes], "large.jpg", { type: "image/jpeg" })]),
          "quote",
        )
      ).status,
      413,
    );
    assert.equal(requests.length, 0);
  });
  assert.equal(quoteSchema.safeParse({ ...base, phone: "abcdefghi" }).success, false);
  console.log(`${passed} route scenarios passed. No emails sent.`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
