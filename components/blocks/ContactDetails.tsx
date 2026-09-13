import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { site } from "@/content/site";
import { contactLinks } from "@/lib/contact";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface ContactDetailsProps extends BlockProps {
  layout?: "stacked" | "grid";
  showMap?: boolean;
}
export function ContactDetails({
  layout = "stacked",
  showMap = false,
  tone,
  section,
}: ContactDetailsProps) {
  const address = [
    site.address.street,
    site.address.locality,
    site.address.town,
    site.address.region,
    site.address.postcode,
  ].join(", ");
  const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const items = [
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
        <dl className={`grid gap-8 ${layout === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : ""}`}>
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
                    <span className="text-body-sm">{item.value}</span>
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        {showMap && (
          <div className="map-placeholder block-border space-y-4 rounded-lg border p-8">
            <p className="font-bold">Map preview</p>
            <p className="block-muted">
              The static map will be connected when the map settings are supplied.
            </p>
            <a href={directions} className="block-accent font-bold underline underline-offset-4">
              Get directions
            </a>
          </div>
        )}
      </div>
    </Section>
  );
}
