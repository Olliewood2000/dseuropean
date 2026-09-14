import { PackageCheck, Warehouse, Wrench } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Verbatim staged copy. The visible *(verify)* marker is retained for client review.
export const furnitureTransport = {
  slug: "furniture-transport",
  nav: services[0],
  meta: {
    title: "Furniture Transport & Installation, UK and Europe | DS European",
    description:
      "Specialist transport and installation for bespoke, luxury and designer furniture. Collected from your maker, stored if the site is not ready, installed on site by our own fitters.",
  },
  hero: {
    variant: "service",
    eyebrow: "FURNITURE",
    title: "Furniture transport and installation, UK and Europe",
    subtitle:
      "Bespoke, luxury and designer pieces collected from the maker, stored until the property is ready, then delivered and installed on site by our own fitters.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    secondaryCta: {
      label: "See recent installations",
      href: "/recent-jobs",
    },
    image: {
      aspect: "3/2",
      brief:
        "A single high value piece, wrapped in packing blankets and strapped inside a vehicle. Clean, well lit, no clutter. 3/2 crop, masked to the motif shape.",
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
        label: "Furniture Transport",
      },
    ],
    section: {
      id: "furniture-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "Pieces that cannot be left to a pallet network",
    },
    body: [
      "Most furniture in transit is handled several times, by several companies, none of whom made it and none of whom will see it installed. That is fine for a flat pack wardrobe and it is not fine for a commissioned dining table.",
      "We work with interior designers, bespoke furnishers and fit-out contractors on pieces where the value sits in the finish. The job is planned around the item rather than around a route.",
    ],
    bullets: [
      "Dining tables, seating and case goods",
      "Bespoke joinery and fitted cabinetry",
      "Upholstered furniture and soft furnishings",
      "Marble, stone and glass topped pieces",
      "Mirrors, artwork and decorative items",
      "Lighting, including large and suspended fittings",
      "Beds, wardrobes and full bedroom schemes",
      "Complete specified interiors, collected from multiple suppliers",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Close crop of gloved hands easing a packing blanket away from a polished timber edge. Detail beats a wide shot here.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "furniture-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "HANDLING",
      title: "The care is in the parts nobody photographs",
    },
    body: [
      "Blanket wrapping, corner protection and proper strapping inside the vehicle. Tail lifts rather than manhandling. Enough people on the job that nothing gets carried by one person who should not be carrying it.",
      "Our vehicles run from LWB Lutons with tail lifts through to 18 tonne box and curtain, with HIAB and a 26 tonne Moffett when a piece has to be lifted rather than wheeled. The vehicle is chosen for the item and the access, not the other way round.",
    ],
    bullets: [
      "Blanket wrapped, corner protected and strapped in transit",
      "Tail lift equipped vehicles across the fleet",
      "Vehicle matched to the item, the access and the site",
      "Packaging removed and taken away after installation *(verify)*",
    ],
    cta: {
      label: "See the full fleet",
      href: "/about#fleet",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Interior of a loaded vehicle showing blanket wrapped items strapped against the wall. Shot with the doors open, daylight.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "furniture-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Collected, held, installed",
    },
    steps: [
      {
        number: "01",
        title: "Collection",
        body: "We collect from the maker, the supplier, the showroom or your own premises. Where a scheme is arriving from several suppliers, we bring it together in one place.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Storage if needed",
        body: "Properties slip. If the site is not ready on the day the furniture is, it goes into our warehouse and waits there rather than in a hallway.",
        icon: Warehouse,
      },
      {
        number: "03",
        title: "Delivery and installation",
        body: "Our fitters travel with the goods, position and assemble on site, and finish the room.",
        icon: Wrench,
      },
    ],
    tone: "light",
    section: {
      id: "furniture-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: {
    eyebrow: "INTERNATIONAL",
    title: "We travel with the furniture",
    items: ["Lake Como", "Girona", "France", "Texas"],
    body: "When a designer specifies a scheme for a property abroad, the pieces still have to arrive in the right condition and end up in the right place. We collect in the UK, move the consignment, and install it in the finished room.",
    cta: {
      label: "See our work",
      href: "/recent-jobs",
    },
    section: {
      id: "furniture-international",
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
      id: "furniture-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Day to day movements can often be covered same day. Project work and full installations are typically booked around three weeks ahead, which gives us time to plan access, crew and storage properly.",
      "Every job is priced individually. There is no rate card, because a single commissioned piece to a third floor flat in central London and a full scheme to northern Italy are not the same job. Send us the item, the collection point and the destination and we will come back with a price.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "furniture-lead-times",
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
        question: "Do you install the furniture as well as deliver it?",
        answer:
          "Yes. Ten of our team are supervisors and fitters. They travel with the job, position and assemble the pieces on site and finish the room. Installation is not subcontracted.",
      },
      {
        question: "Can you store furniture until the property is ready?",
        answer:
          "Yes. We hold goods in our own warehouse and deliver when the programme suits. Where a scheme is arriving from several makers, we consolidate it before it goes to site.",
      },
      {
        question: "Do you deliver furniture to Europe?",
        answer:
          "Yes, regularly. We have completed installations in Italy, Spain and France, and we have delivered and installed beyond Europe, including in the United States.",
      },
      {
        question: "How much notice do you need?",
        answer:
          "Same day is often possible for straightforward movements. Full projects and installations usually work to around a three week lead time.",
      },
      {
        question: "Will you collect directly from my maker or supplier?",
        answer:
          "Yes. We collect from workshops, showrooms and suppliers, and we can co-ordinate collections from several at once.",
      },
      {
        question: "Are you available outside normal working hours?",
        answer:
          "We operate 24 hours a day, 365 days a year. Early access, out of hours and weekend installations are part of normal work for us.",
      },
    ],
    section: {
      id: "furniture-faq",
      background: "surface",
      padding: "standard",
    },
  },
  related: {
    services: [
      {
        title: "Office Relocations",
        href: "/services/office-relocations",
      },
      {
        title: "Exhibitions",
        href: "/services/exhibition-transport",
      },
      {
        title: "Storage and Fulfilment",
        href: "/storage",
      },
    ],
    section: {
      id: "furniture-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Tell us what needs moving",
    body: "Send us the piece, the collection point and the destination and we will come back with a price. Installation included where you need it.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "furniture-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
