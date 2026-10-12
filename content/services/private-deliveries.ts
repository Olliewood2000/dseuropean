import { MessageSquare, PackageCheck, Home } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-private-deliveries.md.
// Preserve visible verification markers; client sign-off is still required before launch.
export const privateDeliveries = {
  slug: "private-deliveries",
  nav: services[6],
  meta: {
    title: "Private & High Value Item Delivery | DS European",
    description:
      "One-off deliveries for items that matter. Antiques, art, furniture and inherited pieces collected, transported and placed in the room, not left at the door.",
  },
  hero: {
    variant: "service",
    eyebrow: "PRIVATE ITEMS",
    title: "Private and high value item delivery",
    subtitle:
      "One-off deliveries for the things that cannot go in the back of a courier van. Collected carefully, moved properly, and carried into the room rather than left in a hallway.",
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
        "A single blanket wrapped item being carried into a domestic interior by two people. Domestic setting is important on this page. Every other service image is commercial. 3/2 crop, masked to the motif shape.",
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
        label: "Private Items",
      },
    ],
    section: {
      id: "private-deliveries-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "One item, treated as a job in its own right",
    },
    body: [
      "Most transport is priced and handled by volume. That works until the thing being moved is irreplaceable, at which point being one of four hundred consignments on a vehicle stops feeling reassuring.",
      "We spend most of our week moving furniture and interiors for designers and makers. A private delivery is the same work at a smaller scale, handled by the same people, with the same wrapping and the same care.",
    ],
    bullets: [
      "Antiques and inherited furniture",
      "Art, mirrors and framed pieces",
      "Commissioned and designer furniture",
      "Auction and dealer purchases",
      "Pianos and large instruments *(verify)*",
      "Single pieces to or from a second property",
      "Items too valuable or awkward for a courier",
      "Deliveries to and from properties in Europe",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Close crop of an item being blanket wrapped before collection. Hands and material, no faces needed.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "private-deliveries-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "HOW WE WORK",
      title: "A delivery that ends on the doorstep is only half a delivery",
    },
    body: [
      "Ten of our team are fitters and supervisors. On a private job that means the item comes into the house, goes to the room you want it in, and is unwrapped and positioned before anyone leaves.",
      "If it needs assembling, it gets assembled. If the packaging needs taking away, it goes with us. You should not be left with a crate in the hallway and a set of instructions.",
    ],
    bullets: [
      "Carried in and placed in the room you want it",
      "Unwrapped, assembled and positioned on site",
      "Packaging taken away with us *(verify)*",
      "Two person handling as standard *(verify)*",
    ],
    cta: {
      label: "About DS European",
      href: "/about",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Item in its final position in a room, packing blankets folded on the floor beside it. The end of the job, not the middle.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "private-deliveries-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Straightforward, and mostly handled by us",
    },
    steps: [
      {
        number: "01",
        title: "Tell us what it is",
        body: "What the item is, where it is now, where it is going. Photographs help more than measurements, though both are useful.",
        icon: MessageSquare,
      },
      {
        number: "02",
        title: "We collect",
        body: "From a dealer, an auction house, a maker, a family home or a storage unit. Wrapped and secured before it moves.",
        icon: PackageCheck,
      },
      {
        number: "03",
        title: "We deliver and place it",
        body: "Into the property, into the room, unwrapped and positioned, packaging away with us.",
        icon: Home,
      },
    ],
    tone: "light",
    section: {
      id: "private-deliveries-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "WHY US",
    title: "We move furniture for the people who make it",
    items: ["Collected", "Wrapped", "Delivered", "Placed"],
    body: "Our regular customers are interior designers, bespoke furnishers and fit-out companies. The pieces we handle for them are commissioned, one-off and expensive to get wrong. A private delivery gets the same crew, the same vehicles and the same handling, because we do not have a lesser version to offer.",
    cta: {
      label: "Get a quote",
      href: "/quote",
    },
    section: {
      id: "private-deliveries-feature",
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
      id: "private-deliveries-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Single item deliveries in the UK can often be covered quickly, sometimes same day. Anything going to or from a property in Europe needs more notice, typically around three weeks, because the route and the paperwork have to be planned rather than improvised.",
      "There is no price list. A chair going across Kent and a dining table going to the south of France are not comparable jobs, and a published rate would be wrong for one of them. Tell us what the item is and where it needs to go and we will give you a price.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "private-deliveries-lead-times",
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
        question: "I only have one item. Is that too small a job?",
        answer:
          "No. Single items are exactly what this service is for. The care involved does not change because there is only one of something.",
      },
      {
        question: "Will you bring it inside, or leave it at the door?",
        answer:
          "Inside, and into the room you want it in. Our fitters unwrap and position the item before they leave, and assemble it if it needs assembling.",
      },
      {
        question: "Can you collect from an auction house or a dealer?",
        answer:
          "Yes. Auction houses, dealers, galleries, makers and private addresses are all normal collection points. Tell us the collection deadline, because auction storage charges tend to start quickly.",
      },
      {
        question: "Can you deliver to a property abroad?",
        answer:
          "Yes. We work across Europe regularly and have delivered further afield. Allow more notice for anything leaving the UK, and tell us early so the route and paperwork can be arranged properly.",
      },
      {
        question: "Do I need to be there for the collection or the delivery?",
        answer:
          "Someone needs to be present at both ends to give access and confirm where the item is going. It does not have to be you, as long as we know who to expect and they can make that decision.",
      },
      {
        question: "How do I get a price?",
        answer:
          "Send us a photograph of the item, a rough size, and the two addresses. That is usually enough for a price without a site visit.",
      },
    ],
    section: {
      id: "private-deliveries-faq",
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
        title: "Storage and Fulfilment",
        href: "/storage",
      },
      {
        title: "Office Relocations",
        href: "/services/office-relocations",
      },
    ],
    section: {
      id: "private-deliveries-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Got something that matters to move?",
    body: "Send us a photograph, a rough size and the two addresses. We will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "private-deliveries-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
