import type { ReactNode } from "react";
import { Container } from "./Container";

export type SectionBackground = "surface" | "subtle" | "inverse" | "accent";
export type SectionPadding = "compact" | "standard" | "generous" | "none";
export type SectionCut = "none" | "bottom" | "top" | "both";

export interface SectionProps {
  background?: SectionBackground;
  padding?: SectionPadding;
  cut?: SectionCut;
  container?: "site" | "narrow" | "full";
  id?: string;
  children: ReactNode;
}

export function Section({
  background = "surface",
  padding = "standard",
  cut = "none",
  container = "site",
  id,
  children,
}: SectionProps) {
  // Light surfaces have no cut, even if a caller requests one.
  const resolvedCut = background === "inverse" || background === "accent" ? cut : "none";
  return (
    <section
      id={id}
      className={`section section-${background} section-${padding} cut-${resolvedCut}`}
    >
      <Container variant={container}>{children}</Container>
    </section>
  );
}
