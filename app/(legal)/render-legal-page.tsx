import Link from "next/link";
import { Hero } from "@/components/blocks/Hero";
import { QuoteCTA } from "@/components/blocks/QuoteCTA";
import { Section } from "@/components/layout/Section";
import { site, isPlaceholder } from "@/content/site";
import { legalPages, type LegalSlug } from "@/content/legal";

const values: Record<string, string> = {
  legalName: site.legalName,
  legalAddress: [
    site.address.street,
    site.address.locality,
    site.address.town,
    site.address.postcode,
  ].join(", "),
  companyNumber: site.companyNumber,
  vatNumber: site.vatNumber,
  email: site.email,
  phone: site.phone,
  enquiryRetention: site.legal.enquiryRetention,
  jobRecordRetention: site.legal.jobRecordRetention,
  conditionsOfCarriage: site.legal.conditionsOfCarriage,
};

function inline(text: string) {
  return text.split(/(\{\{\w+\}\}|\[privacy policy\]\(\/privacy\))/).map((part, index) => {
    if (part === "[privacy policy](/privacy)")
      return (
        <Link key={index} href="/privacy">
          privacy policy
        </Link>
      );
    const token = part.match(/^\{\{(\w+)\}\}$/)?.[1];
    if (!token) return part;
    const value = values[token];
    if (!value) throw new Error(`Unknown legal content field: ${token}`);
    return isPlaceholder(value) ? (
      <mark key={index} className="legal-placeholder">
        {value}
      </mark>
    ) : (
      value
    );
  });
}

// Page assembly uses the existing Section and semantic prose, as specified in legal.md.
// It does not introduce a new reusable block or a markdown dependency.
export function renderLegalPage(slug: LegalSlug) {
  const page = legalPages[slug];
  return (
    <div className="legal-page">
      <Hero
        variant="page"
        title={page.title}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: page.title }]}
        section={{ background: "inverse", padding: "compact", cut: "bottom" }}
      />
      <Section container="narrow" background="surface" padding="standard">
        <div className="legal-prose">
          <p className="text-body-sm">
            Last updated: <mark className="legal-placeholder">{site.legal.lastReviewed}</mark>
          </p>
          {(slug === "privacy" || slug === "cookies") && (
            <p className="text-body-sm">
              <mark className="legal-placeholder">{site.decisions.analytics}</mark>
              {slug === "cookies" && (
                <>
                  {" "}
                  · <mark className="legal-placeholder">{site.legal.cookieConfiguration}</mark>
                </>
              )}
            </p>
          )}
          {page.blocks.map((block, index) => (
            <div key={index} className="space-y-6">
              {"heading" in block && <h2 className="text-h2 font-bold">{block.heading}</h2>}
              {block.paragraphs.map((paragraph, i) => (
                <p key={i}>{inline(paragraph)}</p>
              ))}
              {block.list.length > 0 && (
                <ul className="list-disc space-y-4 pl-6">
                  {block.list.map((item, i) => (
                    <li key={i}>{inline(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>
      <QuoteCTA />
    </div>
  );
}
