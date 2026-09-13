import { CircleAlert, CircleCheck, Info } from "lucide-react";
import { Icon } from "@/components/primitives/Icon";
import { site } from "@/content/site";
export interface FormMessageProps {
  variant: "success" | "error" | "preview";
  form?: "quote" | "contact";
  id?: string;
}
export function FormMessage({ variant, form = "quote", id }: FormMessageProps) {
  const title =
    variant === "success"
      ? "Thanks, that is with us."
      : variant === "preview"
        ? "Preview checked. Nothing was sent."
        : "That did not send.";
  const body =
    variant === "preview"
      ? "The fields are valid. Email delivery will be connected in Phase 7."
      : variant === "error"
        ? `That did not send. Try again, or ring us on ${site.phone}`
        : form === "quote"
          ? `We will come back to you with a price. If it is urgent, ring us on ${site.phone} rather than waiting for the email.`
          : `We will get back to you. If it is urgent, ring us on ${site.phone}.`;
  return (
    <div
      id={id}
      className={`form-message form-message-${variant} flex items-start gap-4`}
      role="status"
      tabIndex={-1}
    >
      <Icon icon={variant === "success" ? CircleCheck : variant === "error" ? CircleAlert : Info} />
      <div className="space-y-3">
        <h3 className="text-h4">{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
