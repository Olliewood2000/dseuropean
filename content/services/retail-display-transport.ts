import { PackageCheck, Truck, Undo2 } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-retail-display-transport.md.
// Preserve visible verification markers; client sign-off is still required before launch.
export const retailDisplayTransport = {
  slug: "retail-display-transport",
  nav: services[1],
  meta: {
    title: "Retail Display & Pop-Up Unit Transport | DS European",
    description:
      "Pop-up units, store fixtures and point of sale delivered and installed. Multi site rollouts, out of hours access, storage between campaigns. UK and Europe.",
  },
  hero: {
    variant: "service",
    eyebrow: "RETAIL DISPLAYS",
    title: "Retail display and pop-up unit transport",
    subtitle:
      "Pop-up units, store fixtures and brand activation materials delivered securely and on schedule, installed on site, and stored between campaigns rather than left taking up your space.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    secondaryCta: {
      label: "Talk to us",
      href: "/contact",
    },
    image: {
      aspect: "3/2",
      brief:
        "A pop-up unit part assembled in a retail environment, before opening hours. Empty mall or shop floor reads well here.",
    },
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Services",
        href: "/services",
      },
      {
        label: "Retail Displays",
      },
    ],
    section: {
      id: "retail-display-transport-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "Retail runs to a launch date, not a delivery date",
    },
    body: [
      "A campaign goes live on a fixed day in every location at once. One late delivery is not one late delivery, it is a gap in a national rollout that somebody has to explain.",
      "We plan retail work backwards from the launch, with the access restrictions each site actually has rather than the ones the plan assumed.",
    ],
    bullets: [
      "Pop-up units and modular kiosks",
      "Store fixtures, shelving and gondolas",
      "Point of sale and promotional stands",
      "Mannequins, rails and display furniture",
      "Window schemes and seasonal dressing",
      "Signage, graphics and large format print",
      "Brand activation and sampling units",
      "Full store fit packages *(verify)*",
    ],
    media: {
      aspect: "3/2",
      brief: "Flat packed fixture panels wrapped and labelled on a trolley, ready to go in.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "retail-display-transport-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "ON SITE",
      title: "Most retail sites will not let you in at eleven on a Tuesday",
    },
    body: [
      "Shopping centres have delivery windows. High street units have loading restrictions. Concessions inside a department store have both, plus a host store with its own rules. None of that is a reason for a campaign to slip, but it does mean the work happens early, late or overnight.",
      "We work 24 hours a day, 365 days a year, and our fitters install on site rather than leaving cartons behind a counter for staff to deal with.",
    ],
    bullets: [
      "Delivery timed to centre and landlord access windows",
      "Early morning, evening and overnight installation",
      "Assembled and positioned by our own fitters",
      "Packaging removed on completion *(verify)*",
    ],
    cta: {
      label: "How we work",
      href: "/about",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Fitter assembling a display unit in an empty retail space, early light through the shopfront.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "retail-display-transport-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "One collection, many locations",
    },
    steps: [
      {
        number: "01",
        title: "Collection and consolidation",
        body: "We collect from your manufacturer or printer, bring the campaign together in our warehouse and check it against the site list before anything ships.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Scheduled delivery",
        body: "Each location gets its delivery timed to its own access window, sequenced so the whole estate lands inside the launch period.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Install, then recover",
        body: "Units assembled and positioned on site. At the end of the campaign we collect, return them to store, and they are ready for the next one.",
        icon: Undo2,
      },
    ],
    tone: "light",
    section: {
      id: "retail-display-transport-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "STORAGE AND FULFILMENT",
    title: "A campaign that ends does not have to be a campaign that is binned",
    body: "Most display kit gets used two or three times a year and takes up space for the other ten months. We hold units, fixtures and point of sale in our own warehouse, bring them out for the next activation, and put them back afterwards. Nothing needs storing in a stockroom or written off because there was nowhere to keep it.",
    cta: {
      label: "Storage and fulfilment",
      href: "/storage",
    },
    section: {
      id: "retail-display-transport-feature",
      background: "inverse",
      padding: "generous",
      cut: "both",
    },
  },
  coverage: {
    heading: {
      eyebrow: "COVERAGE",
      title: "UK, Europe and beyond",
    },
    regions: coverage,
    section: {
      id: "retail-display-transport-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Rollouts are typically booked around three weeks ahead, which is roughly the point at which site lists, access windows and print deadlines have settled enough to plan against. Single site deliveries and replacement kit can often be covered same day.",
      "Every campaign is priced individually. Eleven sites across the South East and a single unit into a Manchester centre are not the same job. Send us the site list, the launch date and what is being delivered to each location.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "retail-display-transport-lead-times",
      background: "subtle",
      padding: "compact",
    },
  },
  faqs: {
    heading: {
      title: "Common questions",
    },
    items: [
      {
        question: "Can you deliver to several stores from one collection?",
        answer:
          "Yes. We collect the campaign from your manufacturer or printer, consolidate it in our warehouse, and then deliver to each location on its own schedule. You deal with one company rather than coordinating a courier per site.",
      },
      {
        question: "Can you deliver outside shopping centre trading hours?",
        answer:
          "Yes. Most retail access windows fall early morning, evening or overnight, and we work 24 hours a day, 365 days a year. Tell us the centre's restrictions and we plan the delivery around them.",
      },
      {
        question: "Do you install the units or just deliver them?",
        answer:
          "Our fitters assemble and position on site. For retail work that usually matters more than the transport, because store staff should not be building a display before opening.",
      },
      {
        question: "What happens to the units when the campaign ends?",
        answer:
          "We collect them and return them to our warehouse, ready for the next activation. Recovery can be scheduled at the same time as the installation so the whole campaign is booked in one go.",
      },
      {
        question: "Can you hold stock and release it as we need it?",
        answer:
          "Yes. That is what our storage and fulfilment side is for. Kit sits with us between campaigns and goes out when you call it off.",
      },
      {
        question: "How late can we add a site to the rollout?",
        answer:
          "Later than you would expect, but tell us as soon as you know. Adding a location to an existing schedule is usually straightforward. Adding one on the launch morning is a different conversation.",
      },
    ],
    section: {
      id: "retail-display-transport-faq",
      background: "surface",
      padding: "standard",
    },
  },
  related: {
    services: [
      {
        title: "Exhibitions",
        href: "/services/exhibition-transport",
      },
      {
        title: "Business Deliveries",
        href: "/services/business-deliveries",
      },
      {
        title: "Storage and Fulfilment",
        href: "/storage",
      },
    ],
    section: {
      id: "retail-display-transport-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Got a campaign to get out?",
    body: "Send us the site list, the launch date and what needs to land at each location. We will come back with a price and a schedule.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "retail-display-transport-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
