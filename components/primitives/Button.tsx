import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Icon } from "./Icon";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost-dark" | "primary-dark";
  size?: "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export function Button({ variant = "primary", size = "md", href, icon, children }: ButtonProps) {
  const className = `button button-${variant} button-${size}`;
  const content = (
    <>
      {children}
      {icon && (
        <Icon icon={icon} size={20} tone={variant === "secondary" ? "accent" : "accent-on-dark"} />
      )}
    </>
  );
  return href ? (
    <Link href={href} className={className}>
      {content}
    </Link>
  ) : (
    <button type="button" className={className}>
      {content}
    </button>
  );
}
