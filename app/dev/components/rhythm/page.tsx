import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { reviewBody, reviewMedia, reviewTrust } from "@/content/component-review";
export const metadata: Metadata = {
  title: "Section rhythm review | DS European",
  robots: { index: false, follow: false },
};
export default function RhythmReview() {
  return (
    <>
      <Hero
        variant="home"
        title="Three cuts, one page"
        subtitle="A short layout sample for reviewing the section rhythm. This is not the final homepage."
        image={reviewMedia}
        primaryCta={{ label: "See our work", href: "/dev/components" }}
      />
      <TrustStrip items={reviewTrust} />
      <FeatureBand
        eyebrow="Second cut section"
        title="A full-width feature band"
        body={reviewBody[0]}
        items={["Location one", "Location two", "Location three"]}
      />
      <TwoColumnText title="Space between the bands" body={reviewBody} />
      <QuoteCTA
        title="The closing section"
        body="Review the cuts at phone, tablet and desktop sizes, then return to the component samples."
        primaryCta={{ label: "See our work", href: "/dev/components" }}
      />
    </>
  );
}
