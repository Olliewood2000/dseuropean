import { z } from "zod";
import { validators } from "./form-validation";
import { services } from "../content/services/index";

export const MAX_PHOTO_BYTES = 4_000_000;
export const photoMessages = {
  size: "That is over the 4MB limit. Try fewer or smaller images",
  type: "Images only, please",
  count: "Maximum 3 images",
  decode: "This image could not be opened. Try a JPEG or PNG instead.",
};
const common = { name: validators.required, email: validators.email, phone: validators.phone };
export const contactSchema = z.object({ ...common, message: validators.message });
export const quoteSchema = z.object({
  ...common,
  from: validators.required,
  to: validators.required,
  moving: validators.message,
  service: z
    .string()
    .max(100)
    .refine((value) => value === "" || services.some((s) => s.slug === value))
    .default(""),
  when: z.string().trim().max(200).default(""),
  installation: z.boolean().default(false),
});
export const submissionSchema = z.object({
  company_website: z.string().max(1000),
  startedAt: z.number().finite().positive(),
  requestId: z.string().uuid(),
});
export type QuoteValues = z.infer<typeof quoteSchema>;
export type ContactValues = z.infer<typeof contactSchema>;
