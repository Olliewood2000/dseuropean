import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { ArrowLink } from "@/components/primitives/ArrowLink";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { VehicleCard, type VehicleCardProps } from "./VehicleCard";
import { renderMedia, type Media } from "@/lib/media";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface FleetStripProps extends BlockProps {
  heading?: SectionHeadingProps;
  vehicles: readonly VehicleCardProps[];
  cta?: { label: string; href: string };
  /** With media, the block renders as a split: heading and image left, vehicle cards right. */
  media?: Media;
  /** Trailing part of the heading title, set on its own line in accent blue. */
  titleAccent?: string;
}
function splitTitle(title: string, accent?: string) {
  return accent && title.endsWith(accent)
    ? [title.slice(0, -accent.length).trimEnd(), accent]
    : [title, undefined];
}
export function FleetStrip({
  heading,
  vehicles,
  cta,
  media,
  titleAccent,
  tone,
  section,
}: FleetStripProps) {
  const resolvedTone = blockTone(section, tone);
  const iconTone = resolvedTone === "dark" ? "accent-on-dark" : "accent";
  const ctaLink = cta && (
    <ArrowLink href={cta.href} tone={resolvedTone}>
      {cta.label}
    </ArrowLink>
  );

  if (media) {
    const [titleLead, titleTail] = heading ? splitTitle(heading.title, titleAccent) : [];
    return (
      <Section {...sectionOptions(section, tone)}>
        <div className="fleet-showcase">
          <div className="fleet-showcase-intro">
            {heading && (
              <div className="space-y-5">
                {heading.eyebrow && (
                  <div className="fleet-eyebrow">
                    <Eyebrow tone={resolvedTone}>{heading.eyebrow}</Eyebrow>
                  </div>
                )}
                <h2 className="fleet-title">
                  {titleLead}
                  {titleTail && (
                    <>
                      {" "}
                      <span className="fleet-title-accent">{titleTail}</span>
                    </>
                  )}
                </h2>
                {heading.intro && <p className="fleet-intro">{heading.intro}</p>}
              </div>
            )}
            <div className="fleet-media">
              <span aria-hidden="true" className="fleet-media-motif" />
              {renderMedia(media, {
                aspect: "3/2",
                masked: false,
                sizes:
                  "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 46vw, 600px",
              })}
            </div>
          </div>
          <div className="fleet-showcase-cards">
            <span aria-hidden="true" className="fleet-cards-motif" />
            <ul className="vehicle-card-list">
              {vehicles.map((vehicle) => (
                <VehicleCard key={vehicle.name} {...vehicle} />
              ))}
            </ul>
            {ctaLink}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section {...sectionOptions(section, tone)}>
      <div className="block-stack">
        {heading && <SectionHeading {...heading} tone={resolvedTone} />}
        <ul className="fleet-grid grid gap-6 md:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr">
          {vehicles.map((vehicle) => (
            <li key={vehicle.name} className="space-y-3">
              <Icon icon={vehicle.icon} tone={iconTone} />
              <h3 className="text-body font-bold">{vehicle.name}</h3>
              {vehicle.capacity && <p className="block-muted text-body-sm">{vehicle.capacity}</p>}
              {vehicle.note && <p className="block-muted text-body-sm">{vehicle.note}</p>}
            </li>
          ))}
        </ul>
        {ctaLink}
      </div>
    </Section>
  );
}
