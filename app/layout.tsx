import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";
import { JsonLd } from "@/components/JsonLd";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import { businessSchema } from "@/lib/structured-data";
import { siteOrigin, indexingEnabled, trackingEnabled } from "@/lib/site-origin";
import { seoPages } from "@/content/seo-pages";
import { site } from "@/content/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: siteOrigin,
  title: {
    default: "DS European | Specialist Transport & Installation",
    template: `%s | ${site.name}`,
  },
  robots: { index: indexingEnabled, follow: indexingEnabled },
  openGraph: { type: "website", locale: "en_GB", siteName: site.name },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <JsonLd data={businessSchema} />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyContactBar />
        {trackingEnabled && <SiteAnalytics paths={seoPages.map((page) => page.path)} />}
      </body>
    </html>
  );
}
