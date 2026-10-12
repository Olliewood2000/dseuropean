import { LutonVan, RigidLorry, HeavyLorry, CraneLorry, ForkliftLorry } from "@/lib/fleet-icons";
import type { FleetStripProps } from "@/components/blocks/FleetStrip";
// Supplied names and capacities from docs/pages/home.md, section 9. Images are the client's supplied cutouts.
export const fleet = [
  {
    name: "LWB and Luton",
    capacity: "Tail lift",
    icon: LutonVan,
    image: { src: "/images/Vehicle Webps/LutonVAN.webp", alt: "LWB Luton transport vehicle" },
  },
  {
    name: "7.5 tonne",
    capacity: "Curtain or box",
    icon: RigidLorry,
    image: { src: "/images/Vehicle Webps/7.5 Tonne.webp", alt: "7.5 tonne curtain-side truck" },
  },
  {
    name: "18 tonne",
    capacity: "Curtain or box",
    icon: HeavyLorry,
    image: { src: "/images/Vehicle Webps/18Tonne.webp", alt: "18 tonne transport truck" },
  },
  {
    name: "HIAB",
    capacity: "Crane mounted",
    icon: CraneLorry,
    image: { src: "/images/Vehicle Webps/HIAB.webp", alt: "HIAB crane truck" },
  },
  {
    name: "26 tonne Moffett",
    capacity: "Forklift mounted",
    icon: ForkliftLorry,
    image: { src: "/images/Vehicle Webps/Moffett.webp", alt: "26 tonne truck with Moffett forklift" },
  },
] satisfies FleetStripProps["vehicles"];
