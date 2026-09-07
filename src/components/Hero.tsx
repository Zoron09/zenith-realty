import Image from "next/image";
import FadeInSection from "./FadeInSection";

// Intrinsic size of public/hero-placeholder.jpg. Passed to next/image so it
// knows the real aspect ratio; CSS then renders it at full width, auto height.
const HERO_W = 5508;
const HERO_H = 3072;

export default function Hero() {
  return (
    <section id="home">
      {/* z-10 keeps the copy above the image, which follows it in the DOM. */}
      <FadeInSection className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
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

      {/* The image slides up so its top sits behind the copy, and its own white
          sky fills the space around the text instead of leaving a hard gap.
          The offset is expressed in vw, not pixels, so the overlap stays the
          same share of the image at any viewport: the image is 100vw / 1.793
          ≈ 55.8vw tall, so 10vw ≈ 18% of its height. The image's sky runs
          13.7–46% deep depending on the column, so the roofline always stays
          clear of the headline, subtext and button. Smaller at < 768px, where
          the copy stacks and the sky band is proportionally shallower.
          Full-bleed and uncropped — no aspect container, no object-cover. */}
      <FadeInSection
        delay={0.1}
        className="full-bleed relative -mt-[6vw] md:-mt-[10vw]"
      >
        <Image
          src="/hero-placeholder.jpg"
          alt="Modern dark-clad residence at dusk"
          width={HERO_W}
          height={HERO_H}
          sizes="100vw"
          preload
          className="block w-full h-auto"
        />
      </FadeInSection>
    </section>
  );
}
