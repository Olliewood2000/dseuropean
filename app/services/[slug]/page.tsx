import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema } from "@/lib/structured-data";
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
  return pageMetadata(`/services/${slug}`);
}

export default async function ServicePageRoute({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const quoteHref = `/quote?service=${encodeURIComponent(slug)}`;
  const withService = <T extends { label: string; href: string }>(cta: T): T =>
    cta.href === "/quote" ? { ...cta, href: quoteHref } : cta;
  return (
    <>
      <JsonLd
        data={serviceSchema(`/services/${slug}`, service.hero.title, service.meta.description)}
      />
      <Hero {...service.hero} primaryCta={withService(service.hero.primaryCta)} />
      <SplitFeature {...service.whatWeMove} />
      <SplitFeature {...service.handling} />
      <ProcessSteps {...service.process} />
      {service.featureBand && (
        <FeatureBand
          {...service.featureBand}
          cta={service.featureBand.cta ? withService(service.featureBand.cta) : undefined}
        />
      )}
      <CoverageList {...service.coverage} />
      <TwoColumnText
        {...service.leadTimes}
        cta={service.leadTimes.cta ? withService(service.leadTimes.cta) : undefined}
      />
      <FAQ {...service.faqs} />
      <RelatedServices {...service.related} />
      <QuoteCTA {...service.quoteCta} primaryCta={withService(service.quoteCta.primaryCta)} />
    </>
  );
}
