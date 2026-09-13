import { Section } from "@/components/layout/Section";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface CoverageListProps extends BlockProps {
  heading: SectionHeadingProps;
  regions: readonly { name: string; detail?: string }[];
}
export function CoverageList({ heading, regions, tone, section }: CoverageListProps) {
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        <SectionHeading {...heading} tone={blockTone(section, tone)} />
        <dl className="grid gap-x-12 lg:grid-cols-2">
          {regions.map((region) => (
            <div key={region.name} className="block-border border-t py-6">
              <dt className="text-h4 font-bold">{region.name}</dt>
              {region.detail && <dd className="block-muted mt-3">{region.detail}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
