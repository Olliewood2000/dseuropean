import type { SectionProps, SectionPadding } from "@/components/layout/Section";
export type Tone = "light" | "dark";
export type SectionOptions = Omit<SectionProps, "children">;
export interface BlockProps {
  tone?: Tone;
  section?: SectionOptions;
}
export function sectionOptions(
  section: SectionOptions | undefined,
  tone: Tone = "light",
  padding: SectionPadding = "standard",
): SectionOptions {
  return { background: tone === "dark" ? "inverse" : "surface", padding, ...section };
}
export function blockTone(section?: SectionOptions, tone: Tone = "light"): Tone {
  return section?.background
    ? ["inverse", "accent"].includes(section.background)
      ? "dark"
      : "light"
    : tone;
}
