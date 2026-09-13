import { ArrowRight } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/primitives/Card";
import { Icon } from "@/components/primitives/Icon";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface RelatedServicesProps extends BlockProps {
  services: readonly { title: string; href: string }[];
  title?: string;
}
export function RelatedServices({ services, title, tone, section }: RelatedServicesProps) {
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <div className="block-stack">
        {title && <h2 className="text-h2">{title}</h2>}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <Card href={service.href} tone={resolvedTone} key={service.href}>
              <div className="card-body flex items-start justify-between gap-6">
                <h3 className="text-h4">{service.title}</h3>
                <Icon
                  icon={ArrowRight}
                  size={20}
                  tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
