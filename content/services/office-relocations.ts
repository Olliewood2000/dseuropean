import { ClipboardList, Truck, Wrench } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-office-relocations.md.
// Preserve visible verification markers; client sign-off is still required before launch.
export const officeRelocations = {
  slug: "office-relocations",
  nav: services[3],
  meta: {
    title: "Office Relocations & Installation, UK and Europe | DS European",
    description:
      "Full office moves handled end to end. Dismantling, transport, installation and reassembly, run out of hours so you do not lose a working day. Surplus furniture stored.",
  },
  hero: {
    variant: "service",
    eyebrow: "OFFICE RELOCATIONS",
    title: "Office relocations, dismantled, moved and reinstalled",
    subtitle:
      "We run office moves out of hours and over weekends so your team arrives to a working office rather than a room full of boxes. Furniture comes apart, travels, and goes back together in the right place.",
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
        "Fitters reassembling desks in an empty, newly fitted office. Daylight, wide enough to read as a real workspace. 3/2 crop, masked to the motif shape.",
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
        label: "Office Relocations",
      },
    ],
    section: {
      id: "office-relocations-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "An office is not one job, it is forty small ones",
    },
    body: [
      "A move is rarely just furniture. It is desks that have to come apart, a boardroom table that will not fit through the new doorway, storage that needs emptying first, and a reception area that has to look finished on the first morning.",
      "We plan the move around the building and the deadline rather than around the van. Our supervisors survey both sites, work out the access, and sequence the move so nothing arrives before there is somewhere to put it.",
    ],
    bullets: [
      "Desks, benching systems and task seating",
      "Boardroom and meeting room furniture",
      "Storage, pedestals, lockers and filing",
      "Reception furniture and breakout areas",
      "Partitions and screens *(verify)*",
      "Archive, documents and stored records",
      "Server and IT equipment *(verify)*",
      "Artwork, signage and branded fittings",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Stacked and labelled crates on a trolley in a corridor, mid-move. Ordinary, unstaged, clearly a real job.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "office-relocations-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "ON SITE",
      title: "It goes back together the way it came apart",
    },
    body: [
      "Ten of our team are supervisors and fitters. They take the furniture down at the old building and put it back up at the new one, which means nobody on your side is left with an allen key and a floor plan on Monday.",
      "Everything is labelled against the new layout before it moves, so a desk that leaves the third floor of one building arrives at the right position on the second floor of the next.",
    ],
    bullets: [
      "Dismantling and reassembly by our own fitters",
      "Labelled against your floor plan before collection",
      "Positioned to the new layout, not left in a pile",
      "Packaging and waste removed on completion *(verify)*",
    ],
    cta: {
      label: "How we work",
      href: "/about",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Close crop of a fitter's hands securing a desk frame, DS European polo visible at the edge of frame.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "office-relocations-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Surveyed, moved, working",
    },
    steps: [
      {
        number: "01",
        title: "Site survey and plan",
        body: "A supervisor visits both buildings, checks access, lifts and loading, and agrees the sequence and the timings with you.",
        icon: ClipboardList,
      },
      {
        number: "02",
        title: "The move",
        body: "Usually an evening, a weekend or a bank holiday. Dismantled, loaded, transported and unloaded against the new floor plan.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Reinstallation",
        body: "Furniture reassembled and positioned, surplus taken into storage or removed, the building left ready to work in.",
        icon: Wrench,
      },
    ],
    tone: "light",
    section: {
      id: "office-relocations-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "WHEN IT SUITS YOU",
    title: "We move offices when the office is empty",
    items: ["Evenings", "Weekends", "Bank holidays", "Overnight"],
    body: "We operate 24 hours a day, 365 days a year. For most of the moves we run, that is the whole point. The business closes on Friday in one building and opens on Monday in another, and nobody loses a day's trading in between.",
    cta: {
      label: "Get a quote",
      href: "/quote",
    },
    section: {
      id: "office-relocations-feature",
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
      id: "office-relocations-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Office moves are typically booked around three weeks ahead. That is not padding. It is the time needed to survey both buildings, confirm lift and loading bay access, agree a floor plan and book the right crew for the date you actually want.",
      "Every move is priced individually after the survey. A twelve desk office over one floor and a two hundred desk move across a weekend are not the same job and a rate card would be guesswork. Tell us the two addresses and roughly how many people and we will arrange a survey.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "office-relocations-lead-times",
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
        question: "Can you move us over a weekend so we do not lose a working day?",
        answer:
          "Yes, and most of our office moves run that way. We work 24 hours a day, 365 days a year, so evenings, weekends and bank holidays are normal working time for us rather than a surcharged exception.",
      },
      {
        question: "Do you dismantle and reassemble the furniture?",
        answer:
          "Yes. Our own fitters take it down at the old building and reassemble it at the new one, positioned against your floor plan. It is not left flat packed for your team to deal with.",
      },
      {
        question: "What happens to furniture we no longer need?",
        answer:
          "It can go into our warehouse rather than being disposed of on the day. That is useful when a new layout is still being finalised, or when you want to hold spare desks for a later phase.",
      },
      {
        question: "Can the move happen in phases, floor by floor?",
        answer:
          "Yes. Phased moves are common where a business cannot close entirely. We sequence it with you so each department moves and is working again before the next one starts.",
      },
      {
        question: "Do you survey the buildings first?",
        answer:
          "Yes, for anything beyond a very small move. A supervisor visits both sites to check access, lifts, loading and parking restrictions before anything is quoted or booked.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "Around three weeks is typical. If you have a lease date driving the move, tell us early even if the details are not settled, because the date is the part that is hard to change.",
      },
    ],
    section: {
      id: "office-relocations-faq",
      background: "surface",
      padding: "standard",
    },
  },
  related: {
    services: [
      {
        title: "Furniture",
        href: "/services/furniture-transport",
      },
      {
        title: "Equipment",
        href: "/services/equipment-transport",
      },
      {
        title: "Storage and Fulfilment",
        href: "/storage",
      },
    ],
    section: {
      id: "office-relocations-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Planning a move?",
    body: "Tell us where you are now, where you are going and roughly how many people. We will arrange a survey and come back with a price and a date.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "office-relocations-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
