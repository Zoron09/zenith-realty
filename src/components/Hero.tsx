"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroMedia from "./HeroMedia";
import FadeInSection from "./FadeInSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Letterboxed start ≈ 60% of the full frame, centred.
const LETTERBOXED = "inset(18% 20% 18% 20% round 16px)";
const FULL_BLEED = "inset(0% 0% 0% 0% round 0px)";

export default function Hero() {
  const pinRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Only registered under no-preference. Under prefers-reduced-motion the
    // timeline never builds, and the resting markup is already the expanded
    // end state — full bleed, unscaled, caption visible — so nothing to undo.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=130%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          // Hold the compositing layers only for the pinned window instead of
          // retaining two full-viewport GPU textures for the life of the page.
          onToggle: ({ isActive }) => {
            gsap.set([frameRef.current, mediaRef.current], {
              willChange: isActive ? "transform, clip-path" : "auto",
            });
          },
        },
      });

      tl.fromTo(
        frameRef.current,
        { clipPath: LETTERBOXED },
        { clipPath: FULL_BLEED, ease: "power2.out", duration: 0.6 },
        0,
      )
        .fromTo(
          mediaRef.current,
          { scale: 1.12 },
          { scale: 1, ease: "power2.out", duration: 0.6 },
          0,
        )
        .fromTo(
          captionRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, ease: "power2.out", duration: 0.25 },
          0.5,
        );
    });

    // Web fonts land after first paint and change the pinned block's height.
    // ScrollTrigger's autoRefreshEvents don't cover font loading.
    document.fonts.ready.then(() => ScrollTrigger.refresh());

    return () => mm.revert();
  });

  return (
    <section id="home" className="space-y-12">
      <FadeInSection className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
        <div className="lg:col-span-7 space-y-8">
          <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-brand-black leading-[1.1] max-w-[650px]">
            <AnimatedHeadline text="Discover space you truly belong in" />
          </h1>
          <div>
            <a
              href="#contact"
              className="inline-block bg-brand-accent text-white text-sm font-semibold tracking-wide rounded-sm px-8 py-4 shadow-md transition-colors duration-300 hover:bg-brand-accentDeep"
            >
              Book a call
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 lg:pt-4">
          <p className="text-lg md:text-xl text-brand-gray leading-relaxed">
            Experience more than a house; find a sanctuary where your journey
            unfolds, rich with comfort and endless opportunities.
          </p>
        </div>
      </FadeInSection>

      {/* Aperture: pinned for ~130vh while the frame opens to full bleed. */}
      <div
        ref={pinRef}
        className="full-bleed relative h-[100svh] min-h-[420px] overflow-hidden"
      >
        <div ref={frameRef} className="absolute inset-0 overflow-hidden">
          <div ref={mediaRef} className="absolute inset-0">
            <HeroMedia
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80"
              alt="Zenith Luxury Dusk Villa"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div
            ref={captionRef}
            className="absolute bottom-8 left-6 md:left-12 text-white space-y-1"
          >
            <span className="text-xs uppercase tracking-widest font-bold opacity-80">
              Featured Residence
            </span>
            <h2 className="text-xl md:text-3xl font-medium">
              The Obsidian Meridian — Sunset Villa
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
