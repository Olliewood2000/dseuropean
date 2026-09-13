import { services } from "./index";
import { furnitureTransport } from "./furniture-transport";
import type { ServicePage, ServiceSlug } from "./types";

// Only implemented services are registered. The six remaining services are Phase 5.
const pages: Partial<Record<ServiceSlug, ServicePage>> = {
  "furniture-transport": furnitureTransport,
};

export const servicePages: readonly ServicePage[] = services.flatMap(({ slug }) => {
  const page = pages[slug];
  return page ? [page] : [];
});

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((page) => page.slug === slug);
}
