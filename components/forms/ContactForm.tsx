"use client";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { useEnquiry } from "@/lib/use-enquiry";
import type { ContactValues } from "@/lib/enquiry-schema";
import { schemaResolver } from "@/lib/form-validation";
import { contactSchema } from "@/lib/enquiry-schema";
import type { Tone } from "@/lib/blocks";
import { Button } from "@/components/primitives/Button";
import { Field } from "./Field";
import { Textarea } from "./Textarea";
import { FormMessage } from "./FormMessage";
export interface ContactFormProps {
  tone?: Tone;
  preview?: boolean;
}
export function ContactForm({ tone = "light", preview = true }: ContactFormProps) {
  const id = useId();
  const { status, startField, honeypot, result, submit } = useEnquiry("contact", preview);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: schemaResolver(contactSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  if (status === "success")
    return (
      <div ref={result}>
        <FormMessage variant="success" form="contact" />
      </div>
    );
  return (
    <form
      aria-label={preview ? "Contact form preview" : "Contact form"}
      noValidate
      className="form-layout"
      onSubmit={handleSubmit((values) => submit(values))}
    >
      {preview && (
        <p className="block-muted text-body-sm">
          Form preview only. Nothing entered here is sent or saved.
        </p>
      )}
      <input type="hidden" name="startedAt" ref={startField} />
      <div hidden>
        <label htmlFor={`${id}-website`}>Company website</label>
        <input
          id={`${id}-website`}
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          ref={honeypot}
        />
      </div>
      <div className="form-fields">
        <Field
          id={`${id}-name`}
          label="Name"
          autoComplete="name"
          required
          {...register("name")}
          error={errors.name?.message}
        />
        <Field
          id={`${id}-email`}
          label="Email"
          type="email"
          autoComplete="email"
          required
          {...register("email")}
          error={errors.email?.message}
        />
        <Field
          id={`${id}-phone`}
          label="Phone"
          type="tel"
          autoComplete="tel"
          required
          {...register("phone")}
          error={errors.phone?.message}
        />
        <Textarea
          id={`${id}-message`}
          label="Message"
          rows={5}
          required
          {...register("message")}
          error={errors.message?.message}
        />
      </div>
      <Button
        disabled={isSubmitting}
        type="submit"
        variant={tone === "dark" ? "primary-dark" : "primary"}
      >
        {isSubmitting ? "Sending" : preview ? "Check form preview" : "Send message"}
      </Button>
      <div aria-live="polite">
        {status === "preview" && <FormMessage variant="preview" form="contact" />}
        {status === "error" && <FormMessage variant="error" form="contact" />}
      </div>
    </form>
  );
}
