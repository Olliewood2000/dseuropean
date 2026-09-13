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
  Van,
  Container,
  Forklift,
} from "lucide-react";
import { services } from "./services";
import type { ProcessStepsProps } from "@/components/blocks/ProcessSteps";
const serviceIcons = [Armchair, Store, Presentation, Building2, Cog, PackageCheck, Gem];
export const reviewServices = services.map((service, index) => ({
  ...service,
  href: `/services/${service.slug}`,
  icon: serviceIcons[index],
  image: { brief: `Photography needed: ${service.title.toLowerCase()}`, aspect: "3/2" as const },
}));
export const reviewBody = [
  "This is sample content for checking the layout. It is deliberately long enough to show line length, paragraph spacing and how the text wraps on smaller screens.",
  "The final wording will come from the supplied page documents. Review the alignment and spacing here, including the gap between the title and the body copy.",
];
export const reviewBullets = [
  "A short item for comparison",
  "A longer item that wraps naturally when the available space becomes narrow",
  "A final item to check the spacing",
];
export const reviewMedia = {
  brief:
    "Two fitters in DS European branded polos positioning a large piece of furniture inside a finished interior. Shot from behind or side on, faces not required. Portrait or 3/2 crop, masked to the motif shape.",
  aspect: "3/2" as const,
};
export const reviewTrust = [
  { figure: "60 years", label: "Combined industry experience" },
  { figure: "24/7", label: "Available 365 days a year" },
  { figure: "10", label: "Fitters and supervisors on our own team" },
  { figure: "21", label: "People across transport, installation and warehousing" },
];
export const reviewSteps: ProcessStepsProps["steps"] = [
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
];
export const reviewAudiences = [
  "Audience one",
  "Audience two",
  "Audience three",
  "Audience four",
].map((title) => ({
  title,
  body: "Sample supporting text for checking the four-card layout without icons or photography.",
}));
export const reviewVehicles = [
  { name: "Long wheelbase vans", icon: Van },
  { name: "Luton vans", icon: Truck, note: "Tail lift" },
  { name: "7.5 tonne", icon: Truck },
  { name: "18 tonne HIAB", icon: Container },
  { name: "26 tonne Moffett", icon: Forklift },
];
export const reviewJobs = ["Location one", "Location two", "Location three"].map(
  (location, index) => ({
    title: `Sample job ${index + 1}`,
    location,
    service: "Layout sample",
    excerpt:
      "This is placeholder project content, not a claim about a completed job. It shows how a longer narrative reads while client photography is still being collected.",
    image: reviewMedia,
  }),
);
export const reviewRegions = [
  { name: "United Kingdom", detail: "Sample coverage detail for layout review." },
  {
    name: "Europe",
    detail: "A longer sample description to check wrapping and divider alignment.",
  },
  { name: "Worldwide", detail: "Sample coverage detail." },
  { name: "Location without detail" },
];
export const reviewFaqs = [
  {
    question: "How does this FAQ open?",
    answer:
      "Select the question or focus it with the keyboard and press Enter. This is sample text for the component review.",
  },
  {
    question: "Can more than one question stay open?",
    answer:
      "Yes. These native disclosures work independently, so readers can compare answers without closing the previous one.",
  },
  {
    question: "Will the final website use these answers?",
    answer:
      "No. The final questions and answers will come from the supplied page documents. This wording is only a layout sample.",
  },
  {
    question: "What should we check on a small screen?",
    answer:
      "Check that the question wraps comfortably, the arrow stays aligned and the full answer is readable without sideways scrolling.",
  },
];
