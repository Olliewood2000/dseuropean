import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";
export interface ImageFrameProps {
  src: string | StaticImageData;
  alt: string;
  aspect?: "16/9" | "4/3" | "3/2" | "1/1" | "3/4";
  masked?: boolean;
  priority?: boolean;
  sizes?: string;
}
export function ImageFrame({
  src,
  alt,
  aspect = "3/2",
  masked = false,
  priority = false,
  sizes = "(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1279px) 55vw, 720px",
}: ImageFrameProps) {
  const [width, height] = aspect.split("/").map(Number);
  return (
    <div
      className={`image-frame ${masked ? "image-masked" : ""}`}
      style={{ aspectRatio: aspect, "--media-ratio": width / height } as CSSProperties}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder={typeof src !== "string" && src.blurDataURL ? "blur" : "empty"}
      />
    </div>
  );
}
