import type { Metadata } from "next";
import { legalPages } from "@/content/legal";
import { renderLegalPage } from "../render-legal-page";
export const metadata: Metadata = {
  title: { absolute: legalPages.terms.meta.title },
  description: legalPages.terms.meta.description,
  robots: { index: false, follow: false },
};
export default function Page() {
  return renderLegalPage("terms");
}
