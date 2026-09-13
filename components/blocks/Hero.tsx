import { Section } from "@/components/layout/Section";
import { Breadcrumbs, type BreadcrumbsProps } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { MotifShape } from "@/components/primitives/MotifShape";
import { renderMedia, type Media } from "@/lib/media";
import type { SectionOptions } from "@/lib/blocks";
export interface HeroProps {
  variant: "home" | "page" | "service";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: Media;
  breadcrumbs?: BreadcrumbsProps["items"];
  section?: SectionOptions;
  titleAs?: "h1" | "h2";
}
export function Hero({
  variant,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  breadcrumbs,
  section,
  titleAs: Tag = "h1",
}: HeroProps) {
  const withImage = variant !== "page" && image;
  return (
    <Section
      background="inverse"
      padding={variant === "home" ? "generous" : "standard"}
      cut="bottom"
      {...section}
    >
      <MotifShape variant="tint" tone="white" position="top-right" size="xl" opacity={0.08} />
      <MotifShape variant="tint" tone="accent" position="bottom-right" size="lg" />
      <div className="relative space-y-8">
        {variant !== "home" && breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="dark" />}
        <div className={`grid items-center gap-8 lg:gap-6 ${withImage ? "lg:grid-cols-12" : ""}`}>
          <div className={`space-y-6 ${withImage ? "lg:col-span-7" : ""}`}>
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <Tag
              className={`max-w-display font-bold text-balance text-ink-inverse ${variant === "home" ? "text-display-xl" : "text-display-lg"}`}
            >
              {title}
            </Tag>
            {subtitle && (
              <p className="hero-subtitle text-body-lg text-ink-inverse-muted">{subtitle}</p>
            )}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap gap-4 pt-2">
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg" variant="primary-dark">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} size="lg" variant="ghost-dark">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {withImage && (
            <div className={`${variant === "home" ? "hidden md:block" : ""} lg:col-span-5`}>
              {renderMedia(image, {
                masked: true,
                priority: variant === "home",
                sizes: "(max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 42vw, 500px",
              })}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
