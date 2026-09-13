import { Eyebrow } from "./Eyebrow";
import { ArrowLink } from "./ArrowLink";
import type { Tone } from "@/lib/blocks";
export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  tone?: Tone;
  action?: { label: string; href: string };
}
export function SectionHeading({
  eyebrow,
  title,
  intro,
  as: Tag = "h2",
  align = "left",
  tone = "light",
  action,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${align === "center" ? "heading-centered" : ""}`}>
      <div className="space-y-4">
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        <Tag
          className={`text-h2 text-balance ${tone === "dark" ? "text-ink-inverse" : "text-ink"}`}
        >
          {title}
        </Tag>
        {intro && (
          <p
            className={`max-w-measure text-body-lg ${tone === "dark" ? "text-ink-inverse-muted" : "text-ink-body"}`}
          >
            {intro}
          </p>
        )}
      </div>
      {action && (
        <div className="heading-action">
          <ArrowLink href={action.href} tone={tone}>
            {action.label}
          </ArrowLink>
        </div>
      )}
    </div>
  );
}
