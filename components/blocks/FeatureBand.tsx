import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { MotifShape } from "@/components/primitives/MotifShape";
import type { SectionOptions } from "@/lib/blocks";
export interface FeatureBandProps {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: readonly string[];
  cta?: { label: string; href: string };
  background?: "inverse" | "accent";
  section?: SectionOptions;
}
export function FeatureBand({
  eyebrow,
  title,
  body,
  items,
  cta,
  background = "inverse",
  section,
}: FeatureBandProps) {
  return (
    <Section background={background} padding="generous" cut="both" {...section}>
      <MotifShape variant="tint" tone="white" position="top-right" size="xl" opacity={0.08} />
      <MotifShape variant="tint" tone="white" position="bottom-left" size="lg" opacity={0.08} />
      <div className="relative space-y-8">
        {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
        <h2 className="max-w-display text-display-md text-balance text-ink-inverse">{title}</h2>
        {body && <p className="max-w-measure text-body-lg text-ink-inverse">{body}</p>}
        {items && items.length > 0 && (
          <ul className="feature-items flex flex-col gap-6 text-h2 font-bold md:flex-row md:flex-wrap">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        {cta && (
          <Button
            href={cta.href}
            variant={background === "accent" ? "ghost-dark" : "primary-dark"}
            size="lg"
          >
            {cta.label}
          </Button>
        )}
      </div>
    </Section>
  );
}
