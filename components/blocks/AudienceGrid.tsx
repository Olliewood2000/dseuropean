import { Section } from "@/components/layout/Section";
import { Card } from "@/components/primitives/Card";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { AudienceCard, type AudienceCardProps } from "./AudienceCard";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface AudienceGridProps extends BlockProps {
  heading: SectionHeadingProps;
  audiences: readonly (AudienceCardProps & { href?: string })[];
  /** Trailing part of the heading title, set on its own line in accent blue. Image cards only. */
  titleAccent?: string;
}
export function AudienceGrid({ heading, audiences, titleAccent, tone, section }: AudienceGridProps) {
  const resolvedTone = blockTone(section, tone);

  if (audiences.some((item) => item.image)) {
    const accent = titleAccent && heading.title.endsWith(titleAccent) ? titleAccent : undefined;
    const titleLead = accent ? heading.title.slice(0, -accent.length).trimEnd() : heading.title;
    const options = sectionOptions(section, tone);
    return (
      <Section
        {...options}
        className={`audience-showcase-section ${options.className ?? ""}`}
      >
        <div className="audience-showcase">
          <div className="audience-intro">
            {heading.eyebrow && (
              <div className="audience-eyebrow">
                <Eyebrow tone={resolvedTone}>{heading.eyebrow}</Eyebrow>
              </div>
            )}
            <h2 className="audience-title">
              {titleLead}
              {accent && (
                <>
                  {" "}
                  <span className="audience-title-accent">{accent}</span>
                </>
              )}
            </h2>
            {heading.intro && <p className="audience-intro-copy">{heading.intro}</p>}
          </div>
          <ul className="audience-card-grid">
            {audiences.map((item) => (
              <AudienceCard key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </Section>
    );
  }

  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        <SectionHeading {...heading} tone={resolvedTone} />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {audiences.map((item) => (
            <Card key={item.title} href={item.href} tone={resolvedTone}>
              <div className="card-body space-y-4">
                <h3 className="text-h4">{item.title}</h3>
                <p className="block-muted text-body-sm">{item.body}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
