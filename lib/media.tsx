import { ImageFrame, type ImageFrameProps } from "@/components/primitives/ImageFrame";
import {
  ImagePlaceholder,
  type ImagePlaceholderProps,
} from "@/components/primitives/ImagePlaceholder";
import { temporaryImagesEnabled } from "./review";

const examples = {
  transport: {
    src: "/images/review/transport.webp",
    alt: "AI-generated example of a van loaded with protected furniture.",
  },
  installation: {
    src: "/images/review/installation.webp",
    alt: "AI-generated example of two fitters positioning a table indoors.",
  },
  storage: {
    src: "/images/review/storage.webp",
    alt: "AI-generated example of wrapped furniture and crates in storage.",
  },
  exhibition: {
    src: "/images/review/exhibition.webp",
    alt: "AI-generated example of an exhibition display being assembled.",
  },
};
export type Media = ImageFrameProps | ImagePlaceholderProps;
export function renderMedia(
  media: Media,
  overrides: Partial<Pick<ImageFrameProps, "aspect" | "masked" | "priority" | "sizes">> = {},
) {
  if (!("src" in media) && temporaryImagesEnabled) {
    const brief = media.brief.toLowerCase();
    const key = /exhibition|stand|retail|display/.test(brief)
      ? "exhibition"
      : /warehouse|storage|racking/.test(brief)
        ? "storage"
        : /room|interior|fitter|team|hands|domestic/.test(brief)
          ? "installation"
          : "transport";
    return (
      <figure>
        <ImageFrame {...media} {...examples[key]} {...overrides} />
        <figcaption className="mt-2 text-micro">Temporary AI-generated image</figcaption>
      </figure>
    );
  }
  return "src" in media ? (
    <ImageFrame {...media} {...overrides} />
  ) : (
    <ImagePlaceholder {...media} {...overrides} />
  );
}
