import { PackageCheck, Warehouse, Truck } from "lucide-react";
import type { HeroProps } from "@/components/blocks/Hero";
import type { SplitFeatureProps } from "@/components/blocks/SplitFeature";
import type { ProcessStepsProps } from "@/components/blocks/ProcessSteps";
import type { AudienceGridProps } from "@/components/blocks/AudienceGrid";
import type { FAQProps } from "@/components/blocks/FAQ";
import type { QuoteCTAProps } from "@/components/blocks/QuoteCTA";
// Supplied Storage copy. The blocked warehouse FAQ is omitted; the page hero retains its future image brief without rendering it.
export const storageMeta = {
  title: "Storage & Fulfilment for Projects and Campaigns | DS European",
  description:
    "Warehouse storage that fits around a project. Hold goods until the site is ready, consolidate deliveries from several suppliers, and call stock off when you need it.",
};
export const storage = {
  hero: {
    variant: "page",
    eyebrow: "STORAGE AND FULFILMENT",
    title: "Somewhere to put it until you need it",
    subtitle:
      "Our own warehouse, run by the same company doing the transport. Goods held until the site is ready, schemes consolidated from several suppliers, and stock called off when it suits your programme.",
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
        "Warehouse interior, racked and labelled goods, clean and well lit. This is the single most important missing photograph on the site after the installation shots, because the whole page asks the reader to trust a building they cannot see.",
    },
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Storage and Fulfilment",
      },
    ],
    section: {
      id: "storage-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  } satisfies HeroProps,
  problem: {
    heading: {
      eyebrow: "THE PROBLEM",
      title: "The goods are ready. The site is not.",
    },
    body: [
      "It happens on almost every project. The furniture is finished, the stand has come back from a show, the fixtures have arrived from the printer, and the place they are meant to go is three weeks behind.",
      "Without somewhere to put it, that becomes somebody's problem. Usually it becomes a corner of a workshop, a hallway at the client's office, or a self storage unit booked in a hurry by whoever had a card on them. None of those are good for goods that took four months to make.",
    ],
    bullets: [
      "Hold goods when a site or property is delayed",
      "Store between phases of a project",
      "Keep exhibition stands and display kit between uses",
      "Take delivery on your behalf while you are elsewhere",
      "Free up workshop and office space",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Wrapped furniture on racking, labelled with job references. Detail of the labelling is more persuasive than a wide empty aisle.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "storage-problem",
      background: "surface",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  consolidation: {
    heading: {
      eyebrow: "CONSOLIDATION",
      title: "Four suppliers, one delivery",
    },
    body: [
      "A specified scheme rarely comes from one place. The joinery is made in one workshop, the upholstery in another, the lighting is imported and the stone arrives separately. Delivered individually to a live site, that is four bookings, four access slots and four chances for something to arrive on a day nobody is there.",
      "We take them all into the warehouse as they are finished, check them against the schedule, and deliver to site as one coordinated installation on the date you actually want it.",
    ],
    bullets: [
      "Goods received from multiple suppliers on your behalf",
      "Checked against your schedule as they arrive",
      "Held together until the full scheme is complete",
      "Delivered as a single coordinated installation",
      "Call off in stages where a project is phased",
    ],
    cta: {
      label: "How we work",
      href: "/services",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Several distinctly different items grouped together on the warehouse floor, clearly staged for one job.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "storage-consolidation",
      background: "subtle",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "In, held, out",
    },
    steps: [
      {
        number: "01",
        title: "Goods in",
        body: "We collect, or receive delivery on your behalf. Everything is checked in against your job reference and the schedule.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Held",
        body: "Stored in our own warehouse rather than a third party facility, so the same company remains responsible throughout.",
        icon: Warehouse,
      },
      {
        number: "03",
        title: "Called off",
        body: "Released when you need it, delivered by our own vehicles, installed on site by our own fitters.",
        icon: Truck,
      },
    ],
    tone: "light",
    section: {
      id: "storage-process",
      background: "surface",
      padding: "standard",
    },
  } satisfies ProcessStepsProps,
  audiences: {
    heading: {
      eyebrow: "WHO USES IT",
      title: "Mostly people whose deadlines moved",
    },
    audiences: [
      {
        title: "Interior designers",
        body: "Schemes collected from makers as they finish, held until the property is ready, then installed as one job.",
      },
      {
        title: "Event organisers",
        body: "Stands, cases and event kit stored between shows instead of taking up space for ten months of the year.",
      },
      {
        title: "Retail and brand teams",
        body: "Display units and point of sale held between campaigns, called off for the next activation.",
      },
      {
        title: "Fit-out contractors",
        body: "Furniture and fittings held off site until the programme reaches the point where they can go in.",
      },
    ],
    section: {
      id: "storage-audiences",
      background: "subtle",
      padding: "standard",
    },
  } satisfies AudienceGridProps,
  faqs: {
    heading: {
      title: "Common questions",
    },
    items: [
      {
        question: "How long can you store goods for?",
        answer:
          "From a few days to as long as a project needs. Short term storage around a delayed site and longer term storage of display kit between campaigns are both normal.",
      },
      {
        question: "Can you take delivery on our behalf?",
        answer:
          "Yes. Suppliers deliver into our warehouse, we check the goods in against your job reference, and you are told what has landed rather than having to chase it.",
      },
      {
        question: "Can you hold a scheme from several suppliers and deliver it as one?",
        answer:
          "Yes, and that is what most of our project storage is used for. Items arrive as each maker finishes, sit together until the scheme is complete, then go to site as a single installation.",
      },
      {
        question: "Can we call goods off in stages?",
        answer:
          "Yes. Phased projects and staged rollouts are handled by releasing part of the job at a time, with the rest staying in store.",
      },
      {
        question: "Do you handle the delivery out of storage as well?",
        answer:
          "Yes. It is the same company throughout. The goods are collected by us, stored by us, delivered by us and installed by us, so nothing changes hands between suppliers.",
      },
    ],
    section: {
      id: "storage-faq",
      background: "surface",
      padding: "standard",
    },
  } satisfies FAQProps,
  quote: {
    title: "Need somewhere to put it?",
    body: "Tell us roughly what it is, how much of it there is and how long you need it held. We will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "storage-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  } satisfies QuoteCTAProps,
};
