import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { FAQ } from "@/components/blocks/FAQ";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { servicesHub, servicesHubMeta } from "@/content/services-hub";
export const metadata: Metadata = {
  title: { absolute: servicesHubMeta.title },
  description: servicesHubMeta.description,
  robots: { index: false, follow: false },
};
export default function ServicesHubPage() {
  return (
    <>
      <Hero {...servicesHub.hero} />
      <ServiceGrid {...servicesHub.services} />
      <SplitFeature {...servicesHub.common} />
      <ProcessSteps {...servicesHub.process} />
      <TwoColumnText {...servicesHub.choosing} />
      <FAQ {...servicesHub.faqs} />
      <QuoteCTA {...servicesHub.quote} />
    </>
  );
}
