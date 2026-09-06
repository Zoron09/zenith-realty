import Image from "next/image";
import FadeInSection from "./FadeInSection";

/**
 * Full-width band: edge-to-edge media with a contained text panel overlapping
 * its lower edge. Deliberately not the 7/5 split used by Hero and PropertyGrid.
 */
export default function ExclusiveCollection() {
  return (
    <section id="company" className="pt-6">
      <FadeInSection className="full-bleed">
        <div className="relative h-[46svh] min-h-[300px] md:h-[62svh] overflow-hidden bg-brand-lightGray">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80"
            alt="Exclusive Concrete Luxury Architecture"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30" />
        </div>

        <div className="px-6 md:px-12">
          <div className="relative mx-auto -mt-16 md:-mt-24 max-w-3xl rounded-lg bg-white px-7 py-10 md:px-14 md:py-14 text-center shadow-lg">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gray block">
              Architectural Excellence
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-tight leading-[1.15]">
              Exclusive collection
            </h2>
            <p className="mx-auto mt-5 max-w-[58ch] text-brand-gray text-base md:text-lg leading-relaxed">
              Designed for individuals who view real estate as custom works of
              art rather than simple shelters. Each structure boasts organic
              raw materials, sustainable building configurations, and
              high-performance smart-home utility frames integrated natively.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block text-sm font-semibold tracking-wide text-brand-black border-b-2 border-brand-black pb-1 transition-colors duration-300 hover:text-brand-gray hover:border-brand-gray"
              >
                Free consult
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
