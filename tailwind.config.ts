import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Radius and shadow are overridden (not extended) so the ad hoc Tailwind
    // steps — md / xl / 2xl / 3xl — no longer exist and cannot creep back in.
    borderRadius: {
      sm: "8px", // buttons, spec tiles, badges, small surfaces
      lg: "16px", // cards, images, hero container, panels
      full: "9999px", // reserved for the "New" pill in Nav — nothing else
    },
    // Tinted toward brand.black (#0A0A0A) instead of Tailwind's pure black.
    boxShadow: {
      sm: "0 1px 2px rgba(10, 10, 10, 0.05), 0 1px 1px rgba(10, 10, 10, 0.04)",
      md: "0 4px 12px rgba(10, 10, 10, 0.08)",
      lg: "0 12px 28px -8px rgba(10, 10, 10, 0.12), 0 4px 10px -6px rgba(10, 10, 10, 0.08)",
      xl: "0 24px 48px -24px rgba(10, 10, 10, 0.2), 0 8px 16px -12px rgba(10, 10, 10, 0.1)",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0A0A0A",
          gray: "#5E6670",
          lightGray: "#F7F8F9",
          border: "#E3E5E8",
          // Brass. Two placements only: the hero CTA and the future form
          // submit. accentDeep is the hover shade for those same two buttons.
          accent: "#A16207",
          accentDeep: "#7C4A08",
        },
      },
      maxWidth: {
        wrap: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
