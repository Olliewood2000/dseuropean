import type { TextareaHTMLAttributes } from "react";
import { CircleAlert } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";
export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
  hint?: string;
}
export function Textarea({ id, label, error, hint, ...props }: TextareaProps) {
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
      <textarea
        {...props}
        id={id}
        className="form-control"
        aria-invalid={Boolean(error)}
        aria-describedby={
          [hint && `${id}-hint`, error && `${id}-error`, props["aria-describedby"]]
            .filter(Boolean)
            .join(" ") || undefined
        }
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
