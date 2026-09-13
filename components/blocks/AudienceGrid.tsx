import { Section } from "@/components/layout/Section";
import { Card } from "@/components/primitives/Card";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface AudienceGridProps extends BlockProps {
  heading: SectionHeadingProps;
  audiences: readonly { title: string; body: string; href?: string }[];
}
export function AudienceGrid({ heading, audiences, tone, section }: AudienceGridProps) {
  const resolvedTone = blockTone(section, tone);
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
