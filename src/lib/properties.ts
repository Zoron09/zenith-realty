import type { ComponentType } from "react";
import { ArrowsOut, Stack, Bed, Bathtub } from "@phosphor-icons/react/ssr";

type IconComponent = ComponentType<{
  className?: string;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  "aria-hidden"?: boolean | "true" | "false";
}>;

export type Property = {
  name: string;
  price: string;
  location: string;
  badge: string;
  image: string;
  specs: { icon: IconComponent; label: string }[];
};

/** Single source for listings — the grid renders these, the nav lists their names. */
export const PROPERTIES: Property[] = [
  {
    name: "Aether Heights",
    price: "$345,000",
    location: "USA / California / Malibu",
    badge: "Malibu",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: ArrowsOut, label: "200 m²" },
      { icon: Stack, label: "1 Floor" },
      { icon: Bed, label: "4 Beds" },
      { icon: Bathtub, label: "2 Baths" },
    ],
  },
  {
    name: "Azure Sanctuary",
    price: "$225,000",
    location: "Caribbean / Bahamas / Breezy",
    badge: "Bahamas",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: ArrowsOut, label: "250 m²" },
      { icon: Stack, label: "1 Floor" },
      { icon: Bed, label: "4 Beds" },
      { icon: Bathtub, label: "1 Bath" },
    ],
  },
  {
    name: "Summit Pavilion",
    price: "$510,000",
    location: "USA / Colorado / Vail",
    badge: "Vail",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: ArrowsOut, label: "420 m²" },
      { icon: Stack, label: "3 Floors" },
      { icon: Bed, label: "6 Beds" },
      { icon: Bathtub, label: "3 Baths" },
    ],
  },
];
