import { services } from "./index";
import { furnitureTransport } from "./furniture-transport";
import { retailDisplayTransport } from "./retail-display-transport";
import { exhibitionTransport } from "./exhibition-transport";
import { officeRelocations } from "./office-relocations";
import { equipmentTransport } from "./equipment-transport";
import { businessDeliveries } from "./business-deliveries";
import type { ServicePage, ServiceSlug } from "./types";

// Private deliveries remain unregistered until the client confirms that audience.
const pages: Partial<Record<ServiceSlug, ServicePage>> = {
  "furniture-transport": furnitureTransport,
  "retail-display-transport": retailDisplayTransport,
  "exhibition-transport": exhibitionTransport,
  "office-relocations": officeRelocations,
  "equipment-transport": equipmentTransport,
  "business-deliveries": businessDeliveries,
};

export const servicePages: readonly ServicePage[] = services.flatMap(({ slug }) => {
  const page = pages[slug];
  return page ? [page] : [];
});

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
