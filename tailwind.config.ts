import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
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
