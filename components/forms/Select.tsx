import type { SelectHTMLAttributes } from "react";
import { CircleAlert } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";
export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: readonly { label: string; value: string }[];
  error?: string;
  hint?: string;
}
export function Select({ id, label, options, error, hint, ...props }: SelectProps) {
  return (
    <div className="form-field">
      <label htmlFor={id} className="text-body-sm font-bold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="block-muted text-body-sm">
          {hint}
        </p>
      )}
      <select
        {...props}
        id={id}
        className="form-control"
        aria-invalid={Boolean(error)}
        aria-describedby={
          [hint && `${id}-hint`, error && `${id}-error`, props["aria-describedby"]]
            .filter(Boolean)
            .join(" ") || undefined
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="field-error flex items-start gap-2 text-body-sm">
          <Icon icon={CircleAlert} size={20} />
          {error}
        </p>
      )}
    </div>
  );
}
