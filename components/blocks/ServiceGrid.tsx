import { ArrowRight, type LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Card } from "@/components/primitives/Card";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { ServiceShowcase } from "./ServiceShowcase";
import { renderMedia, type Media } from "@/lib/media";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface ServiceGridProps extends BlockProps {
  heading?: SectionHeadingProps;
  services: readonly {
    title: string;
    excerpt: string;
    href: string;
    icon?: LucideIcon;
    image?: Media;
  }[];
  columns?: 2 | 3;
  showImages?: boolean;
  variant?: "cards" | "showcase";
}
export function ServiceGrid({
  heading,
  services,
  columns = 3,
  showImages = false,
  variant = "cards",
  tone,
  section,
}: ServiceGridProps) {
  const resolvedTone = blockTone(section, tone);
  const iconTone = resolvedTone === "dark" ? "accent-on-dark" : "accent";
  const headingNode = heading && <SectionHeading {...heading} tone={resolvedTone} />;
  if (variant === "showcase") {
    return (
      <Section {...sectionOptions(section, tone)}>
        <ServiceShowcase
          heading={headingNode}
          items={services.map((service) => ({
            title: service.title,
            excerpt: service.excerpt,
            href: service.href,
            icon: service.icon && <Icon icon={service.icon} tone={iconTone} />,
            cardMedia:
              service.image &&
              renderMedia(service.image, {
                aspect: "3/2",
                sizes: "(max-width: 767px) calc(100vw - 40px), 50vw",
              }),
            stageMedia:
              service.image &&
              renderMedia(service.image, {
                aspect: "1/1",
                sizes: "(max-width: 1279px) 48vw, 640px",
              }),
          }))}
          arrow={<Icon icon={ArrowRight} size={20} tone={iconTone} />}
        />
      </Section>
    );
  }
  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {headingNode}
        <div
          className={`grid gap-4 md:grid-cols-2 lg:gap-6 ${columns === 3 ? "lg:grid-cols-3" : ""}`}
        >
          {services.map((service) => (
            <Card key={service.href} href={service.href} tone={resolvedTone}>
              {showImages &&
                service.image &&
                renderMedia(service.image, {
                  aspect: "3/2",
                  sizes:
                    columns === 3
                      ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 400px"
                      : "(max-width: 767px) calc(100vw - 40px), 600px",
                })}
              <div className="card-body flex flex-1 flex-col gap-4">
                {service.icon && <Icon icon={service.icon} tone={iconTone} />}
                <h3 className="text-h4">{service.title}</h3>
                <p className="block-muted text-body-sm">{service.excerpt}</p>
                <span className="arrow-link block-accent mt-auto pt-4">
                  View service
                  <Icon icon={ArrowRight} size={20} tone={iconTone} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
