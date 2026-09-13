import {
  Armchair,
  Store,
  Presentation,
  Building2,
  Cog,
  PackageCheck,
  Gem,
  Truck,
  Wrench,
} from "lucide-react";
import type { HeroProps } from "@/components/blocks/Hero";
import type { ServiceGridProps } from "@/components/blocks/ServiceGrid";
import type { SplitFeatureProps } from "@/components/blocks/SplitFeature";
import type { ProcessStepsProps } from "@/components/blocks/ProcessSteps";
import type { TwoColumnTextProps } from "@/components/blocks/TwoColumnText";
import type { FAQProps } from "@/components/blocks/FAQ";
import type { QuoteCTAProps } from "@/components/blocks/QuoteCTA";
import { services } from "./services";
// Supplied copy from docs/pages/services-hub.md. The unresolved private-work FAQ is omitted pending confirmation.
export const servicesHubMeta = {
  title: "Our Services: Transport, Installation & Storage | DS European",
  description:
    "Specialist transport with on site installation and storage behind it. Furniture, exhibitions, retail displays, office relocations, equipment and scheduled deliveries.",
};
const serviceIcons = [Armchair, Store, Presentation, Building2, Cog, PackageCheck, Gem];
const imageBriefs = [
  "A wrapped piece being carried into a finished interior",
  "A pop-up unit part assembled in an empty retail space",
  "Flight cases on a venue floor during build up",
  "Desks being reassembled in a new office",
  "A Moffett unloading a crated machine",
  "A branded vehicle at a loading bay",
  "A single blanket wrapped item entering a home",
];
export const servicesHub = {
  hero: {
    variant: "page",
    eyebrow: "SERVICES",
    title: "Specialist transport, installation and storage",
    subtitle:
      "Seven services, one team, and the same thing underneath all of them. We collect it, we hold it if the site is not ready, we move it, and our own fitters install it at the other end.",
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
        label: "Services",
      },
    ],
    section: {
      id: "services-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  } satisfies HeroProps,
  services: {
    heading: {
      title: "What we do",
      intro: "If your job sits across two of these, that is normal. Most of our work does.",
    },
    services: services.map((service, index) => ({
      ...service,
      href: `/services/${service.slug}`,
      icon: serviceIcons[index],
      image: { aspect: "3/2" as const, brief: imageBriefs[index] },
    })),
    columns: 3,
    showImages: true,
    section: {
      id: "services-grid",
      background: "surface",
      padding: "standard",
    },
  } satisfies ServiceGridProps,
  common: {
    heading: {
      eyebrow: "THE COMMON THREAD",
      title: "Seven services, one capability",
    },
    body: [
      "The list above is organised by what you are moving, because that is how people search for it. Underneath, it is the same capability every time: a crew who can collect, a warehouse that can hold it, a fleet that can lift it, and fitters who can install it.",
      "That matters because jobs rarely stay inside one category. A designer's scheme arrives from four makers, waits three weeks for the property, and is installed alongside an office fit-out. Split across three suppliers that becomes your problem to coordinate. With us it is one job.",
    ],
    bullets: [
      "Collection from makers, suppliers, showrooms or your premises",
      "Storage between collection and the date you actually need it",
      "The right vehicle for the weight and the access",
      "Installation on site by our own fitters, not subcontractors",
      "One point of contact across the whole job",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Warehouse interior with mixed goods racked and labelled. This section is about breadth, so a wide shot works better than a detail crop for once.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "services-common",
      background: "subtle",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "The same three stages, whatever it is",
    },
    steps: [
      {
        number: "01",
        title: "Collect and consolidate",
        body: "From one supplier or several. Where a job arrives from multiple sources we bring it together in one place and check it before anything ships.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Hold or move",
        body: "Straight out, or into the warehouse until the site is ready. Vehicle chosen for the item and the access at both ends.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Deliver and install",
        body: "Positioned, assembled and finished on site by our own supervisors and fitters.",
        icon: Wrench,
      },
    ],
    tone: "light",
    section: {
      id: "services-process",
      background: "surface",
      padding: "standard",
    },
  } satisfies ProcessStepsProps,
  choosing: {
    title: "Not sure which service you need?",
    body: [
      "Most people get this wrong at least once, and it does not matter. The categories exist to make the site navigable, not to decide how we price or plan a job. If your work spans furniture and an office fit-out, or a retail rollout that also needs storing between campaigns, it is still one enquiry and one quote.",
      "If you would rather skip the decision entirely, ring us. Two minutes on the phone will get you further than working out which of seven pages describes your situation most closely.",
    ],
    cta: {
      label: "Get a quote",
      href: "/quote",
      variant: "primary",
    },
    section: {
      id: "services-choosing",
      background: "subtle",
      padding: "compact",
    },
  } satisfies TwoColumnTextProps,
  faqs: {
    heading: {
      title: "Common questions",
    },
    items: [
      {
        question: "Do you subcontract any of the work?",
        answer:
          "The installation is ours. Ten of our twenty one staff are supervisors and fitters, and they travel with the job. Some destinations beyond our own fleet's reach are covered through established partners, and we will tell you when that is the case rather than leave you to find out.",
      },
      {
        question: "Can one job cover several of these services?",
        answer:
          "Yes, and most of the larger ones do. A single project often involves collection from several suppliers, a period in storage, transport and then installation. It is quoted and managed as one job.",
      },
      {
        question: "Do you cover the whole of the UK?",
        answer:
          "Yes, nationwide, with same day available where the schedule allows. We also work across Europe regularly and have delivered and installed beyond it.",
      },
      {
        question: "What is the difference between you and a standard haulier?",
        answer:
          "A haulier moves the goods. We collect them, store them if needed, move them, and install them on site with our own team. For most of our customers the installation is the reason they use us.",
      },
      {
        question: "Do you publish prices?",
        answer:
          "No, because every job is built around the item, the route, the access and the date. Send us the details and you will get a price rather than a starting from figure that turns out not to apply.",
      },
    ],
    section: {
      id: "services-faq",
      background: "surface",
      padding: "standard",
    },
  } satisfies FAQProps,
  quote: {
    title: "Tell us what needs moving",
    body: "One item or a full project, one supplier or six. Send us the details and we will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "services-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  } satisfies QuoteCTAProps,
};
