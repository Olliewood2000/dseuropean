import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/primitives/Icon";
import { SectionHeading, type SectionHeadingProps } from "@/components/primitives/SectionHeading";
import { Button, type ButtonProps } from "@/components/primitives/Button";
import type { ImageFrameProps } from "@/components/primitives/ImageFrame";
import { renderMedia, type Media } from "@/lib/media";
import { blockTone, sectionOptions, type BlockProps } from "@/lib/blocks";
export interface SplitFeatureProps extends BlockProps {
  heading: SectionHeadingProps;
  body: string | readonly string[];
  bullets?: readonly string[];
  cta?: { label: string; href: string; variant?: ButtonProps["variant"] };
  /** A tuple renders the gallery: lead image first, then the two supporting images. */
  media: Media | readonly [Media, Media, Media];
  reverse?: boolean;
  ratio?: "7/5" | "5/7";
  /** Replaces `media` as a full-section background, with the copy in a white panel on the right. */
  backdrop?: Pick<ImageFrameProps, "src" | "alt">;
  /** Decorative, set before the heading. */
  icon?: LucideIcon;
}
function isGallery(media: SplitFeatureProps["media"]): media is readonly [Media, Media, Media] {
  return Array.isArray(media);
}
export function SplitFeature({
  heading,
  body,
  bullets,
  cta,
  media,
  reverse = false,
  ratio = "7/5",
  backdrop,
  icon,
  tone,
  section,
}: SplitFeatureProps) {
  const resolvedTone = backdrop ? "light" : blockTone(section, tone);
  const paragraphs = typeof body === "string" ? [body] : body;
  const wide = ratio === "7/5";
  const copy = (
    <>
      {icon ? (
        <div className="flex items-center gap-6">
          <Icon
            icon={icon}
            size={56}
            tone={resolvedTone === "dark" ? "accent-on-dark" : "accent"}
          />
          <SectionHeading {...heading} tone={resolvedTone} />
        </div>
      ) : (
        <SectionHeading {...heading} tone={resolvedTone} />
      )}
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="max-w-measure">
          {paragraph}
        </p>
      ))}
      {bullets && (
        <ul className="square-list space-y-3">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {cta && (
        <Button
          href={cta.href}
          variant={cta.variant ?? (resolvedTone === "dark" ? "ghost-dark" : "secondary")}
        >
          {cta.label}
        </Button>
      )}
    </>
  );
  if (backdrop) {
    return (
      <Section {...sectionOptions(section, tone)} className="split-backdrop">
        <div className="split-backdrop-media">
          <Image src={backdrop.src} alt={backdrop.alt} fill sizes="100vw" />
        </div>
        <div className="split-backdrop-panel space-y-6">{copy}</div>
      </Section>
    );
  }
  return (
    <Section {...sectionOptions(section, tone)}>
      <div
        className={`split-feature grid items-center gap-8 lg:grid-cols-12 lg:gap-6 ${reverse ? "split-reverse" : ""}`}
      >
        <div className={`split-media ${wide ? "lg:col-span-7" : "lg:col-span-5"}`}>
          {isGallery(media) ? (
            <div className="split-gallery">
              <span aria-hidden="true" className="split-gallery-motif" />
              <div className="split-gallery-lead">
                {renderMedia(media[0], {
                  aspect: "3/4",
                  masked: false,
                  sizes: wide
                    ? "(max-width: 1023px) 56vw, (max-width: 1279px) 33vw, 404px"
                    : "(max-width: 1023px) 56vw, (max-width: 1279px) 24vw, 284px",
                })}
              </div>
              <div className="split-gallery-side">
                <span aria-hidden="true" className="split-gallery-marker" />
                {media.slice(1).map((item, index) => (
                  <div key={index}>
                    {renderMedia(item, {
                      aspect: "4/3",
                      masked: false,
                      sizes: wide
                        ? "(max-width: 1023px) 40vw, (max-width: 1279px) 24vw, 288px"
                        : "(max-width: 1023px) 40vw, (max-width: 1279px) 17vw, 204px",
                    })}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            renderMedia(media, {
              masked: resolvedTone === "dark",
              sizes: wide
                ? "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 58vw, 704px"
                : "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 42vw, 496px",
            })
          )}
        </div>
        <div
          className={`split-copy space-y-6 ${wide ? "lg:col-span-5" : "lg:col-span-7"}`}
        >
          {copy}
        </div>
      </div>
    </Section>
  );
}
