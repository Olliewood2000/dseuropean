import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Phase 1 review | DS European",
  robots: { index: false, follow: false },
};

// Review labels are not marketing copy. No Phase 2 blocks or final pages are assembled here.
export default function FoundationsReview() {
  return (
    <>
      <Section background="inverse" padding="generous" cut="bottom" id="foundations">
        <div className="space-y-8">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Phase 1 review" }]}
            tone="dark"
          />
          <p className="text-label font-bold uppercase text-accent-on-dark">
            Phase 1 · Staging review
          </p>
          <h1 className="max-w-display text-display-lg font-bold text-balance text-ink-inverse">
            Foundations and chrome
          </h1>
          <p className="max-w-measure text-body-lg text-ink-inverse-muted">
            Review the shared styling, navigation and footer. The homepage and service pages will be
            built in later phases.
          </p>
          <a
            href="#review-checks"
            className="inline-block text-body font-bold text-accent-on-dark underline underline-offset-4"
          >
            Start the review
          </a>
        </div>
      </Section>
      <Section padding="compact" id="review-checks">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <p className="text-label font-bold uppercase text-accent">Review checklist</p>
            <h2 className="text-h2">Navigation, at every size</h2>
            <p className="text-body-sm text-ink-muted">
              White background · Compact spacing · No cut
            </p>
          </div>
          <ol className="space-y-6 lg:col-span-6 lg:col-start-7">
            <li>
              <strong>01. Scroll.</strong> The header becomes solid and smaller after 80px. The
              content stays in place.
            </li>
            <li>
              <strong>02. Use the keyboard.</strong> Tab to the Services menu and press Enter. Tab
              stays inside the open menu; Escape closes it.
            </li>
            <li>
              <strong>03. Try a phone.</strong> Open the menu, expand Services and close it.
              Background scrolling stays locked while the menu is open.
            </li>
            <li>
              <strong>04. Reach the footer.</strong> On phones, the contact bar appears after 400px.
              The footer remains fully readable above it.
            </li>
          </ol>
        </div>
      </Section>
      <Section background="subtle" padding="none">
        <p className="border-y border-border text-body-sm">
          Subtle background · No section padding · No cut
        </p>
      </Section>
      <Section background="inverse" padding="standard" cut="top">
        <div className="space-y-6">
          <p className="text-label font-bold uppercase text-accent-on-dark">Type and spacing</p>
          <h2 className="max-w-display text-display-md text-ink-inverse">
            One typeface.
            <br />
            Two weights.
          </h2>
          <p className="max-w-measure text-body-lg text-ink-inverse-muted">
            Montserrat Regular and Bold, with the supplied navy, blue and cool neutral palette. Type
            scales down on phones.
          </p>
          <p className="text-body-sm text-ink-inverse-muted">
            Navy background · Standard spacing · Top cut
          </p>
        </div>
      </Section>
      <Section container="narrow">
        <div className="space-y-6">
          <h2 className="text-h2">Details still to confirm</h2>
          <p>
            Phone, email and WhatsApp details remain marked as placeholders. Call and WhatsApp
            controls are visibly unavailable until the correct numbers are supplied.
          </p>
          <p>
            The navigation includes all seven services from the brief. Private Items still needs the
            client decision recorded in the planning documents.
          </p>
          <p className="text-body-sm text-ink-muted">
            White background · Standard spacing · Narrow container
          </p>
        </div>
      </Section>
      <Section background="accent" padding="compact" cut="both" container="full">
        <div className="container-site space-y-6">
          <p className="text-label font-bold uppercase text-ink-inverse">Section samples</p>
          <h2 className="text-h2 text-ink-inverse">The fourth background</h2>
          <p className="max-w-measure">
            This review sample checks the accent background and a cut at both edges. All four
            backgrounds, spacing settings and cut variants are represented on this page.
          </p>
          <p className="text-body-sm">
            Accent background · Compact spacing · Both cuts · Full container
          </p>
        </div>
      </Section>
    </>
  );
}
