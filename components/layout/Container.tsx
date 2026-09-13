import type { ReactNode } from "react";

export interface ContainerProps {
  variant?: "site" | "narrow" | "full";
  children: ReactNode;
}

export function Container({ variant = "site", children }: ContainerProps) {
  return <div className={`container-${variant}`}>{children}</div>;
}
