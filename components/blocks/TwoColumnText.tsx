import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button, type ButtonProps } from "@/components/primitives/Button";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface TwoColumnTextProps extends BlockProps {
  eyebrow?: string;
  title: string;
  body: readonly string[];
  bullets?: readonly string[];
  cta?: { label: string; href: string; variant?: ButtonProps["variant"] };
}
export function TwoColumnText({
  eyebrow,
  title,
  body,
  bullets,
  cta,
  tone,
  section,
}: TwoColumnTextProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-6">
        <div className="sticky-section-title lg:col-span-4">
          <SectionHeading title={title} eyebrow={eyebrow} tone={resolvedTone} />
        </div>
        <div className="max-w-measure space-y-6 lg:col-span-7 lg:col-start-6">
          {body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {bullets && (
            <ul className="square-list space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {cta && (
            <Button
              href={cta.href}
              variant={cta.variant ?? (resolvedTone === "dark" ? "ghost-dark" : "secondary")}
            >
              {cta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
