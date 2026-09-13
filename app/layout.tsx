import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyContactBar } from "@/components/layout/StickyContactBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "DS European | Staging preview",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
