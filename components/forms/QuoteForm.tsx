"use client";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { ChevronDown } from "lucide-react";
import { services } from "@/content/services";
import { validateWith, validators } from "@/lib/form-validation";
import type { Tone } from "@/lib/blocks";
import { Icon } from "@/components/primitives/Icon";
import { Button } from "@/components/primitives/Button";
import { Field } from "./Field";
import { Textarea } from "./Textarea";
import { Select } from "./Select";
import { FormMessage } from "./FormMessage";
interface QuoteValues {
  name: string;
  email: string;
  phone: string;
  from: string;
  to: string;
  moving: string;
  service: string;
  when: string;
  installation: boolean;
}
export interface QuoteFormProps {
  compact?: boolean;
  defaultService?: string;
  tone?: Tone;
}
export function QuoteForm({
  compact = false,
  defaultService = "",
  tone = "light",
}: QuoteFormProps) {
  const id = useId();
  const [previewChecked, setPreviewChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { service: defaultService },
  });
  return (
    <form
      noValidate
      aria-label="Quote form preview"
      onChange={() => setPreviewChecked(false)}
      className={`form-layout ${compact ? "form-compact" : ""}`}
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
        <Field
          id={`${id}-from`}
          label="Collecting from"
          hint="Town or postcode is enough"
          required
          {...register("from", { validate: validateWith(validators.required) })}
          error={errors.from?.message}
        />
        <Field
          id={`${id}-to`}
          label="Delivering to"
          hint="Town or postcode is enough"
          required
          {...register("to", { validate: validateWith(validators.required) })}
          error={errors.to?.message}
        />
        <Textarea
          id={`${id}-moving`}
          label="What needs moving"
          rows={3}
          placeholder="A dining table and six chairs, roughly 2.4m long"
          required
          {...register("moving", { validate: validateWith(validators.message) })}
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
          <Field id={`${id}-when`} label="When do you need it" {...register("when")} />
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
            disabled
            hint="Maximum 3 images, 4MB total. Photo uploads will be connected in Phase 7."
          />
        </div>
      </details>
      <Button type="submit" variant={tone === "dark" ? "primary-dark" : "primary"}>
        Check form preview
      </Button>
      <div aria-live="polite">{previewChecked && <FormMessage variant="preview" />}</div>
    </form>
  );
}
