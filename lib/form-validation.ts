import { z } from "zod";
import type { FieldValues, Resolver, FieldErrors } from "react-hook-form";
// Keep validation compatible with the CSP without enabling eval in the browser.
z.config({ jitless: true });
export const formMessages = {
  required: "This one is needed",
  email: "That does not look like an email address",
  phone: "That does not look like a phone number",
  short: "A little more detail would help",
} as const;
export const validators = {
  required: z.string().trim().min(1, formMessages.required).max(200),
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
  message: z.string().trim().min(1, formMessages.required).min(10, formMessages.short).max(10000),
};
export function validateWith(schema: z.ZodType<string>) {
  return (value: string) => {
    const result = schema.safeParse(value);
    return result.success || result.error.issues[0]?.message || formMessages.required;
  };
}

/** Both client forms and their route handlers use the same complete schema. */
export function schemaResolver<T extends FieldValues>(schema: z.ZodType<T>): Resolver<T> {
  return (values) => {
    const result = schema.safeParse(values);
    if (result.success) return { values: result.data, errors: {} };
    const errors: Record<string, { type: string; message: string }> = {};
    for (const issue of result.error.issues) {
      const field = String(issue.path[0]);
      errors[field] ??= { type: issue.code, message: issue.message };
    }
    return { values: {}, errors: errors as FieldErrors<T> };
  };
}
