import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { ArrowLink } from "@/components/primitives/ArrowLink";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface FleetStripProps extends BlockProps {
  heading?: SectionHeadingProps;
  vehicles: readonly { name: string; capacity?: string; note?: string; icon: LucideIcon }[];
  cta?: { label: string; href: string };
}
export function FleetStrip({ heading, vehicles, cta, tone, section }: FleetStripProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {heading && <SectionHeading {...heading} tone={resolvedTone} />}
        <ul className="fleet-grid grid gap-6 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr">
          {vehicles.map((vehicle) => (
            <li key={vehicle.name} className="space-y-3">
              <Icon
                icon={vehicle.icon}
                tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
              />
              <h3 className="text-body font-bold">{vehicle.name}</h3>
              {vehicle.capacity && <p className="block-muted text-body-sm">{vehicle.capacity}</p>}
              {vehicle.note && <p className="block-muted text-body-sm">{vehicle.note}</p>}
            </li>
          ))}
        </ul>
        {cta && (
          <ArrowLink href={cta.href} tone={resolvedTone}>
            {cta.label}
          </ArrowLink>
        )}
      </div>
    </Section>
  );
}
