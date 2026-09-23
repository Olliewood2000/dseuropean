import {
  Armchair,
  Store,
  Presentation,
  Building2,
  Cog,
  PackageCheck,
  Gem,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";
import type { HeroProps } from "@/components/blocks/Hero";
import { isReviewBuild } from "@/lib/review";
import type { TrustStripProps } from "@/components/blocks/TrustStrip";
import type { ServiceGridProps } from "@/components/blocks/ServiceGrid";
import type { SplitFeatureProps } from "@/components/blocks/SplitFeature";
import type { ProcessStepsProps } from "@/components/blocks/ProcessSteps";
import type { FeatureBandProps } from "@/components/blocks/FeatureBand";
import type { AudienceGridProps } from "@/components/blocks/AudienceGrid";
import type { FleetStripProps } from "@/components/blocks/FleetStrip";
import type { QuoteCTAProps } from "@/components/blocks/QuoteCTA";
import { services, serviceShowcaseImages } from "./services";
import { fleet } from "./fleet";
// Verbatim copy and assembly from docs/pages/home.md.
// Private Items and draft claims remain subject to client sign-off before launch.
export const homeMeta = {
  title: "Specialist Transport & Installation, UK and Europe | DS European",
  description:
    "We move and install high value goods for interior designers, fit-out firms and event organisers. Bespoke furniture, exhibition builds, retail displays and office relocations. Available 24/7.",
  ogTitle: "Delivered, installed, and finished",
  ogDescription:
    "Specialist transport and on site installation across the UK, Europe and worldwide.",
};
const serviceIcons = [Armchair, Store, Presentation, Building2, Cog, PackageCheck, Gem];
export const home = {
  hero: {
    variant: "home",
    title: "Delivered, installed, and finished.",
    subtitle:
      "Specialist transport and on site installation across the UK, Europe and worldwide. Bespoke furniture, retail displays, exhibition builds and office relocations, handled by one team from collection to final placement.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    secondaryCta: {
      label: "See our work",
      href: "/recent-jobs",
    },
    // Dummy wording for layout review only. Hidden in production; replace with client-approved testimonials.
    testimonials: isReviewBuild
      ? [
          {
            quote:
              "They collected from three makers, held everything until the site was ready and installed it in one visit. Nothing was left for us to chase.",
            attribution: "PLACEHOLDER_CLIENT, Interior designer",
          },
          {
            quote:
              "The stand arrived on time, went up to the plan and came down again after the show. The team on the floor knew exactly what they were doing.",
            attribution: "PLACEHOLDER_CLIENT, Exhibition contractor",
          },
          {
            quote:
              "We moved a whole floor over one weekend. Desks, meeting rooms and storage were back in place and working on Monday morning.",
            attribution: "PLACEHOLDER_CLIENT, Office manager",
          },
        ]
      : undefined,
    backgroundImages: [
      {
        src: "/images/Ds_Hero_webps/Fleet_Vehicles_Hero_Image.webp",
        alt: "Vans and box lorries parked in front of a warehouse.",
      },
      {
        src: "/images/Ds_Hero_webps/Crane_Lifting_Hero_Image.webp",
        alt: "Lorry mounted crane lifting a refrigerated container onto a trailer in an industrial yard.",
      },
      {
        src: "/images/Ds_Hero_webps/Office_Desk_Hero_Image.webp",
        alt: "Office desks and meeting chairs arranged in a U shape in a bright meeting room.",
      },
      {
        src: "/images/Ds_Hero_webps/Exhibition_Set_Up_Hero.webp",
        alt: "Two forklifts in an exhibition hall while stands are being set up.",
      },
      {
        src: "/images/Ds_Hero_webps/Glass_pod_Hero_Image.webp",
        alt: "Four people assembling a glass office pod inside a warehouse.",
      },
      {
        src: "/images/Ds_Hero_webps/Blue_HGV_Hero_Image.webp",
        alt: "Curtain sided lorry with its side curtain drawn back, showing the empty load bed.",
      },
    ],
    section: {
      id: "home-hero",
      background: "inverse",
      padding: "generous",
      cut: "bottom",
    },
  } satisfies HeroProps,
  trust: {
    items: [
      {
        figure: "60 years",
        label: "Combined industry experience",
      },
      {
        figure: "24/7",
        label: "Available 365 days a year",
      },
      {
        figure: "10",
        label: "Fitters and supervisors on our own team",
      },
      {
        figure: "21",
        label: "People across transport, installation and warehousing",
      },
    ],
    tone: "light",
    section: {
      id: "home-trust",
      background: "surface",
      padding: "compact",
    },
  } satisfies TrustStripProps,
  services: {
    heading: {
      eyebrow: "WHAT WE MOVE",
      title: "Specialist transport, by what you need moving",
      intro:
        "Every job is different, so every quote is built around the item, the route and the deadline. These are the areas we work in most.",
    },
    services: services.map((service, index) => ({
      ...service,
      href: `/services/${service.slug}`,
      icon: serviceIcons[index],
      image: { aspect: "1/1" as const, ...serviceShowcaseImages[index] },
    })),
    variant: "showcase",
    showImages: true,
    section: {
      id: "home-services",
      background: "subtle",
      padding: "standard",
    },
  } satisfies ServiceGridProps,
  installation: {
    heading: {
      eyebrow: "WHERE WE DIFFER",
      title: "Most of our work does not end at the kerb",
    },
    body: [
      "Ten of our team are supervisors and fitters. They travel with the job, unpack it, position it, assemble it and take the packaging away with them. Nothing is handed to a third party at the far end.",
      "For a lot of our clients that goes further still. We manage the installation on site, liaise directly with their customer and represent them at the property. Most of the companies we work with came to us once and stayed.",
    ],
    bullets: [
      "Fitters and supervisors employed directly, not subcontracted",
      "On site assembly, positioning and packaging removal",
      "Project supervision and direct liaison with your client",
      "One point of contact from collection to sign off",
    ],
    cta: {
      label: "About DS European",
      href: "/about",
      variant: "primary-dark",
    },
    media: [
      {
        src: "/images/Ds_Hero_webps/Crane_Lifting_Hero_Image.webp",
        alt: "Lorry mounted crane lifting a refrigerated container onto a trailer in an industrial yard.",
        aspect: "3/4",
      },
      {
        src: "/images/Ds_Hero_webps/Glass_pod_Hero_Image.webp",
        alt: "Four people assembling a glass office pod inside a warehouse.",
        aspect: "4/3",
      },
      {
        src: "/images/Ds_Hero_webps/Office_Desk_Hero_Image.webp",
        alt: "Office desks and meeting chairs arranged in a U shape in a bright meeting room.",
        aspect: "4/3",
      },
    ],
    ratio: "7/5",
    reverse: false,
    section: {
      id: "home-installation",
      background: "surface",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  process: {
    heading: {
      eyebrow: "HOW IT WORKS",
      title: "Three stages, one team",
    },
    steps: [
      {
        number: "01",
        title: "Collect and store",
        body: "We collect from the maker, the supplier or your premises. If the site is not ready, the goods go into our warehouse until it is.",
        icon: PackageCheck,
      },
      {
        number: "02",
        title: "Transport",
        body: "The right vehicle for the item, from a tail lift Luton to a 26 tonne Moffett. UK, Europe or worldwide.",
        icon: Truck,
      },
      {
        number: "03",
        title: "Install and set up",
        body: "Our fitters position, assemble and finish on site, then clear the packaging.",
        icon: Wrench,
      },
    ],
    tone: "light",
    section: {
      id: "home-process",
      background: "surface",
      padding: "standard",
      className: "section-continues section-globe",
    },
  } satisfies ProcessStepsProps,
  international: {
    eyebrow: "RECENT INSTALLATIONS",
    title: "Interior design installations, delivered and fitted on site",
    items: ["Lake Como", "Girona", "France", "Texas"],
    body: "Our fitters travel with the goods. When an interior designer specifies a scheme for a property abroad, we collect the pieces, move them, and install them in the finished room.",
    cta: {
      label: "See our work",
      href: "/recent-jobs",
    },
    section: {
      id: "home-international",
      background: "inverse",
      padding: "generous",
      cut: "both",
    },
  } satisfies FeatureBandProps,
  audiences: {
    heading: {
      eyebrow: "OUR CLIENTS",
      title: "Built around the way these businesses work",
      intro:
        "The majority of our customers are repeat traders who use us across multiple projects a year.",
    },
    audiences: [
      {
        title: "Interior designers",
        body: "Bespoke and specified pieces collected from makers, stored until the property is ready, then installed on site.",
      },
      {
        title: "Event organisers",
        body: "Stands, builds and activation materials delivered to venue, set up to schedule and collected afterwards.",
      },
      {
        title: "Fit-out contractors",
        body: "Programme led deliveries into live sites, with fitters who understand access, timings and site rules.",
      },
      {
        title: "Bespoke furnishers",
        body: "One-off and high value pieces handled by people who treat them the way you made them.",
      },
    ],
    section: {
      id: "home-audiences",
      background: "surface",
      padding: "standard",
    },
  } satisfies AudienceGridProps,
  storage: {
    heading: {
      eyebrow: "STORAGE AND FULFILMENT",
      title: "Somewhere to put it until the site is ready",
    },
    icon: Warehouse,
    body: [
      "Projects slip. Sites are not always ready on the day the furniture is. Our warehouse means a job can be collected, consolidated, held and then delivered when it suits the programme, without passing through anyone else's hands.",
      "It is also what lets us take a scheme arriving from several suppliers, bring it together in one place, and deliver it to site as a single co-ordinated installation.",
    ],
    cta: {
      label: "Storage and fulfilment",
      href: "/storage",
      variant: "primary",
    },
    media: {
      aspect: "3/2",
      brief:
        "Wrapped and labelled goods on racking inside the warehouse. Clean, well lit, no clutter in frame.",
    },
    backdrop: {
      src: "/images/Ds_Hero_webps/DS_Storage.webp",
      alt: "Wrapped goods on racking inside the warehouse.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "home-storage",
      background: "subtle",
      padding: "compact",
    },
  } satisfies SplitFeatureProps,
  fleet: {
    heading: {
      eyebrow: "OUR VEHICLES",
      title: "The right vehicle for the item",
      intro:
        "From single items to full loads, our modern fleet and specialist vehicles ensure your goods are moved safely and efficiently.",
    },
    titleAccent: "for the item",
    vehicles: fleet,
    media: {
      src: "/images/Ds_Hero_webps/Fleet_Vehicles_Hero_Image.webp",
      alt: "Vans and box lorries parked in front of a warehouse.",
    },
    section: {
      id: "home-fleet",
      background: "surface",
      padding: "compact",
    },
  } satisfies FleetStripProps,
  quote: {
    title: "Tell us what needs moving",
    body: "Send us the item, the collection point and the destination and we will come back with a price. Same day work considered, projects typically booked around three weeks ahead.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "home-quote",
      background: "inverse",
      padding: "generous",
      cut: "none",
    },
  } satisfies QuoteCTAProps,
};
