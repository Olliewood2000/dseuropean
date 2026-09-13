import type { InputHTMLAttributes } from "react";
import { CircleAlert } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";
export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  hint?: string;
  error?: string;
}
export function Field({ id, label, hint, error, className = "", ...props }: FieldProps) {
  const describedBy =
    [hint && `${id}-hint`, error && `${id}-error`, props["aria-describedby"]]
      .filter(Boolean)
      .join(" ") || undefined;
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={id} className="block text-body-sm font-bold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="block-muted text-body-sm">
          {hint}
        </p>
      )}
      <input
        {...props}
        id={id}
        className="form-control"
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
      />
      {error && (
        <p id={`${id}-error`} className="field-error flex items-start gap-2 text-body-sm">
          <Icon icon={CircleAlert} size={20} />
          {error}
        </p>
      )}
    </div>
  );
}
