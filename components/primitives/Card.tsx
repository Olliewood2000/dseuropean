import Link from "next/link";
import type { ReactNode } from "react";
import type { Tone } from "@/lib/blocks";
export interface CardProps {
  href?: string;
  tone?: Tone;
  motifCorner?: boolean;
  children: ReactNode;
}
export function Card({ href, tone = "light", motifCorner = true, children }: CardProps) {
  const className = `card card-${tone} ${motifCorner ? "card-motif" : "rounded-lg"} ${href ? "card-linked" : ""}`;
  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
