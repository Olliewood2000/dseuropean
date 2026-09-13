import { isPlaceholder, site } from "@/content/site";

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
