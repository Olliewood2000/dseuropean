import { isPlaceholder, site } from "@/content/site";

function origin(value: string | undefined): URL | undefined {
  if (!value || isPlaceholder(value)) return;
  try {
    const url = new URL(value);
    if (
      !["http:", "https:"].includes(url.protocol) ||
      url.username ||
      url.password ||
      url.pathname !== "/" ||
      url.search ||
      url.hash
    )
      return;
    return url;
  } catch {
    return;
  }
}

export function resolveSiteOrigin(env: NodeJS.ProcessEnv = process.env): URL {
  // A Vercel preview must never inherit a production URL from shared settings.
  if (env.VERCEL_ENV === "preview") {
    const preview = origin(env.VERCEL_URL ? `https://${env.VERCEL_URL}` : undefined);
    if (!preview) throw new Error("Vercel preview origin is missing");
    return preview;
  }
  const configured = origin(env.NEXT_PUBLIC_SITE_URL);
  if (env.VERCEL_ENV === "production" && (!configured || configured.protocol !== "https:"))
    throw new Error("Production requires a valid HTTPS NEXT_PUBLIC_SITE_URL");
  return configured ?? new URL("http://127.0.0.1:3000");
}

export const siteOrigin = resolveSiteOrigin();
export function absoluteUrl(path: string): string {
  return new URL(path, siteOrigin).href;
}

// Launch is a separate, explicit decision. A production build alone cannot enable indexing.
export const indexingEnabled =
  process.env.SITE_INDEXING_ENABLED === "true" &&
  process.env.VERCEL_ENV === "production" &&
  !isPlaceholder(site.domain) &&
  origin(site.domain)?.origin === siteOrigin.origin;

export const trackingEnabled =
  process.env.SITE_ANALYTICS_ENABLED === "true" &&
  process.env.VERCEL_ENV === "production" &&
  String(site.decisions.analytics) === "vercel-cookieless";
