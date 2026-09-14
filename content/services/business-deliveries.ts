import { ClipboardList, Truck, Phone } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-business-deliveries.md.
// Preserve visible verification markers; client sign-off is still required before launch.
export const businessDeliveries = {
  slug: "business-deliveries",
  nav: services[5],
  meta: {
    title: "Scheduled & Same Day Business Deliveries | DS European",
    description:
      "Dedicated transport for businesses that need a dependable partner. Scheduled routes, repeat runs and same day collection across the UK and Europe, available 24/7.",
  },
  hero: {
    variant: "service",
    eyebrow: "BUSINESS DELIVERIES",
    title: "Scheduled and same day business deliveries",
    subtitle:
      "Regular routes, repeat runs and urgent same day collections for businesses that would rather have one transport partner who knows how they work than four who do not.",
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
        "A branded DS European vehicle at a loading bay, driver in company polo. The livery is strong and this is the page where it does the most work. 3/2 crop, masked to the motif shape.",
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
        label: "Business Deliveries",
      },
    ],
    section: {
      id: "business-deliveries-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE CARRY",
      title: "The deliveries your business runs on",
    },
    body: [
      "Not everything a business moves is a project. Most of it is the same run, to the same places, week after week, and it only gets noticed on the day it does not happen.",
      "We carry dedicated rather than consolidated, which means your goods are on a vehicle going where you are sending them rather than routed through a depot and sorted alongside everyone else's.",
    ],
    bullets: [
      "Scheduled weekly and multi drop routes",
      "Repeat runs between sites, depots or branches",
      "Supplier collections into your premises",
      "Customer deliveries on your behalf",
      "Urgent same day collections",
      "Time critical and deadline driven runs",
      "Palletised and loose loads",
      "Inter site transfers across the UK and Europe",
    ],
    media: {
      aspect: "3/2",
      brief: "Loading at a warehouse door, goods going onto the vehicle. Ordinary working shot.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "business-deliveries-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "HOW WE WORK",
      title: "You get a company, not a tracking number",
    },
    body: [
      "Most transport problems are communication problems. Something has not arrived, the driver cannot be reached, and the company you booked it through has a contact centre rather than a person who knows what is on the vehicle.",
      "We are a team of twenty one. When you ring, you speak to someone who can tell you where the job is, and if something has gone wrong you find out from us before you find out from your customer.",
    ],
    bullets: [
      "Dedicated vehicles, not routed through a depot network",
      "One point of contact who knows the account",
      "24 hours a day, 365 days a year",
      "Same day available when a delivery has to happen today",
    ],
    cta: {
      label: "About DS European",
      href: "/about",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Someone in the office on the phone with a delivery schedule visible. Deliberately unglamorous, and the point of the section.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "business-deliveries-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Set it up once, then it just happens",
    },
    steps: [
      {
        number: "01",
        title: "We learn the route",
        body: "Addresses, timings, access, site rules, who signs for what. Once we have it, you are not re-explaining it every week.",
        icon: ClipboardList,
      },
      {
        number: "02",
        title: "The run happens",
        body: "Scheduled to the pattern you need, on the vehicle the load requires, driven by people who have been there before.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Exceptions get handled",
        body: "Volumes change, deadlines move and things go wrong. Ring us and it gets sorted, including same day when it has to be.",
        icon: Phone,
      },
    ],
    tone: "light",
    section: {
      id: "business-deliveries-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "OUR CLIENTS",
    title: "Most of our customers stopped shopping around",
    body: "The majority of the businesses we work with are repeat traders. Several treat us less as a supplier and more as part of how their business runs, to the point that we manage projects on their behalf and deal directly with their own customers. That does not come from winning a tender. It comes from a few years of the deliveries simply turning up.",
    cta: {
      label: "Get a quote",
      href: "/quote",
    },
    section: {
      id: "business-deliveries-feature",
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
      id: "business-deliveries-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "This is the one service where lead time usually is not the question. Same day is available for urgent collections, and a regular route can normally be set up within a couple of weeks of agreeing what it looks like.",
      "Regular work is priced on the route rather than per job, once we understand the pattern, the volumes and the vehicle it needs. Ad hoc and same day work is quoted individually. Tell us what the run looks like and how often it happens.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "business-deliveries-lead-times",
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
        question: "Can we set up a regular weekly route?",
        answer:
          "Yes, and that is a large part of what we do. Once the route, the timings and the site details are agreed, it runs to that pattern without needing to be rebooked each time.",
      },
      {
        question: "Do you offer same day collection and delivery?",
        answer:
          "Yes. Same day is available for day to day movements and is one of the main reasons businesses keep us on the account, because it covers the week where something goes wrong.",
      },
      {
        question: "What size loads do you cover?",
        answer:
          "Anything from a single item in a Luton up to full loads on 18 tonne curtain or box vehicles. If the volume changes between runs we use the vehicle that suits that week rather than the one on the contract.",
      },
      {
        question: "What happens if our volumes change month to month?",
        answer:
          "That is normal and does not need renegotiating every time. Seasonal businesses and project driven volumes are common among our customers and the schedule flexes with them.",
      },
      {
        question: "Will we be dealing with the same people each time?",
        answer:
          "Yes. We are a team of twenty one, so the person who answers the phone knows the account rather than reading it off a screen for the first time.",
      },
      {
        question: "Can you deliver to our customers on our behalf?",
        answer:
          "Yes, and for several of our clients we already do, including dealing directly with their customers at the delivery point. If that is how you want it handled, say so at the start and we will work to your standards rather than ours.",
      },
    ],
    section: {
      id: "business-deliveries-faq",
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
      id: "business-deliveries-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Need a transport partner rather than a courier?",
    body: "Tell us what the run looks like, how often it happens and where it goes. We will price the route rather than the job.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "business-deliveries-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
