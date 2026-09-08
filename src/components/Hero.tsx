"use client";

import { useEffect, useRef } from "react";
import FadeInSection from "./FadeInSection";

// The video's own aspect ratio is unreliable to crop safely at every frame
// size, so the design canvas locks it to this "safe" ratio and lets
// object-cover crop within that box instead of the raw frame.
const SAFE_ASPECT = 3840 / 1858;

export default function Hero() {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const video = videoRef.current;
    if (!frame || !video) return;

    const fit = () => {
      const fw = frame.clientWidth;
      const fh = frame.clientHeight;
      if (!fw || !fh) return;
      if (fw / fh > SAFE_ASPECT) {
        video.style.height = "100%";
        video.style.width = `${Math.ceil(fh * SAFE_ASPECT)}px`;
      } else {
        video.style.width = "100%";
        video.style.height = `${Math.ceil(fw / SAFE_ASPECT)}px`;
      }
    };

    video.play().catch(() => {});
    fit();

    const ro = new ResizeObserver(() => requestAnimationFrame(fit));
    ro.observe(frame);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <>
      <FadeInSection
        className="relative z-10 flex flex-col items-start gap-6 px-6 md:px-12 pt-12 pb-6 shrink-0"
        style={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <h1 className="m-0 text-[clamp(32px,4.2vw,64px)] font-semibold tracking-[-1.8px] leading-[1.1]">
          Discover space you truly belong in
        </h1>
        <a
          href="#contact"
          className="bg-brand-black text-white text-xs font-extrabold tracking-[1.2px] uppercase px-6 py-[17px] hover:bg-brand-gray transition-colors duration-300"
        >
          BOOK A CALL
        </a>
      </FadeInSection>

      <div
        ref={frameRef}
        className="relative z-0 -mt-12 flex-1 min-h-[320px] overflow-hidden bg-white flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          poster="/hero-poster.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Black car arriving at a modern dark-clad residence at dusk"
          className="block object-cover object-[50%_100%] bg-white"
        />
      </div>
    </>
  );
}
