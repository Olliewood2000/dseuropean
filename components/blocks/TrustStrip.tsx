import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/primitives/CountUp";
import { sectionOptions, type BlockProps } from "@/lib/blocks";
export interface TrustStripProps extends BlockProps {
  items: readonly { figure: string; label: string }[];
}
export function TrustStrip({ items, tone = "light", section }: TrustStripProps) {
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <dl
        className={`trust-grid grid gap-10 md:grid-cols-2 ${items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      >
        {items.map((item, index) => (
          <div key={item.label} className="stat-item">
            <dt className="stat-figure block-accent text-display-md font-bold">
              <CountUp value={item.figure} index={index} />
            </dt>
            <dd className="block-muted mt-3 text-body-sm">{item.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
