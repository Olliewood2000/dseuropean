import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import { isReviewBuild } from "@/lib/review";
import { webPageSchema } from "@/lib/structured-data";
import { JsonLd } from "@/components/JsonLd";
import { Hero } from "@/components/blocks/Hero";
import { FeatureBand } from "@/components/blocks/FeatureBand";
import { JobGrid } from "@/components/blocks/JobGrid";
import { TwoColumnText } from "@/components/blocks/TwoColumnText";
import { CoverageList } from "@/components/blocks/CoverageList";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { recentJobs, recentJobsMeta } from "@/content/recent-jobs";

export function generateMetadata() {
  return isReviewBuild ? pageMetadata("/recent-jobs") : { robots: { index: false, follow: false } };
}
export default function RecentJobsPage() {
  if (!isReviewBuild) notFound();
  return (
    <>
      <aside className="bg-surface-subtle px-6 py-4 text-center text-body-sm text-ink">
        Review draft: job details and permission to publish these locations still need confirmation.
      </aside>
      <JsonLd
        data={webPageSchema(
          "CollectionPage",
          "/recent-jobs",
          "Recent jobs",
          recentJobsMeta.description,
        )}
      />
      <Hero {...recentJobs.hero} />
      <FeatureBand {...recentJobs.international} />
      <JobGrid {...recentJobs.jobs} />
      <TwoColumnText {...recentJobs.everyday} />
      <CoverageList {...recentJobs.coverage} />
      <QuoteCTA {...recentJobs.quote} />
    </>
  );
}
