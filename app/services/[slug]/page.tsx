import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Hero } from "@/components/blocks/Hero";
import { SplitFeature } from "@/components/blocks/SplitFeature";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { CoverageList } from "@/components/blocks/CoverageList";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { FAQ } from "@/components/blocks/FAQ";
import { RelatedServices } from "@/components/blocks/RelatedServices";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { getServicePage, servicePages } from "@/content/services/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  return {
    title: { absolute: service.meta.title },
    description: service.meta.description,
    robots: { index: false, follow: false },
  };
}

export default async function ServicePageRoute({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  return (
    <>
      <Hero {...service.hero} />
      <SplitFeature {...service.whatWeMove} />
      <SplitFeature {...service.handling} />
      <ProcessSteps {...service.process} />
      {service.featureBand && <FeatureBand {...service.featureBand} />}
      <CoverageList {...service.coverage} />
      <TwoColumnText {...service.leadTimes} />
      <FAQ {...service.faqs} />
      <RelatedServices {...service.related} />
      <QuoteCTA {...service.quoteCta} />
    </>
  );
}
