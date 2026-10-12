// The complete review and temporary imagery are authorised for staging only.
export const isReviewBuild = process.env.VERCEL_ENV !== "production";
export const temporaryImagesEnabled =
  isReviewBuild && process.env.REVIEW_IMAGES_ENABLED !== "false";
