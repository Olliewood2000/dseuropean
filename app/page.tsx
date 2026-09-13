import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { FleetStrip } from "@/components/blocks/FleetStrip";
import { JobGrid } from "@/components/blocks/JobGrid";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { home, homeMeta } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "DS European",
    title: homeMeta.ogTitle,
    description: homeMeta.ogDescription,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero {...home.hero} />
      <TrustStrip {...home.trust} />
      <ServiceGrid {...home.services} />
      <SplitFeature {...home.installation} />
      <ProcessSteps {...home.process} />
      <FeatureBand {...home.international} />
      <AudienceGrid {...home.audiences} />
      <SplitFeature {...home.storage} />
      <FleetStrip {...home.fleet} />
      <JobGrid {...home.jobs} />
      <QuoteCTA {...home.quote} />
    </>
  );
}
