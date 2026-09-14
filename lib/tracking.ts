export type ConversionEvent =
  "quote_submitted" | "contact_submitted" | "phone_click" | "whatsapp_click";

export function cleanTrackingUrl(
  raw: string,
  allowedPaths: readonly string[],
  origin: string,
): string | null {
  try {
    const url = new URL(raw, origin);
    if (url.origin !== origin || !allowedPaths.includes(url.pathname)) return null;
    return `${origin}${url.pathname}`;
  } catch {
    return null;
  }
}

export function linkConversion(href: string): ConversionEvent | null {
  try {
    const url = new URL(href);
    if (url.protocol === "tel:") return "phone_click";
    if (url.protocol === "https:" && ["wa.me", "api.whatsapp.com"].includes(url.hostname))
      return "whatsapp_click";
  } catch {
    return null;
  }
  return null;
}

export function formConversion(detail: unknown): ConversionEvent | null {
  if (!detail || typeof detail !== "object" || !("form" in detail)) return null;
  return detail.form === "quote"
    ? "quote_submitted"
    : detail.form === "contact"
      ? "contact_submitted"
      : null;
}
