"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { validateWith, validators } from "@/lib/form-validation";
import type { Tone } from "@/lib/blocks";
import { Button } from "@/components/primitives/Button";
import { Field } from "./Field";
import { Textarea } from "./Textarea";
import { FormMessage } from "./FormMessage";
interface ContactValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}
export interface ContactFormProps {
  tone?: Tone;
}
export function ContactForm({ tone = "light" }: ContactFormProps) {
  const id = useId();
  const [previewChecked, setPreviewChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({ mode: "onBlur", reValidateMode: "onBlur" });
  return (
    <form
      aria-label="Contact form preview"
      onChange={() => setPreviewChecked(false)}
      noValidate
      className="form-layout"
      onSubmit={handleSubmit(
        () => setPreviewChecked(true),
        () => setPreviewChecked(false),
      )}
    >
      <p className="block-muted text-body-sm">
        Form preview only. Nothing entered here is sent or saved.
      </p>
      <div className="form-fields">
        <Field
          id={`${id}-name`}
          label="Name"
          autoComplete="name"
          required
          {...register("name", { validate: validateWith(validators.required) })}
          error={errors.name?.message}
        />
        <Field
          id={`${id}-email`}
          label="Email"
          type="email"
          autoComplete="email"
          required
          {...register("email", { validate: validateWith(validators.email) })}
          error={errors.email?.message}
        />
        <Field
          id={`${id}-phone`}
          label="Phone"
          type="tel"
          autoComplete="tel"
          required
          {...register("phone", { validate: validateWith(validators.phone) })}
          error={errors.phone?.message}
        />
        <Textarea
          id={`${id}-message`}
          label="Message"
          rows={5}
          required
          {...register("message", { validate: validateWith(validators.message) })}
          error={errors.message?.message}
        />
      </div>
      <Button type="submit" variant={tone === "dark" ? "primary-dark" : "primary"}>
        Check form preview
      </Button>
      <div aria-live="polite">
        {previewChecked && <FormMessage variant="preview" form="contact" />}
      </div>
    </form>
  );
}
