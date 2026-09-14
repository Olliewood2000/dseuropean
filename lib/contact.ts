import { isPlaceholder, site } from "@/content/site";

export const fullAddress = [
  site.address.street,
  site.address.locality,
  site.address.town,
  site.address.region,
  site.address.postcode,
].join(", ");
export const directionsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const contactLinks = {
  phone:
    isPlaceholder(site.phone) || isPlaceholder(site.phoneInternational)
      ? undefined
      : `tel:${site.phoneInternational}`,
  email: isPlaceholder(site.email) ? undefined : `mailto:${site.email}`,
  whatsapp: isPlaceholder(site.whatsapp)
    ? undefined
    : `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
};
