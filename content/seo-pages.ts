import { homeMeta } from "./home";
import { servicesHub, servicesHubMeta } from "./services-hub";
import { servicePages } from "./services/pages";
import { storage, storageMeta } from "./storage";
import { about, aboutMeta } from "./about";
import { quotePage, quoteMeta, contactPage, contactMeta } from "./enquiry-pages";
import { legalPages } from "./legal";

export interface SeoPage {
  path: string;
  title: string;
  meta: { title: string; description: string; ogTitle?: string; ogDescription?: string };
}

// Only implemented public routes. Private deliveries and Recent Jobs await client decisions.
export const seoPages: readonly SeoPage[] = [
  { path: "/", title: homeMeta.ogTitle, meta: homeMeta },
  { path: "/services", title: servicesHub.hero.title, meta: servicesHubMeta },
  ...servicePages.map((page) => ({
    path: `/services/${page.slug}`,
    title: page.hero.title,
    meta: page.meta,
  })),
  { path: "/storage", title: storage.hero.title, meta: storageMeta },
  { path: "/about", title: about.hero.title, meta: aboutMeta },
  { path: "/quote", title: quotePage.hero.title, meta: quoteMeta },
  { path: "/contact", title: contactPage.hero.title, meta: contactMeta },
  ...Object.entries(legalPages).map(([slug, page]) => ({
    path: `/${slug}`,
    title: page.title,
    meta: page.meta,
  })),
];

export function getSeoPage(path: string): SeoPage {
  const page = seoPages.find((page) => page.path === path);
  if (!page) throw new Error(`No supplied SEO content for ${path}`);
  return page;
}
