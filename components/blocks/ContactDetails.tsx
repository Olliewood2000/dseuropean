import Link from "next/link";
import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { site } from "@/content/site";
import { contactLinks, fullAddress, directionsLink } from "@/lib/contact";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
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
  const resolvedTone = blockTone(section, tone);
  return (
    <Section {...sectionOptions(section, tone, "compact")}>
      <div className="block-stack">
        <dl
          className={`grid gap-8 ${layout === "grid" ? `md:grid-cols-2 ${items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}` : ""}`}
        >
          {items.map((item) => (
            <div key={item.label} className="flex min-w-0 items-start gap-4">
              <Icon icon={item.icon} tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"} />
              <div className="min-w-0 space-y-2">
                <dt className="text-body-sm font-bold">{item.label}</dt>
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
            </div>
          ))}
        </dl>
        {showMap && (
          <div className="map-placeholder block-border space-y-4 rounded-lg border p-8">
            {mapsKey ? (
              <Image
                src={`https://maps.googleapis.com/maps/api/staticmap?${mapQuery}`}
                alt={`Map showing ${address}`}
                width={1280}
                height={720}
                loading="lazy"
                unoptimized
                className="h-auto w-full rounded-lg"
              />
            ) : (
              <>
                <p className="font-bold">Map preview</p>
                <p className="block-muted">
                  The static map will be connected when the map settings are supplied.
                </p>
              </>
            )}
            <a href={directions} className="block-accent font-bold underline underline-offset-4">
              Get directions
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
