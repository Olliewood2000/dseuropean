import type { Metadata } from "next";
import { getSeoPage } from "@/content/seo-pages";
import { site } from "@/content/site";
import { absoluteUrl, indexingEnabled } from "./site-origin";

export function pageMetadata(path: string): Metadata {
  const page = getSeoPage(path);
  return {
    title: { absolute: page.meta.title },
    description: page.meta.description,
    alternates: { canonical: absoluteUrl(path) },
    robots: { index: indexingEnabled, follow: indexingEnabled },
    openGraph: {
      type: "website",
      locale: "en_GB",
      siteName: site.name,
      url: absoluteUrl(path),
      title: page.meta.ogTitle ?? page.meta.title,
      description: page.meta.ogDescription ?? page.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.ogTitle ?? page.meta.title,
      description: page.meta.ogDescription ?? page.meta.description,
    },
  };
}
