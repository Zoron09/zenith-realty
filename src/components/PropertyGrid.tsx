import Image from "next/image";
import { Maximize, Layers, BedDouble, Bath } from "lucide-react";
import FadeInSection from "./FadeInSection";

type Property = {
  name: string;
  price: string;
  location: string;
  badge: string;
  image: string;
  specs: { icon: typeof Maximize; label: string }[];
};

const PROPERTIES: Property[] = [
  {
    name: "Aether Heights",
    price: "$345,000",
    location: "USA / California / Malibu",
    badge: "Malibu",
    image:
      "https://images.unsplash.com/photo-1745761320791-5ae142edee8c?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: Maximize, label: "200 m²" },
      { icon: Layers, label: "1 Floor" },
      { icon: BedDouble, label: "4 Beds" },
      { icon: Bath, label: "2 Baths" },
    ],
  },
  {
    name: "Azure Sanctuary",
    price: "$225,000",
    location: "Caribbean / Bahamas / Breezy",
    badge: "Bahamas",
    image:
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: Maximize, label: "250 m²" },
      { icon: Layers, label: "1 Floor" },
      { icon: BedDouble, label: "4 Beds" },
      { icon: Bath, label: "1 Bath" },
    ],
  },
  {
    name: "Summit Pavilion",
    price: "$510,000",
    location: "USA / Colorado / Vail",
    badge: "Vail",
    image:
      "https://images.unsplash.com/photo-1680874261352-ed1ee3d1cf01?auto=format&fit=crop&w=800&q=80",
    specs: [
      { icon: Maximize, label: "420 m²" },
      { icon: Layers, label: "3 Floors" },
      { icon: BedDouble, label: "6 Beds" },
      { icon: Bath, label: "3 Baths" },
    ],
  },
];

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group bg-white">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-lightGray">
        <Image
          src={property.image}
          alt={`${property.name}, ${property.badge}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>
      <div className="flex items-start justify-between px-4 pt-4">
        <div className="space-y-1">
          <h3 className="text-xl font-bold tracking-tight text-brand-black group-hover:text-brand-gray transition-colors">
            {property.name}
          </h3>
          <p className="text-sm text-brand-gray font-medium">{property.location}</p>
        </div>
        <div className="text-right">
          <span className="text-xl font-extrabold text-brand-black">{property.price}</span>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 mx-4 mt-4 pt-2 pb-4 border-t border-brand-border/60 text-xs text-brand-gray font-semibold">
        {property.specs.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 bg-brand-lightGray text-center"
          >
            <Icon className="w-4 h-4 mb-1 text-brand-black/60" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PropertyGrid() {
  return (
    <section id="listings" className="space-y-12 pt-6">
      <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end border-b border-brand-border/60 pb-8">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Guiding you toward the residence of your dreams
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-brand-gray text-base leading-relaxed">
            Browse our curated selections of outstanding residential
            masterpieces, chosen for premium architecture, beautiful scenic
            spots, and unparalleled design.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection
        delay={0.1}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </FadeInSection>
    </section>
  );
}
