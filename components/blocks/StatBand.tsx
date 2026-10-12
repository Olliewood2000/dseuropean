import { Section } from "@/components/layout/Section";
import { CountUp } from "@/components/primitives/CountUp";
import type { SectionOptions } from "@/lib/blocks";
export interface StatBandProps {
  stats: readonly { figure: string; label: string; suffix?: string }[];
  background?: "subtle" | "inverse";
  section?: SectionOptions;
}
export function StatBand({ stats, background = "subtle", section }: StatBandProps) {
  return (
    <Section background={background} {...section}>
      <dl
        className={`grid gap-10 md:grid-cols-2 ${stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      >
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat-item">
            <dt className="stat-figure block-accent text-display-lg font-bold">
              <CountUp value={stat.figure} index={index} />
              {stat.suffix && <span className="ml-2 text-h3">{stat.suffix}</span>}
            </dt>
            <dd className="block-muted mt-4 text-body-sm">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
