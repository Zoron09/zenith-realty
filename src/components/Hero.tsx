import Image from "next/image";
import FadeInSection from "./FadeInSection";

// Intrinsic size of public/hero-placeholder.jpg. Passed to next/image so it
// knows the real aspect ratio; CSS then renders it at full width, auto height.
const HERO_W = 5508;
const HERO_H = 3072;

export default function Hero() {
  return (
    <section id="home" className="space-y-12">
      <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-brand-black leading-[1.1] max-w-[650px]">
            Discover space you truly belong in
          </h1>
          <div>
            <a
              href="#contact"
              className="inline-block bg-brand-black text-white text-xs font-extrabold tracking-widest uppercase px-8 py-4 hover:bg-brand-gray transition-colors duration-300 shadow-md"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-4">
          <p className="text-lg md:text-xl text-brand-gray font-normal leading-relaxed">
            Experience more than a house; find a sanctuary where your journey
            unfolds, rich with comfort and endless opportunities.
          </p>
        </div>
      </FadeInSection>

      {/* Full-bleed and uncropped: no aspect-ratio container and no object-cover,
          so the section ends exactly where the image does. The image's sky is
          already near-white (#FDFDFD), so it blends into the page ground and
          needs no gradient scrim — see design.md §4. */}
      <FadeInSection delay={0.1} className="full-bleed relative">
        <Image
          src="/hero-placeholder.jpg"
          alt="The Obsidian Meridian — Sunset Villa"
          width={HERO_W}
          height={HERO_H}
          sizes="100vw"
          preload
          className="block w-full h-auto"
        />
        {/* Dark text: the image is light where this sits (198,188,180),
            so white would fail contrast at 1.87:1. Black measures 10.6:1. */}
        <div className="absolute bottom-6 left-6 md:left-12 space-y-1 text-brand-black">
          <span className="text-xs uppercase tracking-widest font-semibold text-brand-gray">
            Featured Residence
          </span>
          <h3 className="text-xl md:text-3xl font-medium">
            The Obsidian Meridian — Sunset Villa
          </h3>
        </div>
      </FadeInSection>
    </section>
  );
}
