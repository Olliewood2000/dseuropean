import { Van, Truck, Container, Forklift } from "lucide-react";
import type { FleetStripProps } from "@/components/blocks/FleetStrip";
// Supplied names and capacities from docs/pages/home.md, section 9.
export const fleet = [
  {
    name: "LWB and Luton",
    capacity: "Tail lift",
    icon: Van,
  },
  {
    name: "7.5 tonne",
    capacity: "Curtain or box",
    icon: Truck,
  },
  {
    name: "18 tonne",
    capacity: "Curtain or box",
    icon: Truck,
  },
  {
    name: "HIAB",
    capacity: "Crane mounted",
    // Lucide has no Crane export. Retain the HIAB glyph from the approved gallery.
    icon: Container,
  },
  {
    name: "26 tonne Moffett",
    capacity: "Forklift mounted",
    icon: Forklift,
  },
] satisfies FleetStripProps["vehicles"];
