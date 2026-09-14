import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { renderLegalPage } from "../render-legal-page";
export const metadata: Metadata = pageMetadata("/cookies");
export default function Page() {
  return renderLegalPage("cookies");
}
