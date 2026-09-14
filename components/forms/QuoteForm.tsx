"use client";
import { useId } from "react";
import { useForm } from "react-hook-form";
import { useEnquiry } from "@/lib/use-enquiry";
import type { QuoteValues } from "@/lib/enquiry-schema";
import { ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { schemaResolver } from "@/lib/form-validation";
import { quoteSchema } from "@/lib/enquiry-schema";
import type { Tone } from "@/lib/blocks";
import { Icon } from "@/components/primitives/Icon";
import { Button } from "@/components/primitives/Button";
import { Field } from "./Field";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { FormMessage } from "./FormMessage";
export interface QuoteFormProps {
  compact?: boolean;
  defaultService?: string;
  tone?: Tone;
  preview?: boolean;
}
export function QuoteForm({
  preview = true,
  compact = false,
  defaultService = "",
  tone = "light",
}: QuoteFormProps) {
  const id = useId();
  const { status, photoError, startField, honeypot, fileField, result, submit } = useEnquiry(
    "quote",
    preview,
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteValues>({
    resolver: schemaResolver(quoteSchema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { service: defaultService },
  });
  if (status === "success")
    return (
      <div ref={result}>
        <FormMessage variant="success" form="quote" />
      </div>
    );
  return (
    <form
      noValidate
      aria-label={preview ? "Quote form preview" : "Quote form"}
      className={`form-layout ${compact ? "form-compact" : ""}`}
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
        <Field
          id={`${id}-from`}
          label="Collecting from"
          hint="Town or postcode is enough"
          required
          {...register("from")}
          error={errors.from?.message}
        />
        <Field
          id={`${id}-to`}
          label="Delivering to"
          hint="Town or postcode is enough"
          required
          {...register("to")}
          error={errors.to?.message}
        />
        <Textarea
          id={`${id}-moving`}
          label="What needs moving"
          rows={3}
          placeholder="A dining table and six chairs, roughly 2.4m long"
          required
          {...register("moving")}
          error={errors.moving?.message}
        />
      </div>
      <details className="form-disclosure block-border border-y">
        <summary className="flex items-center justify-between gap-4 py-5 text-body-sm font-bold">
          Add detail (optional, but speeds things up)
          <Icon icon={ChevronDown} size={20} tone={tone === "dark" ? "accent-on-dark" : "accent"} />
        </summary>
        <div className="space-y-6 pb-6">
          <Select
            id={`${id}-service`}
            label="Service"
            {...register("service")}
            options={[
              { label: "Select a service (optional)", value: "" },
              ...services.map((service) => ({ label: service.title, value: service.slug })),
            ]}
          />
          <Field
            id={`${id}-when`}
            label="When do you need it"
            error={errors.when?.message}
            maxLength={200}
            {...register("when")}
          />
          <label className="flex items-start gap-3">
            <input type="checkbox" className="form-checkbox" {...register("installation")} />
            Installation or set up required
          </label>
          <Field
            id={`${id}-photos`}
            label="Photographs"
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/heic"
            ref={fileField}
            disabled={preview || isSubmitting}
            error={photoError}
            hint="Maximum 3 images, 4MB total"
          />
        </div>
      </details>
      <Button
        disabled={isSubmitting}
        type="submit"
        variant={tone === "dark" ? "primary-dark" : "primary"}
      >
        {isSubmitting ? "Sending" : preview ? "Check form preview" : "Send request"}
      </Button>
      <div aria-live="polite">
        {status === "preview" && <FormMessage variant="preview" form="quote" />}
        {status === "error" && <FormMessage variant="error" form="quote" />}
      </div>
    </form>
  );
}
