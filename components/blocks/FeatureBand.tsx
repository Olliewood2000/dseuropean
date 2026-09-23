import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { Button } from "@/components/primitives/Button";
import { Icon } from "@/components/primitives/Icon";
import { MotifShape } from "@/components/primitives/MotifShape";
import type { SectionOptions } from "@/lib/blocks";

export interface FeatureBandImage {
  src: string;
  alt: string;
  /** CSS object-position, to keep the subject inside the angled crop. */
  position?: string;
}

export interface FeatureBandProps {
  eyebrow?: string;
  title: string;
  body?: string;
  items?: readonly string[];
  cta?: { label: string; href: string };
  background?: "inverse" | "accent";
  /** Lead image, upper supporting image, lower supporting image. Renders the collage beside the copy. */
  media?: readonly [FeatureBandImage, FeatureBandImage, FeatureBandImage];
  section?: SectionOptions;
}

const collageSlots = [
  {
    name: "lead",
    sizes: "(max-width: 767px) calc(100vw - 72px), (max-width: 1023px) 480px, 500px",
  },
  {
    name: "upper",
    sizes: "(max-width: 767px) 50vw, (max-width: 1023px) 320px, 300px",
  },
  {
    name: "lower",
    sizes: "(max-width: 767px) 50vw, (max-width: 1023px) 420px, 400px",
  },
] as const;

export function FeatureBand({
  eyebrow,
  title,
  body,
  items,
  cta,
  background = "inverse",
  media,
  section,
}: FeatureBandProps) {
  const button = cta && (
    <Button
      href={cta.href}
      variant={background === "accent" ? "ghost-dark" : "primary-dark"}
      size="lg"
      icon={media ? ArrowRight : undefined}
    >
      {cta.label}
    </Button>
  );

  return (
    <Section background={background} padding="generous" cut="both" {...section}>
      <MotifShape variant="tint" tone="white" position="top-right" size="xl" opacity={0.08} />
      <MotifShape variant="tint" tone="white" position="bottom-left" size="lg" opacity={0.08} />
      {media ? (
        <div className="feature-band-split relative">
          <div className="space-y-8">
            {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
            <h2 className="max-w-display text-display-md text-balance text-ink-inverse">{title}</h2>
            {body && <p className="max-w-measure text-body-lg text-ink-inverse">{body}</p>}
            {items && items.length > 0 && (
              <ul className="feature-pills">
                {items.map((item) => (
                  <li key={item} className="feature-pill">
                    <Icon icon={MapPin} size={20} tone="accent-on-dark" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {button}
          </div>
          <div className="feature-collage">
            <span aria-hidden="true" className="feature-collage-accent feature-collage-accent-top" />
            <span aria-hidden="true" className="feature-collage-accent feature-collage-accent-side" />
            <span aria-hidden="true" className="feature-collage-accent feature-collage-accent-base" />
            {media.map((image, index) => (
              <div
                key={image.src}
                className={`feature-collage-frame feature-collage-${collageSlots[index].name}`}
              >
                <div className="feature-collage-shape">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes={collageSlots[index].sizes}
                    style={image.position ? { objectPosition: image.position } : undefined}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative space-y-8">
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h2 className="max-w-display text-display-md text-balance text-ink-inverse">{title}</h2>
          {body && <p className="max-w-measure text-body-lg text-ink-inverse">{body}</p>}
          {items && items.length > 0 && (
            <ul className="feature-items flex flex-col gap-6 text-h2 font-bold md:flex-row md:flex-wrap">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {button}
        </div>
      )}
    </Section>
  );
}
