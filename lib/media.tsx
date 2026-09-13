import { ImageFrame, type ImageFrameProps } from "@/components/primitives/ImageFrame";
import {
  ImagePlaceholder,
  type ImagePlaceholderProps,
} from "@/components/primitives/ImagePlaceholder";
export type Media = ImageFrameProps | ImagePlaceholderProps;
export function renderMedia(
  media: Media,
  overrides: Partial<Pick<ImageFrameProps, "aspect" | "masked" | "priority" | "sizes">> = {},
) {
  return "src" in media ? (
    <ImageFrame {...media} {...overrides} />
  ) : (
    <ImagePlaceholder {...media} {...overrides} />
  );
}
