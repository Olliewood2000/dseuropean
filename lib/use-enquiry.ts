"use client";
import { useEffect, useRef, useState } from "react";
import { preparePhotos } from "./prepare-photos";

export function useEnquiry(kind: "quote" | "contact", preview: boolean) {
  const [status, setStatus] = useState<"idle" | "preview" | "success" | "error">("idle");
  const [photoError, setPhotoError] = useState("");
  const startField = useRef<HTMLInputElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const fileField = useRef<HTMLInputElement>(null);
  const result = useRef<HTMLDivElement>(null);
  const requestId = useRef<string | null>(null);
  useEffect(() => {
    if (startField.current) startField.current.value = String(Date.now());
  }, []);
  useEffect(() => {
    if (status === "success") result.current?.querySelector("h3")?.focus();
  }, [status]);
  async function submit(values: object) {
    setPhotoError("");
    if (preview) {
      setStatus("preview");
      return;
    }
    let photos: File[];
    try {
      photos = await preparePhotos(Array.from(fileField.current?.files ?? []));
    } catch (error) {
      setPhotoError(error instanceof Error ? error.message : "Images only, please");
      fileField.current?.focus();
      return;
    }
    requestId.current ??= crypto.randomUUID();
    const payload = {
      ...values,
      startedAt: Number(startField.current?.value),
      company_website: honeypot.current?.value ?? "",
      requestId: requestId.current,
    };
    const body = new FormData();
    body.set("payload", JSON.stringify(payload));
    photos.forEach((file) => body.append("photos", file));
    try {
      const sent = await fetch(`/api/${kind}`, {
        method: "POST",
        body,
        signal: AbortSignal.timeout(30000),
      });
      const response = await sent.json();
      if (!sent.ok || response.ok !== true) {
        if (typeof response.photoError === "string") setPhotoError(response.photoError);
        throw new Error();
      }
      setStatus("success");
      // The optional analytics subscriber receives no enquiry details.
      window.dispatchEvent(new CustomEvent("enquiry-success", { detail: { form: kind } }));
    } catch {
      setStatus("error");
    }
  }
  return { status, photoError, startField, honeypot, fileField, result, submit };
}
