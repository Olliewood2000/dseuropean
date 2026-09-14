import type { MetadataRoute } from "next";
import { seoPages } from "@/content/seo-pages";
import { absoluteUrl } from "@/lib/site-origin";

export default function sitemap(): MetadataRoute.Sitemap {
  // No invented lastModified dates: checkout/build time is not a content revision.
  return seoPages.map((page) => ({ url: absoluteUrl(page.path) }));
}
