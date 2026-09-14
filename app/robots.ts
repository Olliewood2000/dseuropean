import type { MetadataRoute } from "next";
import { absoluteUrl, indexingEnabled } from "@/lib/site-origin";

export default function robots(): MetadataRoute.Robots {
  return indexingEnabled
    ? {
        rules: { userAgent: "*", allow: "/", disallow: ["/dev/", "/api/"] },
        sitemap: absoluteUrl("/sitemap.xml"),
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
