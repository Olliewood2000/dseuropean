import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import type { ReactNode } from "react";
import type { Tone } from "@/lib/blocks";
export interface ArrowLinkProps {
  href: string;
  children: ReactNode;
  tone?: Tone;
}
export function ArrowLink({ href, children, tone = "light" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={`arrow-link ${tone === "dark" ? "text-accent-on-dark" : "text-accent"}`}
    >
      {children}
      <Icon icon={ArrowRight} size={20} tone={tone === "dark" ? "accent-on-dark" : "accent"} />
    </Link>
  );
}
