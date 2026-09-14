import { Ruler, Truck, Forklift } from "lucide-react";
import type { ServicePage } from "./types";
import { services } from "./index";
import { coverage } from "../coverage";
// Supplied staging copy from docs/pages/service-equipment-transport.md.
// Preserve visible verification markers; client sign-off is still required before launch.
// Ownership band is omitted until the HIAB/Moffett ownership decision is confirmed.
export const equipmentTransport = {
  slug: "equipment-transport",
  nav: services[4],
  meta: {
    title: "Specialist & Commercial Equipment Transport | DS European",
    description:
      "Commercial, technical and specialist equipment moved with the right vehicle for the lift. HIAB and Moffett equipped, delivered and positioned on site. UK and Europe.",
  },
  hero: {
    variant: "service",
    eyebrow: "EQUIPMENT",
    title: "Specialist and commercial equipment transport",
    subtitle:
      "Commercial, technical and specialist equipment moved with the right vehicle for the weight and the access. Tail lift, HIAB and Moffett equipped, delivered and positioned rather than dropped.",
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
        "A HIAB or Moffett lifting a crated item off a vehicle at a site. Machinery in action reads as capability far better than a parked lorry. 3/2 crop, masked to the motif shape.",
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
        label: "Equipment",
      },
    ],
    section: {
      id: "equipment-transport-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  },
  whatWeMove: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "Heavy, awkward, and worth more than the vehicle carrying it",
    },
    body: [
      "Equipment rarely arrives somewhere convenient. It goes into basements, up service lifts, through doorways measured by somebody optimistic, and onto sites with no forklift and a half hour parking window.",
      "The weight is usually the least difficult part. We plan the job around how the item gets from the vehicle to its final position, and pick the vehicle to suit that rather than the other way round.",
    ],
    bullets: [
      "Commercial catering and kitchen equipment",
      "Manufacturing and workshop machinery",
      "Medical, dental and laboratory equipment",
      "AV, broadcast and technical installations",
      "Gym and fitness equipment",
      "Print and production machinery",
      "Generators, compressors and plant",
      "Crated and palletised industrial goods",
    ],
    media: {
      aspect: "3/2",
      brief:
        "A crated machine strapped inside a curtain sided vehicle, straps and corner protection visible.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "equipment-transport-items",
      background: "surface",
      padding: "standard",
    },
  },
  handling: {
    heading: {
      eyebrow: "ACCESS",
      title: "The question is never the weight, it is the last twenty metres",
    },
    body: [
      "A 26 tonne Moffett carries its own forklift, which means we can unload where there is no loading bay, no forklift and nobody on site to help. A HIAB lifts over an obstacle rather than around it. Between those and the tail lift fleet, most access problems stop being problems.",
      "Our supervisors check the destination before the day where the job warrants it. Doorway widths, floor loadings, lift dimensions and parking restrictions are cheaper to find out in advance than at eight in the morning with a loaded vehicle outside.",
    ],
    bullets: [
      "26 tonne Moffett with vehicle mounted forklift",
      "HIAB for lifts over and around obstacles",
      "Tail lift equipped vehicles across the fleet",
      "Access checked in advance on larger jobs *(verify)*",
    ],
    cta: {
      label: "See the full fleet",
      href: "/about#fleet",
      variant: "secondary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Moffett forklift being unhitched from the rear of a lorry. Specific, unusual, and instantly communicates capability.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "equipment-transport-handling",
      background: "subtle",
      padding: "standard",
    },
  },
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Measured, moved, positioned",
    },
    steps: [
      {
        number: "01",
        title: "Specification",
        body: "We take the weight, the dimensions and the access at both ends, then confirm which vehicle and lifting equipment the job needs.",
        icon: Ruler,
      },
      {
        number: "02",
        title: "Collection and transport",
        body: "Loaded, secured and moved on the right vehicle for the item, direct rather than through a network.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Delivery and positioning",
        body: "Unloaded using the equipment on the vehicle and moved to its final position on site.",
        icon: Forklift,
      },
    ],
    tone: "light",
    section: {
      id: "equipment-transport-process",
      background: "surface",
      padding: "standard",
    },
  },
  featureBand: null,
  coverage: {
    heading: {
      eyebrow: "COVERAGE",
      title: "UK, Europe and beyond",
    },
    regions: coverage,
    section: {
      id: "equipment-transport-coverage",
      background: "surface",
      padding: "standard",
    },
  },
  leadTimes: {
    title: "Lead times and how we quote",
    body: [
      "Straightforward equipment movements can often be covered same day. Anything needing a Moffett, a HIAB or an access survey is typically booked around three weeks ahead, because the specialist vehicles are in demand and the survey has to happen first.",
      "Every job is priced individually. The variables are weight, dimensions, access at both ends and the lifting equipment required, and no rate card covers that honestly. Send us the item specification and both addresses.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "equipment-transport-lead-times",
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
        question: "Can you lift equipment into position, or only deliver it?",
        answer:
          "We unload and position on site. With a Moffett the forklift travels on the vehicle, so the item can be moved from the lorry to where it needs to stand without a forklift or loading bay at the destination.",
      },
      {
        question: "What if there is no loading bay or forklift at the site?",
        answer:
          "That is a normal job rather than a problem. The Moffett exists for exactly that situation, and the HIAB covers lifts where the item has to go over something rather than through it.",
      },
      {
        question: "Do you move equipment that has to be disconnected first?",
        answer:
          "We handle the transport and the positioning. Disconnection, reconnection and commissioning should be done by your own engineers or the manufacturer, because that work carries certification we do not hold. We will work alongside them on the day.",
      },
      {
        question: "How do you decide which vehicle the job needs?",
        answer:
          "Weight and dimensions tell us the vehicle, access at both ends tells us the lifting equipment. If either is unclear we would rather survey it than guess, because arriving with the wrong vehicle costs everyone a day.",
      },
      {
        question: "What information do you need in order to quote?",
        answer:
          "Weight, dimensions, what it is, both addresses, and anything you know about access. Photographs of the collection and delivery points are more useful than descriptions and take thirty seconds to send.",
      },
      {
        question: "Can you collect direct from a manufacturer or supplier abroad?",
        answer:
          "Yes. We run into Europe regularly and can collect from a factory or supplier and deliver straight to your site rather than routing it through a third party in between.",
      },
    ],
    section: {
      id: "equipment-transport-faq",
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
        title: "Business Deliveries",
        href: "/services/business-deliveries",
      },
      {
        title: "Storage and Fulfilment",
        href: "/storage",
      },
    ],
    section: {
      id: "equipment-transport-related",
      background: "subtle",
      padding: "compact",
    },
  },
  quoteCta: {
    title: "Got something heavy to move?",
    body: "Send us the weight, the dimensions and both addresses. Photographs of the access at each end will get you a firmer price, faster.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "equipment-transport-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  },
} satisfies ServicePage;
