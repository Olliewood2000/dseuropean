"use client";

import { Section } from "@/components/layout/Section";
import { site } from "@/content/site";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Section padding="generous">
      <div className="space-y-6">
        <h1 className="text-display-md">Something went wrong</h1>
        <p>Sorry about that. Try again in a moment, or ring us on {site.phone}.</p>
        <button type="button" onClick={reset} className="button button-primary button-md">
          Try again
        </button>
      </div>
    </Section>
  );
}
