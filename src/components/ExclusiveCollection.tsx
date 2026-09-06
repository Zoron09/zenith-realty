import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function ExclusiveCollection() {
  return (
    <FadeInSection
      className="pt-6"
    >
      <section
        id="company"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gray block">
            Architectural Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15]">
            Exclusive collection
          </h2>
          <p className="text-brand-gray text-base md:text-lg leading-relaxed font-normal">
            Designed for individuals who view real estate as custom works of
            art rather than simple shelters. Each structure boasts organic
            raw materials, sustainable building configurations, and
            high-performance smart-home utility frames integrated natively.
          </p>
          <div className="pt-2">
            <a
              href="#contact"
              className="inline-block text-sm font-bold tracking-wider text-brand-black border-b-2 border-brand-black pb-1 hover:text-brand-gray hover:border-brand-gray transition-all"
            >
              Free consult
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[16/11] max-h-[600px] shadow-md bg-brand-lightGray group">
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
            alt="Exclusive Concrete Luxury Architecture"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
          />
        </div>
      </section>
    </FadeInSection>
  );
}
