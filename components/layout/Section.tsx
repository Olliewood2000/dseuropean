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
  className?: string;
  children: ReactNode;
}

export function Section({
  background = "surface",
  padding = "standard",
  cut = "none",
  container = "site",
  id,
  className,
  children,
}: SectionProps) {
  // Light surfaces have no cut, even if a caller requests one.
  const resolvedCut = background === "inverse" || background === "accent" ? cut : "none";
  return (
    <section
      id={id}
      className={`section section-${background} section-${padding} cut-${resolvedCut} ${className ?? ""}`}
    >
      <Container variant={container}>{children}</Container>
    </section>
  );
}
