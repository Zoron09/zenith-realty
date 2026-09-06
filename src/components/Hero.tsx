import FadeInSection from "./FadeInSection";

// Poster frame: the still that previously filled this slot, so there is a
// sensible first paint while the video buffers.
const HERO_POSTER =
  "https://images.unsplash.com/photo-1679364297777-1db77b6199be?auto=format&fit=crop&w=2000&q=80";

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

      {/* Full-bleed, square corners, no shadow — see design.md §4. */}
      <FadeInSection
        delay={0.1}
        className="full-bleed relative aspect-[21/9] min-h-[300px] md:min-h-[500px] overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/Cover%20Video.mp4"
          poster={HERO_POSTER}
          aria-label="Zenith Luxury Dusk Villa"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12 text-white space-y-1">
          <span className="text-xs uppercase tracking-widest font-semibold opacity-80">
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
