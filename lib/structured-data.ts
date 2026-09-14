import { site, isPlaceholder } from "@/content/site";
import { absoluteUrl } from "./site-origin";

const organisationId = absoluteUrl("/#organization");
export const businessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organisationId,
      name: site.name,
      legalName: site.legalName,
      url: absoluteUrl("/"),
      logo: absoluteUrl(site.logos.shortDark),
    },
    {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      parentOrganization: { "@id": organisationId },
      name: site.name,
      url: absoluteUrl("/"),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: `${site.address.locality}, ${site.address.town}`,
        addressRegion: site.address.region,
        postalCode: site.address.postcode,
        addressCountry: site.address.country,
      },
      ...(!isPlaceholder(site.phoneInternational) ? { telephone: site.phoneInternational } : {}),
      ...(!isPlaceholder(site.email) ? { email: site.email } : {}),
      areaServed: [
        { "@type": "Country", name: "United Kingdom", identifier: "GB" },
        { "@type": "Place", name: "European Union" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
};

export function serviceSchema(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": organisationId },
  };
}

export function webPageSchema(
  type: "CollectionPage" | "ContactPage",
  path: string,
  name: string,
  description: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": absoluteUrl(`${path}#page`),
    url: absoluteUrl(path),
    name,
    description,
    about: { "@id": organisationId },
  };
}
