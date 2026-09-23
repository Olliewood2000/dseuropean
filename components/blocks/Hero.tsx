import Image from "next/image";
import type { CSSProperties } from "react";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs, type BreadcrumbsProps } from "@/components/layout/Breadcrumbs";
import { Button } from "@/components/primitives/Button";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { MotifShape } from "@/components/primitives/MotifShape";
import { renderMedia, type Media } from "@/lib/media";
import type { SectionOptions } from "@/lib/blocks";
import type { ImageFrameProps } from "@/components/primitives/ImageFrame";
export interface HeroProps {
  variant: "home" | "page" | "service";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: Media;
  /** Home only. The CSS crossfade timing in globals.css assumes exactly six slides. */
  backgroundImages?: Pick<ImageFrameProps, "src" | "alt">[];
  /**
   * Home only. Must be real, client-approved testimonials; see 00-source-of-truth.md section 9.
   * More than one rotates with the photographs; the CSS timing assumes exactly three.
   */
  testimonials?: { quote: string; attribution: string }[];
  breadcrumbs?: BreadcrumbsProps["items"];
  section?: SectionOptions;
  titleAs?: "h1" | "h2";
}
const slideDelay = (index: number) => ({ "--slide-delay": `${index * 6 - 36}s` }) as CSSProperties;
const quoteDelay = (index: number) => ({ "--slide-delay": `${index * 6 - 18}s` }) as CSSProperties;
const enterDelay = (step: number) => ({ "--enter-delay": `${step * 120}ms` }) as CSSProperties;
export function Hero({
  variant,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image,
  backgroundImages,
  testimonials,
  breadcrumbs,
  section,
  titleAs: Tag = "h1",
}: HeroProps) {
  const withBackdrop = variant === "home" && backgroundImages && backgroundImages.length > 0;
  const withImage = !withBackdrop && variant !== "page" && image;
  const titleLines = withBackdrop ? title.split(/(?<=,)\s+/) : [title];
  const enter = withBackdrop ? "hero-enter" : "";
  return (
    <Section
      background="inverse"
      padding={variant === "home" ? "generous" : "standard"}
      cut="bottom"
      className={withBackdrop ? "hero-home" : undefined}
      {...section}
    >
      {!withBackdrop && (
        <>
          <MotifShape variant="tint" tone="white" position="top-right" size="xl" opacity={0.08} />
          <MotifShape variant="tint" tone="accent" position="bottom-right" size="lg" />
        </>
      )}
      <div className="relative z-10 space-y-8">
        {variant !== "home" && breadcrumbs && <Breadcrumbs items={breadcrumbs} tone="dark" />}
        <div
          className={`grid items-center gap-8 lg:gap-6 ${withImage || withBackdrop ? "lg:grid-cols-12" : ""}`}
        >
          <div className={`space-y-6 ${withImage || withBackdrop ? "lg:col-span-7" : ""}`}>
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <Tag
              className={`max-w-display font-bold text-balance text-ink-inverse ${variant === "home" ? "text-display-xl" : "text-display-lg"}`}
            >
              {withBackdrop
                ? titleLines.map((line, index) => (
                    <span key={line}>
                      {index > 0 && " "}
                      <span
                        className={`hero-enter block ${index > 0 && index === titleLines.length - 1 ? "text-accent-on-dark" : ""}`}
                        style={enterDelay(index)}
                      >
                        {line}
                      </span>
                    </span>
                  ))
                : title}
            </Tag>
            {subtitle && (
              <p
                className={`hero-subtitle text-body-lg text-ink-inverse-muted ${enter}`}
                style={withBackdrop ? enterDelay(titleLines.length) : undefined}
              >
                {subtitle}
              </p>
            )}
            {(primaryCta || secondaryCta) && (
              <div
                className={`flex flex-wrap gap-4 pt-2 ${enter}`}
                style={withBackdrop ? enterDelay(titleLines.length + 1) : undefined}
              >
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
            {withBackdrop && testimonials && testimonials.length > 0 && (
              <div
                className={`hero-testimonial hero-enter ${testimonials.length > 1 ? "hero-testimonial-rotate" : ""}`}
                style={enterDelay(titleLines.length + 2)}
              >
                {testimonials.length > 1 && (
                  <div className="hero-quote-progress" aria-hidden="true">
                    {testimonials.map((testimonial, index) => (
                      <span key={testimonial.quote} style={quoteDelay(index)} />
                    ))}
                  </div>
                )}
                {testimonials.map((testimonial, index) => (
                  <figure key={testimonial.quote} className="hero-quote" style={quoteDelay(index)}>
                    <blockquote className="text-body text-ink">
                      <p>&ldquo;{testimonial.quote}&rdquo;</p>
                    </blockquote>
                    <figcaption className="text-body-sm font-bold text-ink-muted">
                      {testimonial.attribution}
                    </figcaption>
                  </figure>
                ))}
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
      {withBackdrop && (
        <>
          <div className="hero-backdrop">
            {backgroundImages.map((slide, index) => (
              <div
                key={typeof slide.src === "string" ? slide.src : slide.src.src}
                className="hero-slide"
                style={slideDelay(index)}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1023px) calc(100vw - 64px), 65vw"
                />
              </div>
            ))}
            <div className="hero-progress" aria-hidden="true">
              {backgroundImages.map((slide, index) => (
                <span
                  key={typeof slide.src === "string" ? slide.src : slide.src.src}
                  style={slideDelay(index)}
                />
              ))}
            </div>
          </div>
          <div className="hero-globe" aria-hidden="true">
            <Image src="/images/hero-globe.svg" alt="" fill sizes="100vh" />
          </div>
        </>
      )}
    </Section>
  );
}
