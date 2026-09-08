"use client";

import { useRef } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const SERVICES = [
  {
    category: "Build",
    title: "Construction",
    image: "/service-construction.jpg",
  },
  {
    category: "Buy & Sell",
    title: "Home Sales",
    image: "/service-sales.jpg",
  },
  {
    category: "Represent",
    title: "Realty & Brokerage",
    image: "/service-realty.jpg",
  },
  {
    category: "Finance",
    title: "Mortgage & Financing",
    image: "/service-mortgage.jpg",
  },
  {
    category: "Manage",
    title: "Property Management",
    image: "/service-management.jpg",
  },
  {
    category: "Plan",
    title: "Design & Architecture",
    image: "/service-design.jpg",
  },
];

export default function ServicesScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) =>
    scrollRef.current?.scrollBy({ left: delta, behavior: "smooth" });

  return (
    <section className="pt-24">
      <FadeInSection>
        <h2 className="m-0 mb-8 px-6 md:px-12 text-[clamp(28px,3.6vw,48px)] font-medium leading-tight">
          What we do
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-6 md:px-12 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="relative shrink-0 w-[300px] h-[400px] rounded-[22px] p-0.5 overflow-hidden bg-brand-lightGray"
              >
                <div className="absolute -inset-1/2 bg-[conic-gradient(#A07CFE,#FE8FB5,#FFBE7B,#A07CFE)] animate-[shine-spin_4s_linear_infinite]" />
                <div className="absolute inset-[2px] rounded-[20px] overflow-hidden bg-brand-lightGray">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent to-45%" />
                  <div className="absolute left-6 top-6 right-6">
                    <div className="text-[13px] font-semibold text-white/85">
                      {s.category}
                    </div>
                    <div className="text-[23px] font-bold text-white mt-1.5 leading-tight">
                      {s.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 px-6 md:px-12 pt-4 justify-end">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border-0 bg-brand-lightGray hover:bg-[#EFEFF1] flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border-0 bg-brand-lightGray hover:bg-[#EFEFF1] flex items-center justify-center transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
