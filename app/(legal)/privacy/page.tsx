import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { renderLegalPage } from "../render-legal-page";
export const metadata: Metadata = pageMetadata("/privacy");
export default function Page() {
  return renderLegalPage("privacy");
}
