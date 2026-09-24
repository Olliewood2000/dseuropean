// Navigation copy supplied verbatim in docs/pages/home.md, section 3.
export const services = [
  {
    slug: "furniture-transport",
    title: "Furniture",
    excerpt:
      "Bespoke, luxury and designer pieces handled with care from collection through to installation.",
  },
  {
    slug: "retail-display-transport",
    title: "Retail Displays",
    excerpt:
      "Pop-up units, store fixtures and brand activation materials delivered securely and on schedule.",
  },
  {
    slug: "exhibition-transport",
    title: "Exhibitions",
    excerpt:
      "Show stands, event builds and promotional setups transported and set up directly at the venue.",
  },
  {
    slug: "office-relocations",
    title: "Office Relocations",
    excerpt:
      "Full office moves, including dismantling, transport, installation and reassembly on site.",
  },
  {
    slug: "equipment-transport",
    title: "Equipment",
    excerpt:
      "Commercial, specialist and technical equipment moved safely with professional handling.",
  },
  {
    slug: "business-deliveries",
    title: "Business Deliveries",
    excerpt: "Scheduled or repeat routes for businesses that need a dependable transport partner.",
  },
  {
    slug: "private-deliveries",
    title: "Private Items",
    excerpt:
      "One-off personal deliveries for items that matter and cannot be entrusted to a standard courier.",
  },
] as const;

const whatWeMoveImageBase = "/images/What We Move Webps";

// Real photography for the home showcase and services hub grid, in services order.
export const serviceShowcaseImages = [
  {
    src: `${whatWeMoveImageBase}/Furniture.webp`,
    alt: "Two fitters carrying a wrapped piece of furniture into a finished interior.",
  },
  {
    src: `${whatWeMoveImageBase}/Retail_Displays.webp`,
    alt: "Pop-up retail display units part assembled in an empty store space.",
  },
  {
    src: `${whatWeMoveImageBase}/Exibitions.webp`,
    alt: "Flight cases and exhibition materials on a venue floor during build up.",
  },
  {
    src: `${whatWeMoveImageBase}/Office_Relocations.webp`,
    alt: "Office desks and chairs being reassembled in a new office.",
  },
  {
    src: `${whatWeMoveImageBase}/Equipment.webp`,
    alt: "Specialist equipment being unloaded from a vehicle with a Moffett forklift.",
  },
  {
    src: `${whatWeMoveImageBase}/Business Deliveries.webp`,
    alt: "Branded delivery vehicle at a loading bay with goods being loaded.",
  },
  {
    src: `${whatWeMoveImageBase}/One_off_Items.webp`,
    alt: "A single blanket wrapped item being carried into a home.",
  },
] as const;

// Image briefs from docs/pages/services-hub.md, section 2, in the same order as services.
export const serviceImageBriefs = [
  "A wrapped piece being carried into a finished interior",
  "A pop-up unit part assembled in an empty retail space",
  "Flight cases on a venue floor during build up",
  "Desks being reassembled in a new office",
  "A Moffett unloading a crated machine",
  "A branded vehicle at a loading bay",
  "A single blanket wrapped item entering a home",
] as const;
