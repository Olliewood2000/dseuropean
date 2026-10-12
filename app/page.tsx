import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { FleetStrip } from "@/components/blocks/FleetStrip";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { home } from "@/content/home";

export const metadata: Metadata = pageMetadata("/");

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
      <QuoteCTA {...home.quote} />
    </>
  );
}
