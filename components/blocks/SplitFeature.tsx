import { Section } from "@/components/layout/Section";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { Button, type ButtonProps } from "@/components/primitives/Button";
import { renderMedia, type Media } from "@/lib/media";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface SplitFeatureProps extends BlockProps {
  heading: SectionHeadingProps;
  body: string | readonly string[];
  bullets?: readonly string[];
  cta?: { label: string; href: string; variant?: ButtonProps["variant"] };
  media: Media;
  reverse?: boolean;
  ratio?: "7/5" | "5/7";
}
export function SplitFeature({
  heading,
  body,
  bullets,
  cta,
  media,
  reverse = false,
  ratio = "7/5",
  tone,
  section,
}: SplitFeatureProps) {
  const resolvedTone = blockTone(section, tone);
  const paragraphs = typeof body === "string" ? [body] : body;
  return (
    <Section {...sectionOptions(section, tone)}>
      <div
        className={`split-feature grid items-center gap-8 lg:grid-cols-12 lg:gap-6 ${reverse ? "split-reverse" : ""}`}
      >
        <div className={`split-media ${ratio === "7/5" ? "lg:col-span-7" : "lg:col-span-5"}`}>
          {renderMedia(media, {
            masked: resolvedTone === "dark",
            sizes:
              ratio === "7/5"
                ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 58vw, 704px"
                : "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 42vw, 496px",
          })}
        </div>
        <div
          className={`split-copy space-y-6 ${ratio === "7/5" ? "lg:col-span-5" : "lg:col-span-7"}`}
        >
          <SectionHeading {...heading} tone={resolvedTone} />
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="max-w-measure">
              {paragraph}
            </p>
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
