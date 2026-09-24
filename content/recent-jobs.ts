import { coverage } from "./coverage";
import type { ComponentProps } from "react";
import type { Hero } from "@/components/blocks/Hero";
import type { FeatureBand } from "@/components/blocks/FeatureBand";
import type { JobGrid } from "@/components/blocks/JobGrid";
import type { TwoColumnText } from "@/components/blocks/TwoColumnText";
import type { CoverageList } from "@/components/blocks/CoverageList";
import type { QuoteCTA } from "@/components/blocks/QuoteCTA";
export const recentJobsMeta = {
  title: "Recent Jobs: Installations in the UK, Europe & Beyond | DS European",
  description:
    "Interior installations delivered and fitted on site in Lake Como, Girona, France and Texas, alongside the everyday work across the UK.",
};
export const recentJobs = {
  hero: {
    variant: "page",
    eyebrow: "RECENT JOBS",
    title: "Recent jobs",
    subtitle:
      "A sample of the work, from interior installations abroad to the scheduled runs that happen every week without anyone noticing.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Recent Jobs",
      },
    ],
    section: {
      id: "jobs-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  international: {
    eyebrow: "INTERIOR DESIGN INSTALLATIONS",
    title: "We travel with the furniture",
    items: ["Lake Como", "Girona", "France", "Texas"],
    body: "When a designer specifies a scheme for a property abroad, someone still has to get it there in one piece and put it in the right room. On these projects we collected in the UK, moved the consignment, and our own fitters completed the installation on site.",
    section: {
      id: "jobs-international",
      background: "inverse",
      padding: "generous",
      cut: "both",
    },
  },
  jobs: {
    heading: {
      title: "Recent work",
      intro:
        "Written up rather than photographed, for now. Our crews are collecting images on site and this page will grow.",
    },
    variant: "narrative",
    columns: 3,
    jobs: [
      {
        title: "",
        location: "Lake Como, Italy",
        service: "Furniture and interior installation",
        excerpt:
          "An interior design scheme collected in the UK and installed at a property on Lake Como. Our fitters travelled with the goods and completed the installation on site.",
      },
      {
        title: "",
        location: "Girona, Spain",
        service: "Furniture and interior installation",
        excerpt:
          "A specified furniture package moved from the UK to Girona and installed in the finished property by our own team.",
      },
      {
        title: "",
        location: "Texas, USA",
        service: "Furniture and interior installation",
        excerpt:
          "An interior installation delivered beyond Europe, collected in the UK and fitted on site in Texas.",
      },
      {
        title: "",
        location: "France",
        service: "Furniture and interior installation",
        excerpt:
          "Interior design installation work delivered into France, collected from UK makers and installed on arrival.",
      },
    ],
    section: {
      id: "jobs-work",
      background: "surface",
      padding: "standard",
    },
  },
  everyday: {
    title: "And the rest of it",
    body: [
      "Most of what we do is not a job in Italy. It is a scheme collected from four makers and held until a property is ready, an office moved over a weekend so nobody loses a working day, a stand delivered into a venue inside a two hour build up slot, and the same run to the same places every week for customers who have used us for years.",
      "The majority of our customers are repeat traders. The work that keeps a transport company going is the work nobody photographs.",
    ],
    cta: {
      label: "See our services",
      href: "/services",
      variant: "secondary",
    },
    section: {
      id: "jobs-everyday",
      background: "subtle",
      padding: "compact",
    },
  },
  coverage: {
    heading: {
      eyebrow: "COVERAGE",
      title: "Where we have worked",
    },
    regions: coverage,
    section: {
      id: "jobs-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  quote: {
    title: "Got something similar?",
    body: "Tell us what needs moving and where it needs to go. Whether it is one piece across the county or a full scheme across Europe, send us the details and we will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "jobs-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies {
  hero: ComponentProps<typeof Hero>;
  international: ComponentProps<typeof FeatureBand>;
  jobs: ComponentProps<typeof JobGrid>;
  everyday: ComponentProps<typeof TwoColumnText>;
  coverage: ComponentProps<typeof CoverageList>;
  quote: ComponentProps<typeof QuoteCTA>;
};
