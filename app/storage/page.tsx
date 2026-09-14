import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { AudienceGrid } from "@/components/blocks/AudienceGrid";
import { FAQ } from "@/components/blocks/FAQ";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { storage } from "@/content/storage";
export const metadata: Metadata = pageMetadata("/storage");
export default function StoragePage() {
  return (
    <>
      <Hero {...storage.hero} />
      <SplitFeature {...storage.problem} />
      <SplitFeature {...storage.consolidation} />
      <ProcessSteps {...storage.process} />
      <AudienceGrid {...storage.audiences} />
      <FAQ {...storage.faqs} />
      <QuoteCTA {...storage.quote} />
    </>
  );
}
