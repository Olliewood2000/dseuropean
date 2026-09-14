import type { Metadata } from "next";
import { legalPages } from "@/content/legal";
import { renderLegalPage } from "../render-legal-page";
export const metadata: Metadata = {
  title: { absolute: legalPages.cookies.meta.title },
  description: legalPages.cookies.meta.description,
  robots: { index: false, follow: false },
};
export default function Page() {
  return renderLegalPage("cookies");
}
