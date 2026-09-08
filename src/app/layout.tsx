import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ParticleField from "@/components/ParticleField";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zenith Realty — Luxury Residences",
  description:
    "Discover space you truly belong in. Curated luxury residences by Zenith Realty.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-white text-brand-black font-sans antialiased">
        <ParticleField />
        {children}
      </body>
    </html>
  );
}
