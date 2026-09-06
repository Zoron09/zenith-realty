"use client";

import { Children, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 0.61, 0.36, 1] as const;
const HIDDEN = { opacity: 0, y: 20 };
const SHOWN = { opacity: 1, y: 0 };
const TRANSITION = { duration: 0.5, ease: EASE };

// MotionConfig reducedMotion="user" (providers.tsx) snaps y for us; stagger is
// orchestration rather than a positional value, so it still needs a branch.
export default function FadeInSection({
  children,
  className,
  delay = 0,
  /** Seconds between each direct child. Omit for a single block reveal. */
  stagger,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (stagger) {
    return (
      <motion.div
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          shown: {
            transition: {
              delayChildren: delay,
              staggerChildren: prefersReducedMotion ? 0 : stagger,
            },
          },
        }}
        className={className}
      >
        {Children.map(children, (child) => (
          <motion.div
            variants={{ hidden: HIDDEN, shown: SHOWN }}
            transition={TRANSITION}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={HIDDEN}
      whileInView={SHOWN}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...TRANSITION, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
