import { createLucideIcon } from "lucide-react";

// Drawn on Lucide's 24px grid so they render through Icon with the same stroke rules. Lucide has one generic truck and no crane or truck mounted forklift.
export const LutonVan = createLucideIcon("luton-van", [
  ["path", { d: "M4 18H2V5h15v4h1l4 4v5h-2" }],
  ["path", { d: "M15 9v9" }],
  ["path", { d: "M8 18h8" }],
  ["path", { d: "M18 12h2" }],
  ["circle", { cx: "6", cy: "18", r: "2" }],
  ["circle", { cx: "18", cy: "18", r: "2" }],
]);

export const RigidLorry = createLucideIcon("rigid-lorry", [
  ["path", { d: "M2 15V6h11v9" }],
  ["path", { d: "M15 15V9h3l3 3.5V15" }],
  ["path", { d: "M2 15h20v2h-1" }],
  ["path", { d: "M8 17h8" }],
  ["path", { d: "M2 17h2" }],
  ["circle", { cx: "6", cy: "18", r: "2" }],
  ["circle", { cx: "18", cy: "18", r: "2" }],
]);

export const HeavyLorry = createLucideIcon("heavy-lorry", [
  ["path", { d: "M1 15V4h13v11" }],
  ["path", { d: "M16 15V7h3l3 3.5V15" }],
  ["path", { d: "M1 15h21v2h-1" }],
  ["path", { d: "M12 17h5" }],
  ["circle", { cx: "4.5", cy: "18", r: "2" }],
  ["circle", { cx: "10", cy: "18", r: "2" }],
  ["circle", { cx: "19", cy: "18", r: "2" }],
]);

export const CraneLorry = createLucideIcon("crane-lorry", [
  ["path", { d: "M2 15h20v2h-1" }],
  ["path", { d: "M8 17h8" }],
  ["path", { d: "M2 17h2" }],
  ["path", { d: "M15 15V9h3l3 3.5V15" }],
  ["path", { d: "M12 15V8L4 4v5" }],
  ["path", { d: "M3 9h2" }],
  ["circle", { cx: "6", cy: "18", r: "2" }],
  ["circle", { cx: "18", cy: "18", r: "2" }],
]);

export const ForkliftLorry = createLucideIcon("forklift-lorry", [
  ["path", { d: "M7 15V5h8v10" }],
  ["path", { d: "M16 15V8h2.5l3.5 4v3" }],
  ["path", { d: "M7 15h15v2h-1" }],
  ["path", { d: "M11 17h5.5" }],
  ["path", { d: "M4 4v14H1" }],
  ["path", { d: "M4 9h3" }],
  ["circle", { cx: "9", cy: "18", r: "2" }],
  ["circle", { cx: "18.5", cy: "18", r: "2" }],
]);
