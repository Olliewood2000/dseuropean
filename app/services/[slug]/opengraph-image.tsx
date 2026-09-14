import { notFound } from "next/navigation";
import { getServicePage } from "@/content/services/pages";
import { generateShareImage } from "@/lib/opengraph";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getServicePage(slug)) notFound();
  return generateShareImage(`/services/${slug}`);
}
