"use client";

import { useEffect, useRef, useState } from "react";

// Extracted from FindYourNextHome.tsx so the About page's metrics section can
// reuse the same count-up-on-scroll behavior instead of reimplementing it.
export function useCountUpOnView(targets: number[], durationMs = 1400) {
  const [counts, setCounts] = useState(() => targets.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const eased = 1 - Math.pow(1 - t, 3);
        setCounts(targets.map((v) => Math.round(v * eased)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(node);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { counts, ref };
}
