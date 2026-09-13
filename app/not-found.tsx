import Link from "next/link";
import { Section } from "@/components/layout/Section";

export default function NotFound() {
  return (
    <Section background="inverse" padding="generous">
      <div className="space-y-6">
        <p className="text-label font-bold uppercase text-accent-on-dark">Staging review</p>
        <h1 className="text-display-md text-ink-inverse">Page not available</h1>
        <p className="max-w-measure text-ink-inverse-muted">
          This staging build contains the Phase 1 foundations review. The website pages will be
          added in later phases.
        </p>
        <Link
          href="/dev/foundations"
          className="inline-block text-accent-on-dark underline underline-offset-4"
        >
          Return to the Phase 1 review
        </Link>
      </div>
    </Section>
  );
}
