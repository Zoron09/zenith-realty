import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  // 800 removed — no element in the design sets heavier than 700.
  weight: ["400", "500", "600", "700"],
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
      {/* Background, text colour and font stack come from globals.css / preflight. */}
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
