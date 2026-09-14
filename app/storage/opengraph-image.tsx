import { generateShareImage } from "@/lib/opengraph";
import { getSeoPage } from "@/content/seo-pages";
export const alt = getSeoPage("/storage").title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return generateShareImage("/storage");
}
