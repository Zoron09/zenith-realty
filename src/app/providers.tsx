"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * reducedMotion="user" makes Framer snap positional values (x, y, scale,
 * scaleY, …) for users who ask for reduced motion, while still animating
 * opacity — so components no longer branch on useReducedMotion() for that.
 * CSS transitions are handled separately by the media query in globals.css,
 * and the GSAP hero by gsap.matchMedia().
 */
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
