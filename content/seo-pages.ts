import { homeMeta } from "./home";
import { servicesHub, servicesHubMeta } from "./services-hub";
import { servicePages } from "./services/pages";
import { storage, storageMeta } from "./storage";
import { about, aboutMeta } from "./about";
import { quotePage, quoteMeta, contactPage, contactMeta } from "./enquiry-pages";
import { legalPages } from "./legal";
import { recentJobsMeta } from "./recent-jobs";
import { isReviewBuild } from "@/lib/review";

export interface SeoPage {
  path: string;
  title: string;
  meta: { title: string; description: string; ogTitle?: string; ogDescription?: string };
}

// Review drafts are omitted from production until the outstanding decisions are resolved.
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
  ...(isReviewBuild ? [{ path: "/recent-jobs", title: "Recent jobs", meta: recentJobsMeta }] : []),
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
