import { Section } from "@/components/layout/Section";
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
        className={`grid gap-8 md:grid-cols-2 ${stats.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="block-accent text-display-md font-bold">
              {stat.figure}
              {stat.suffix && <span className="ml-2 text-h3">{stat.suffix}</span>}
            </dt>
            <dd className="block-muted mt-4 text-body-sm">{stat.label}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
