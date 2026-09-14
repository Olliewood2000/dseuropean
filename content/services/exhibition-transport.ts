import { PackageCheck, Truck, Undo2 } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-exhibition-transport.md.
// Preserve visible verification markers; client sign-off is still required before launch.
export const exhibitionTransport = {
  slug: "exhibition-transport",
  nav: services[2],
  meta: {
    title: "Exhibition Stand Transport & On Site Handling | DS European",
    description:
      "Stands, builds and event materials delivered to venue and handled on site. Build up and breakdown slots met, storage between shows, UK and Europe.",
  },
  hero: {
    variant: "service",
    eyebrow: "EXHIBITIONS",
    title: "Exhibition stand transport and on site handling",
    subtitle:
      "Stands, builds and event materials delivered directly to venue, inside the slot you have been given, with our own people on site to handle them at the other end.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    secondaryCta: {
      label: "See our work",
      href: "/recent-jobs",
    },
    image: {
      aspect: "3/2",
      brief:
        "A part built stand on a venue floor during build up, with flight cases still in shot. Slightly messy is good here. It reads as a real build rather than a finished show photo.",
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
        label: "Exhibitions",
      },
    ],
    section: {
      id: "exhibition-transport-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "Everything that has to be standing by the time doors open",
    },
    body: [
      "Exhibition work runs to a timetable set by somebody else. The venue gives you a window, the neighbouring stand is using the same gangway, and none of it moves because a vehicle is late.",
      "We plan around the venue's schedule rather than our own, and we put people on site rather than leaving a driver to unload onto a concourse and hope.",
    ],
    bullets: [
      "Modular and custom built stands",
      "Flight cases, crates and rigging",
      "AV, screens and technical equipment",
      "Graphics, signage and large format printing",
      "Flooring, furniture and stand dressing",
      "Product, samples and promotional stock",
      "Brand activation units and roadshow builds",
      "Full event kit for multi venue tours *(verify)*",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Flight cases stacked and strapped inside a curtain sided vehicle, doors open at a loading bay.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "exhibition-transport-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "ON SITE",
      title: "The delivery is the easy half",
    },
    body: [
      "Ten of our team are supervisors and fitters. At a venue that matters, because the job is rarely finished when the vehicle is empty. Cases have to get to the right stand number, through the right gangway, in the right order for the build crew to work.",
      "We handle the goods in, position them where the build team needs them, and come back for the breakdown when the show closes.",
    ],
    bullets: [
      "Goods in, positioned to the stand rather than the door",
      "Supervisors on site for build up and breakdown",
      "Empty case storage and return during the show *(verify)*",
      "Breakdown collection booked to the venue's schedule",
    ],
    cta: {
      label: "How we work",
      href: "/about",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief: "Two fitters wheeling a flight case across a venue floor during build up.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "exhibition-transport-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Out of store, into the hall, back again",
    },
    steps: [
      {
        number: "01",
        title: "Collection or release from store",
        body: "We collect from your builder or release the stand from our own warehouse, checked against the packing list before it leaves.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Delivery to venue",
        body: "Timed to the build up slot, with our supervisor handling access, gangways and goods in at the venue.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Breakdown and return",
        body: "We collect at breakdown, return the stand to store or to your builder, and it is ready for the next show.",
        icon: Undo2,
      },
    ],
    tone: "light",
    section: {
      id: "exhibition-transport-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "AVAILABILITY",
    title: "Venue slots do not care what time it is",
    items: ["Build up", "Show open", "Breakdown", "Back to store"],
    body: "Build up windows land overnight, breakdowns start the moment the last visitor leaves, and neither waits for office hours. We work 24 hours a day, 365 days a year, which is the only way this end of the industry actually functions.",
    cta: {
      label: "Get a quote",
      href: "/quote",
    },
    section: {
      id: "exhibition-transport-feature",
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
      id: "exhibition-transport-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Event work is typically booked around three weeks ahead, which lines up with when most venues confirm build up slots and vehicle access. Late additions and same day runs to a venue are often possible, and worth asking about rather than assuming.",
      "Every job is priced individually. A single stand to a London venue and a multi vehicle build to a European show are not comparable, so there is no rate card. Send us the venue, the dates and what is being moved.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "exhibition-transport-lead-times",
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
        question: "Can you deliver directly to the venue inside our build up slot?",
        answer:
          "Yes. We plan the delivery around the window the venue has given you and handle goods in at that end, including gangway access and getting the cases to your stand number rather than leaving them at the door.",
      },
      {
        question: "Do you store stands between shows?",
        answer:
          "Yes. We hold stands, cases and event kit in our own warehouse and release them for the next show. That removes the cost of storing a stand you only use a handful of times a year.",
      },
      {
        question: "Will there be anyone on site to help, or just a driver?",
        answer:
          "Our supervisors and fitters attend site. The goods are positioned where your build crew needs them, and we return for the breakdown when the show closes.",
      },
      {
        question: "What happens at breakdown?",
        answer:
          "We collect to the venue's breakdown schedule and return the stand either to your builder or to our warehouse. Because breakdowns usually start the moment a show closes, this is often an overnight job.",
      },
      {
        question: "Can you transport stands to venues in Europe?",
        answer:
          "Yes. We run regularly into Europe and have delivered and installed beyond it. Tell us the venue and the country early, because the paperwork is the part with the lead time.",
      },
      {
        question: "Our slot has moved. Can you change the booking?",
        answer:
          "Tell us as soon as you know. Slot changes are normal in this industry and we plan for them, but the sooner we have the new time the more likely we are to hold the same crew and vehicle.",
      },
    ],
    section: {
      id: "exhibition-transport-faq",
      background: "surface",
      padding: "standard",
    },
  },
  related: {
    services: [
      {
        title: "Retail Displays",
        href: "/services/retail-display-transport",
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
      id: "exhibition-transport-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Got a show in the diary?",
    body: "Send us the venue, the dates and what needs to get there. We will come back with a price and confirm the build up and breakdown timings with you.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "exhibition-transport-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
