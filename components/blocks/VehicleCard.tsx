import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";

export interface VehicleCardProps {
  name: string;
  capacity?: string;
  note?: string;
  icon: LucideIcon;
  image?: { src: string; alt: string };
}

// Informational only: no link, no focus stop, no pointer.
export function VehicleCard({ name, capacity, note, icon, image }: VehicleCardProps) {
  return (
    <li className="vehicle-card">
      <div className="vehicle-card-body">
        <span className="vehicle-card-icon">
          <Icon icon={icon} size={32} tone="inverse" />
        </span>
        <div className="min-w-0">
          <h3 className="vehicle-card-name">{name}</h3>
          {capacity && <p className="vehicle-card-detail">{capacity}</p>}
          {note && <p className="vehicle-card-detail">{note}</p>}
        </div>
      </div>
      {image && (
        <div className="vehicle-card-media">
          <Image
            src={image.src}
            alt={image.alt}
            width={1600}
            height={1000}
            loading="lazy"
            sizes="(max-width: 639px) 45vw, (max-width: 1023px) 320px, 280px"
            className="vehicle-card-image"
          />
        </div>
      )}
    </li>
  );
}
