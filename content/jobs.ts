import type { JobGridProps } from "@/components/blocks/JobGrid";
// Supplied draft narratives from docs/pages/home.md, section 10.
// Client sign-off and permission to publish remain launch requirements.
// Card title/service copy is deliberately empty until supplied.
export const jobs = [
  {
    location: "Lake Como, Italy",
    title: "",
    service: "",
    excerpt:
      "An interior design scheme collected in the UK and installed at a property on Lake Como. Our fitters travelled with the goods and completed the installation on site.",
  },
  {
    location: "Girona, Spain",
    title: "",
    service: "",
    excerpt:
      "A specified furniture package moved from the UK to Girona and installed in the finished property by our own team.",
  },
  {
    location: "Texas, USA",
    title: "",
    service: "",
    excerpt:
      "An interior installation delivered beyond Europe, collected in the UK and fitted on site in Texas.",
  },
] satisfies JobGridProps["jobs"];
