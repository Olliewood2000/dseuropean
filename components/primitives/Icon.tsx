import type { LucideIcon } from "lucide-react";

export interface IconProps {
  icon: LucideIcon;
  size?: 20 | 24 | 32;
  tone?: "accent" | "accent-on-dark" | "muted";
  label?: string;
}

const tones = {
  accent: "text-accent",
  "accent-on-dark": "text-accent-on-dark",
  muted: "text-ink-muted",
};

export function Icon({ icon: Glyph, size = 24, tone = "accent", label }: IconProps) {
  return (
    <Glyph
      size={size}
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={`shrink-0 ${tones[tone]}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
