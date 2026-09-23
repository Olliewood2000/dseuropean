import Image from "next/image";
import { Check } from "lucide-react";

export interface AudienceCardProps {
  title: string;
  body: string;
  image?: { src: string; alt: string; position?: string };
  benefit?: string;
}

// Informational only: no link, no focus stop, no pointer.
export function AudienceCard({ title, body, image, benefit }: AudienceCardProps) {
  return (
    <li className="audience-card">
      <span aria-hidden="true" className="audience-card-rule" />
      <h3 className="audience-card-title">{title}</h3>
      <p className="audience-card-body">{body}</p>
      {image && (
        <div className="audience-card-media">
          <div className="audience-card-frame">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 639px) calc(100vw - 96px), (max-width: 1279px) calc(50vw - 100px), 250px"
              className="audience-card-image"
              style={image.position ? { objectPosition: image.position } : undefined}
            />
          </div>
        </div>
      )}
      {benefit && (
        <p className="audience-card-benefit">
          <span aria-hidden="true" className="audience-card-check">
            <Check size={12} strokeWidth={3} />
          </span>
          {benefit}
        </p>
      )}
    </li>
  );
}
