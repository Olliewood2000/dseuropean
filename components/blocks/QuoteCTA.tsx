import { Route } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/primitives/Button";
import { Icon } from "@/components/primitives/Icon";
import { MotifShape } from "@/components/primitives/MotifShape";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { site } from "@/content/site";
import { contactLinks } from "@/lib/contact";
import type { SectionOptions } from "@/lib/blocks";
export interface QuoteCTAProps {
  title?: string;
  body?: string;
  primaryCta?: { label: string; href: string };
  showPhone?: boolean;
  section?: SectionOptions;
}
export function QuoteCTA({
  title = "Tell us what needs moving",
  body = "Send us the item, the collection point and the destination and we will come back with a price. Same day work considered, projects typically booked around three weeks ahead.",
  primaryCta = { label: "Get a quote", href: "/quote" },
  showPhone = true,
  section,
}: QuoteCTAProps) {
  return (
    <Section background="inverse" padding="generous" cut="top" {...section}>
      <MotifShape variant="tint" tone="white" position="top-right" size="lg" opacity={0.08} />
      <MotifShape variant="tint" tone="white" position="bottom-left" size="lg" opacity={0.08} />
      <div className="quote-cta relative space-y-6 text-center">
        <div className="quote-cta-mark" aria-hidden="true">
          <span className="quote-cta-mark-face">
            <Icon icon={Route} size={44} />
          </span>
        </div>
        <SectionHeading title={title} intro={body} align="center" tone="dark" />
        <div className="flex flex-wrap items-center justify-center gap-8 pt-4">
          <Button href={primaryCta.href} variant="primary-dark" size="lg">
            {primaryCta.label}
          </Button>
          {showPhone && (
            <div>
              {contactLinks.phone ? (
                <a className="text-h3 font-bold" href={contactLinks.phone}>
                  {site.phone}
                </a>
              ) : (
                <span className="placeholder-value">{site.phone}</span>
              )}
              <p className="mt-2 text-micro text-ink-inverse-muted">{site.hoursShort}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
