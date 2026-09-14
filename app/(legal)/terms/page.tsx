import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { renderLegalPage } from "../render-legal-page";
export const metadata: Metadata = pageMetadata("/terms");
export default function Page() {
  return renderLegalPage("terms");
}
