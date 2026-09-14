import { fleet } from "./fleet";
import { coverage } from "./coverage";
import type { HeroProps } from "@/components/blocks/Hero";
import type { SplitFeatureProps } from "@/components/blocks/SplitFeature";
import type { StatBandProps } from "@/components/blocks/StatBand";
import type { FeatureBandProps } from "@/components/blocks/FeatureBand";
import type { FleetStripProps } from "@/components/blocks/FleetStrip";
import type { CoverageListProps } from "@/components/blocks/CoverageList";
import type { QuoteCTAProps } from "@/components/blocks/QuoteCTA";
// Supplied About copy. The lifting-equipment ownership sentence is omitted pending confirmation. Fleet labels follow this page; shared icons and vehicles are reused.
export const aboutMeta = {
  title: "About DS European | Logistics and Installation, Kent",
  description:
    "A twenty one strong logistics and installation team based in Charing, Kent. Ten of us are supervisors and fitters, which is why our work does not stop at the kerb.",
};
export const about = {
  hero: {
    variant: "page",
    eyebrow: "ABOUT",
    title: "About DS European",
    subtitle:
      "A logistics and installation company based in Charing, Kent, working across the UK, Europe and beyond. Twenty one people, our own vehicles, our own warehouse and our own fitters.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    secondaryCta: {
      label: "Talk to us",
      href: "/contact",
    },
    breadcrumbs: [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "About",
      },
    ],
    section: {
      id: "about-hero",
      background: "inverse",
      padding: "standard",
      cut: "bottom",
    },
  } satisfies HeroProps,
  company: {
    heading: {
      eyebrow: "THE COMPANY",
      title: "A logistics company that turns up with tools",
    },
    body: [
      "DS European moves high value and bespoke goods for businesses, and then installs them. Interior design schemes, exhibition builds, retail displays, office relocations and specialist equipment, across the UK, throughout Europe and, when the work calls for it, further than that.",
      "Between us we have around sixty years of combined experience in the industry. Most of what we do is for the same customers repeatedly, which is the part we would point at if you asked us how we are doing.",
    ],
    bullets: [
      "Based at Charing, near Ashford in Kent",
      "Twenty one people across transport, installation and warehousing",
      "Our own fleet, from tail lift Lutons to a 26 tonne Moffett",
      "Our own warehouse for storage, consolidation and fulfilment",
      "Available 24 hours a day, 365 days a year",
    ],
    media: {
      aspect: "3/2",
      brief:
        "The team, or part of it, in branded polos at the yard or warehouse. This is the one place on the site where a group photograph belongs, and it does more for trust here than anywhere else.",
    },
    ratio: "7/5",
    reverse: false,
    section: {
      id: "about-company",
      background: "surface",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  numbers: {
    stats: [
      {
        figure: "21",
        label: "People across transport, installation and warehousing",
      },
      {
        figure: "10",
        label: "Supervisors and fitters",
      },
      {
        figure: "60",
        label: "Years of combined industry experience",
      },
      {
        figure: "24/7",
        label: "Available 365 days a year",
      },
    ],
    background: "subtle",
    section: {
      id: "about-numbers",
      background: "subtle",
      padding: "standard",
    },
  } satisfies StatBandProps,
  team: {
    heading: {
      eyebrow: "THE TEAM",
      title: "Ten of us are fitters",
    },
    body: [
      "Twenty one people. Six drivers, ten supervisors and fitters, three warehouse operatives and two in the office. Those numbers are the whole argument for using us, so they are worth reading properly.",
      "Ten people whose job is what happens after the vehicle is unloaded. They travel with the work, unpack it, position it, assemble it and finish the room. For a good number of our customers they also run the job on site, deal directly with that customer's own client and represent them at the property.",
    ],
    bullets: [
      "6 drivers",
      "10 supervisors and fitters",
      "3 warehouse operatives",
      "2 in the office, who answer the phone when you ring it",
    ],
    media: {
      aspect: "3/2",
      brief:
        "Two fitters mid-installation, concentrating on the work. Not posed, not looking at camera.",
    },
    ratio: "5/7",
    reverse: true,
    section: {
      id: "about-team",
      background: "surface",
      padding: "standard",
    },
  } satisfies SplitFeatureProps,
  approach: {
    eyebrow: "HOW WE WORK",
    title: "Bespoke is not a word we use to justify a price",
    items: ["Safe", "Reliable", "Efficient"],
    body: "There is no rate card here, because there is no standard job. Every quote is built around the item, the route, the access and the date, and the reason we work that way is that it is the only honest way to price work like this. What we want to be known for is straightforward enough: that we turn up, that we do what we said, and that you hear about a problem from us before you hear about it from your customer.",
    section: {
      id: "about-approach",
      background: "inverse",
      padding: "generous",
      cut: "both",
    },
  } satisfies FeatureBandProps,
  fleet: {
    heading: {
      eyebrow: "THE FLEET",
      title: "The right vehicle for the item",
      intro: "The vehicle is chosen for the item and the access at both ends.",
    },
    vehicles: fleet.map((vehicle) =>
      vehicle.name === "26 tonne Moffett"
        ? { ...vehicle, capacity: "Vehicle mounted forklift" }
        : vehicle,
    ),
    section: {
      id: "fleet",
      background: "surface",
      padding: "standard",
    },
  } satisfies FleetStripProps,
  coverage: {
    heading: {
      eyebrow: "COVERAGE",
      title: "UK, Europe and beyond",
    },
    regions: coverage,
    section: {
      id: "about-coverage",
      background: "subtle",
      padding: "standard",
    },
  } satisfies CoverageListProps,
  quote: {
    title: "Tell us what needs moving",
    body: "One item or a full project. Send us the details and we will come back with a price.",
    primaryCta: {
      label: "Get a quote",
      href: "/quote",
    },
    showPhone: true,
    section: {
      id: "about-quote",
      background: "inverse",
      padding: "generous",
      cut: "top",
    },
  } satisfies QuoteCTAProps,
};
