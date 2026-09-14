import { MAX_PHOTO_BYTES, photoMessages } from "./enquiry-schema";

export async function preparePhotos(files: readonly File[]): Promise<File[]> {
  if (files.length > 3) throw new Error(photoMessages.count);
  const prepared: File[] = [];
  for (const file of files) {
    const heic = file.type === "image/heic" || (!file.type && /\.heic$/i.test(file.name));
    if (!heic && !["image/jpeg", "image/png", "image/webp"].includes(file.type))
      throw new Error(photoMessages.type);
    if (file.size > 20_000_000) throw new Error(photoMessages.size);
    let image: ImageBitmap;
    try {
      image = await createImageBitmap(file);
    } catch {
      // Browsers without HEIC decoding can still attach the original within the cap.
      // Cross-browser HEIC resizing needs an approved decoder dependency.
      if (!heic) throw new Error(photoMessages.decode);
      prepared.push(new File([file], file.name, { type: "image/heic" }));
      continue;
    }
    try {
      const scale = Math.min(1, 1920 / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      const context = canvas.getContext("2d");
      if (!context) throw new Error(photoMessages.decode);
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      const blob = await new Promise<Blob>((resolve, reject) =>
        canvas.toBlob(
          (value) => (value ? resolve(value) : reject(new Error(photoMessages.decode))),
          "image/jpeg",
          0.8,
        ),
      );
      prepared.push(
        new File([blob], file.name.replace(/\.[^.]+$/, "") + ".jpg", { type: "image/jpeg" }),
      );
    } finally {
      image.close();
    }
  }
  if (prepared.reduce((sum, file) => sum + file.size, 0) > MAX_PHOTO_BYTES)
    throw new Error(photoMessages.size);
  return prepared;
}
