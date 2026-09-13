export interface MotifShapeProps {
  variant?: "solid" | "outline" | "tint";
  tone?: "accent" | "white" | "navy";
  size?: "sm" | "md" | "lg" | "xl";
  position: "top-right" | "bottom-left" | "right" | "bottom-right";
  opacity?: number;
}

export function MotifShape({
  variant = "solid",
  tone = "accent",
  size = "md",
  position,
  opacity = 0.12,
}: MotifShapeProps) {
  return (
    <span
      aria-hidden="true"
      className={`motif-shape motif-${variant} motif-${tone} motif-${size} motif-${position}`}
      style={variant === "tint" ? { opacity: Math.min(0.16, Math.max(0.08, opacity)) } : undefined}
    />
  );
}
