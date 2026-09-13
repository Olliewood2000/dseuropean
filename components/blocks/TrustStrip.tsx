import { Section } from "@/components/layout/Section";
import { sectionOptions, type BlockProps } from "@/lib/blocks";
export interface TrustStripProps extends BlockProps {
  items: readonly { figure: string; label: string }[];
}
export function TrustStrip({ items, tone = "light", section }: TrustStripProps) {
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <dl
        className={`trust-grid grid gap-8 md:grid-cols-2 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      >
        {items.map((item) => (
          <div key={item.label}>
            <dt className="block-accent text-h2 font-bold">{item.figure}</dt>
            <dd className="block-muted mt-2 text-body-sm">{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
