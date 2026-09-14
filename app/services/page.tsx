import { JsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { FAQ } from "@/components/blocks/FAQ";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { servicesHub, servicesHubMeta } from "@/content/services-hub";
export const metadata: Metadata = pageMetadata("/services");
export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={webPageSchema(
          "CollectionPage",
          "/services",
          servicesHubMeta.title,
          servicesHubMeta.description,
        )}
      />
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
