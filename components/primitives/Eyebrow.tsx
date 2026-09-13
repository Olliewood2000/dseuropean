import type { Tone } from "@/lib/blocks";
export interface EyebrowProps {
  children: string;
  tone?: Tone;
}
export function Eyebrow({ children, tone = "light" }: EyebrowProps) {
  return (
    <p
      className={`text-label font-bold uppercase ${tone === "dark" ? "text-accent-on-dark" : "text-accent"}`}
    >
      {children}
    </p>
  );
}
