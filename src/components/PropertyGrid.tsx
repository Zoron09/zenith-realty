import Image from "next/image";
import { PROPERTIES, type Property } from "@/lib/properties";
import FadeInSection from "./FadeInSection";

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group space-y-4">
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-sm bg-brand-lightGray">
        <Image
          src={property.image}
          alt={`${property.name}, ${property.badge}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-sm text-xs font-semibold shadow-sm">
          {property.badge}
        </div>
      </div>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-brand-black transition-colors duration-300 group-hover:text-brand-gray">
            {property.name}
          </h3>
          <p className="text-sm text-brand-gray">{property.location}</p>
        </div>
        <span className="text-xl font-semibold tabular-nums text-brand-black">
          {property.price}
        </span>
      </div>
      <div className="grid grid-cols-4 gap-2 pt-2 border-t border-brand-border/60 text-xs text-brand-gray">
        {property.specs.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center p-2 bg-brand-lightGray rounded-sm text-center"
          >
            <Icon
              className="w-4 h-4 mb-1 text-brand-black/60"
              weight="light"
              aria-hidden="true"
            />
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
        stagger={0.09}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.name} property={property} />
        ))}
      </FadeInSection>
    </section>
  );
}
