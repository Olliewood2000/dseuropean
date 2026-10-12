import { notFound } from "next/navigation";
import { generateShareImage } from "@/lib/opengraph";
import { isReviewBuild } from "@/lib/review";
export const alt = "Recent jobs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  if (!isReviewBuild) notFound();
  return generateShareImage("/recent-jobs");
}
