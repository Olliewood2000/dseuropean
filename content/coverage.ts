import type { CoverageListProps } from "@/components/blocks/CoverageList";
// Shared coverage supplied in the furniture page, section 6. Client sign-off remains pending.
export const coverage = [
  {
    name: "United Kingdom",
    detail: "Nationwide, including same day where the schedule allows",
  },
  {
    name: "France",
    detail: "Regular scheduled and project work",
  },
  {
    name: "Italy",
    detail: "Including completed installations on Lake Como",
  },
  {
    name: "Spain",
    detail: "Including completed installations in Girona",
  },
  {
    name: "Rest of Europe",
    detail: "Covered through our own fleet and established partners",
  },
  {
    name: "Worldwide",
    detail: "Delivered and installed, including projects in the United States",
  },
] satisfies CoverageListProps["regions"];
