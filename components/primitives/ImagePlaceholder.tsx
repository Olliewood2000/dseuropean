import { Camera } from "lucide-react";
import { Icon } from "./Icon";
import { MotifShape } from "./MotifShape";
import type { ImageFrameProps } from "./ImageFrame";
import type { CSSProperties } from "react";
export interface ImagePlaceholderProps {
  aspect?: ImageFrameProps["aspect"];
  brief: string;
  masked?: boolean;
}
export function ImagePlaceholder({ aspect = "3/2", brief, masked = false }: ImagePlaceholderProps) {
  const [width, height] = aspect.split("/").map(Number);
  return (
    <div
      role="img"
      aria-label={brief}
      className={`image-placeholder ${masked ? "image-masked" : ""}`}
      style={{ "--media-ratio": width / height } as CSSProperties}
    >
      <MotifShape variant="tint" tone="white" position="right" size="md" />
      <div className="relative flex flex-col items-center gap-4" aria-hidden="true">
        <Icon icon={Camera} tone="accent-on-dark" />
        <p className="text-label font-bold text-ink-inverse-muted">{brief}</p>
      </div>
    </div>
  );
}
