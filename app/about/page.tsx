import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { StatBand } from "@/components/blocks/StatBand";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { FleetStrip } from "@/components/blocks/FleetStrip";
import { CoverageList } from "@/components/blocks/CoverageList";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { about } from "@/content/about";
export const metadata: Metadata = pageMetadata("/about");
export default function AboutPage() {
  return (
    <>
      <Hero {...about.hero} />
      <SplitFeature {...about.company} />
      <StatBand {...about.numbers} />
      <SplitFeature {...about.team} />
      <FeatureBand {...about.approach} />
      <FleetStrip {...about.fleet} />
      <CoverageList {...about.coverage} />
      <QuoteCTA {...about.quote} />
    </>
  );
}
