import type { HeroProps } from "@/components/blocks/Hero";
import type { SplitFeatureProps } from "@/components/blocks/SplitFeature";
import type { ProcessStepsProps } from "@/components/blocks/ProcessSteps";
import type { FeatureBandProps } from "@/components/blocks/FeatureBand";
import type { CoverageListProps } from "@/components/blocks/CoverageList";
import type { TwoColumnTextProps } from "@/components/blocks/TwoColumnText";
import type { FAQProps } from "@/components/blocks/FAQ";
import type { RelatedServicesProps } from "@/components/blocks/RelatedServices";
import type { QuoteCTAProps } from "@/components/blocks/QuoteCTA";
import type { services } from "./index";

export type ServiceSlug = (typeof services)[number]["slug"];

// Required sections follow technical spec 04, with the detailed page headings,
// CTAs, breadcrumbs and section settings preserved through the block contracts.
export interface ServicePage {
  slug: ServiceSlug;
  nav: { title: string; excerpt: string };
  meta: { title: string; description: string };
  hero: HeroProps &
    Required<
      Pick<HeroProps, "eyebrow" | "subtitle" | "image" | "primaryCta" | "breadcrumbs" | "section">
    >;
  whatWeMove: SplitFeatureProps;
  handling: SplitFeatureProps;
  process: ProcessStepsProps & Required<Pick<ProcessStepsProps, "heading">>;
  featureBand: FeatureBandProps | null;
  coverage: CoverageListProps;
  leadTimes: TwoColumnTextProps;
  faqs: FAQProps & Required<Pick<FAQProps, "heading">>;
  related: RelatedServicesProps;
  quoteCta: QuoteCTAProps & Required<Pick<QuoteCTAProps, "title" | "body" | "primaryCta">>;
}
