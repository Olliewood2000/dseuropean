import { z } from "zod";
export const formMessages = {
  required: "This one is needed",
  email: "That does not look like an email address",
  phone: "That does not look like a phone number",
  short: "A little more detail would help",
} as const;
export const validators = {
  required: z.string().trim().min(1, formMessages.required),
  email: z.string().trim().min(1, formMessages.required).email(formMessages.email),
  phone: z
    .string()
    .trim()
    .min(1, formMessages.required)
    .regex(/^[+()\d\s.-]{7,25}$/, formMessages.phone)
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }, formMessages.phone),
  message: z.string().trim().min(1, formMessages.required).min(10, formMessages.short),
};
export function validateWith(schema: z.ZodType<string>) {
  return (value: string) => {
    const result = schema.safeParse(value);
    return result.success || result.error.issues[0]?.message || formMessages.required;
  };
}
