import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { site } from "@/content/site";
import { contactLinks, fullAddress, directionsLink } from "@/lib/contact";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
import { mapTileSize, osmTiles } from "@/lib/map";
export interface ContactDetailsProps extends BlockProps {
  layout?: "stacked" | "grid";
  showMap?: boolean;
  details?: readonly {
    label: string;
    value: string;
    href?: string;
    icon: LucideIcon;
    note?: string;
  }[];
}
export function ContactDetails({
  layout = "stacked",
  showMap = false,
  tone,
  section,
  details,
}: ContactDetailsProps) {
  const address = fullAddress;
  const directions = directionsLink;
  const mapsKey = process.env.NEXT_PUBLIC_MAPS_KEY;
  const mapQuery = new URLSearchParams({
    center: address,
    markers: address,
    zoom: "14",
    size: "640x360",
    scale: "2",
    key: mapsKey ?? "",
  });
  const tiles = osmTiles(site.address.geo.latitude, site.address.geo.longitude, 15);
  const items: NonNullable<ContactDetailsProps["details"]> = details ?? [
    { label: "Phone", value: site.phone, href: contactLinks.phone, icon: Phone },
    { label: "Email", value: site.email, href: contactLinks.email, icon: Mail },
    {
      label: "WhatsApp",
      value: contactLinks.whatsapp ? "WhatsApp" : site.whatsapp,
      href: contactLinks.whatsapp,
      icon: MessageCircle,
    },
    { label: "Address", value: address, href: directions, icon: MapPin },
    { label: "Opening hours", value: site.hours, href: "/contact", icon: Clock },
  ];
  const listed = showMap ? items.filter((item) => item.label !== "Address") : items;
  const addressLines = [
    site.address.street,
    `${site.address.locality}, ${site.address.town}`,
    `${site.address.region} ${site.address.postcode}`,
  ];
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <div className="block-stack">
        <dl
          className={`grid gap-8 ${layout === "grid" ? `md:grid-cols-2 ${listed.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}` : ""}`}
        >
          {listed.map((item) => (
            <div key={item.label} className="relative min-w-0 space-y-2 pl-10">
              <dt className="text-body-sm font-bold">
                <span className="absolute left-0 top-0">
                  <Icon
                    icon={item.icon}
                    tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
                  />
                </span>
                {item.label}
              </dt>
              <dd className="contact-value block-muted">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={
                      item.label === "Phone"
                        ? "text-h3 font-bold underline-offset-4 hover:underline"
                        : "underline-offset-4 hover:underline"
                    }
                  >
                    {item.value}
                  </Link>
                ) : (
                  <span className={item.label === "Phone" ? "text-h3 font-bold" : "text-body-sm"}>
                    {item.value}
                  </span>
                )}
                {item.note && <p className="mt-2 text-body-sm">{item.note}</p>}
              </dd>
            </div>
          ))}
        </dl>
        {showMap && (
          <div className="map-placeholder block-border relative overflow-hidden rounded-lg border bg-surface shadow-md">
            <div
              role="img"
              aria-label={`Map showing ${address}`}
              className="relative h-72 overflow-hidden bg-surface-subtle md:h-96"
            >
              {mapsKey ? (
                <Image
                  src={`https://maps.googleapis.com/maps/api/staticmap?${mapQuery}`}
                  alt=""
                  width={1280}
                  height={720}
                  loading="lazy"
                  unoptimized
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <div className="absolute left-1/2 top-1/2 md:left-2/3">
                    {tiles.map((tile) => (
                      <Image
                        key={tile.src}
                        src={tile.src}
                        alt=""
                        width={mapTileSize}
                        height={mapTileSize}
                        loading="lazy"
                        unoptimized
                        draggable={false}
                        className="absolute max-w-none select-none"
                        style={{ left: tile.left, top: tile.top }}
                      />
                    ))}
                    <span className="absolute left-0 top-0 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-accent/15" />
                    <span className="absolute left-0 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-accent shadow-md" />
                  </div>
                  <p className="absolute bottom-0 right-0 rounded-tl-md bg-surface/85 px-2 py-1 text-micro text-ink-muted">
                    ©{" "}
                    <a
                      href="https://www.openstreetmap.org/copyright"
                      className="underline underline-offset-2"
                    >
                      OpenStreetMap contributors
                    </a>
                  </p>
                </>
              )}
            </div>
            <div className="block-border space-y-4 border-t bg-surface p-6 text-ink md:absolute md:bottom-6 md:left-6 md:w-80 md:rounded-lg md:border md:shadow-lg">
              <p className="flex items-center gap-2 text-label uppercase text-accent">
                <Icon icon={MapPin} size={20} />
                Address
              </p>
              <div className="space-y-1">
                <p className="text-h4 font-bold">{site.name}</p>
                <address className="text-body-sm not-italic text-ink-body">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <a
                href={directions}
                className="block-border flex items-center justify-between gap-4 border-t pt-4 font-bold text-accent hover:text-accent-hover"
              >
                Get directions
                <Icon icon={ArrowRight} size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
