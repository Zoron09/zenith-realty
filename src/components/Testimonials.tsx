"use client";

import { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    designation: "Homeowner, Aether Heights",
    quote:
      "M&H Developments found us a home that felt right the moment we walked in. The whole process, from first call to closing, was seamless.",
    image: "/testimonial-1.jpg",
  },
  {
    name: "Rajwinder Singh",
    designation: "Homeowner, Azure Sanctuary",
    quote:
      "We were looking for more than a property, we wanted a place that matched how we live. Our agent understood that from day one.",
    image: "/testimonial-2.jpg",
  },
  {
    name: "Amara Okafor",
    designation: "Homeowner, Summit Pavilion",
    quote:
      "Every detail of the mortgage and closing process was handled with care. We never felt like just another transaction.",
    image: "/testimonial-3.jpg",
  },
  {
    name: "Diego Martinez",
    designation: "First-time buyer",
    quote:
      "I didn't know where to start with buying a home. The team walked me through every step and found exactly what I needed.",
    image: "/testimonial-4.jpg",
  },
  {
    name: "Priya Nair",
    designation: "Homeowner, Malibu",
    quote:
      "The design and quality of the properties they showed us were on another level. We knew instantly which one was ours.",
    image: "/testimonial-5.jpg",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  const prev = () =>
    setActive((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section className="pt-24 px-6 md:px-12">
      <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full max-w-[280px] aspect-[233/256] mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="absolute inset-0 transition-[opacity,transform] duration-[400ms] ease-out"
              style={{
                opacity: i === active ? 1 : 0,
                transform:
                  i === active
                    ? "scale(1) rotate(0deg)"
                    : "scale(0.96) rotate(-3deg)",
                zIndex: i === active ? 2 : 1,
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-brand-lightGray">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="m-0 text-2xl font-bold">{current.name}</h3>
          <p className="m-0 mt-1 text-sm font-medium text-brand-gray">
            {current.designation}
          </p>
          <p className="mt-8 text-lg text-brand-gray leading-relaxed">
            {current.quote}
          </p>
          <div className="flex gap-3 mt-12">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border-0 bg-brand-lightGray hover:bg-[#EFEFF1] flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border-0 bg-brand-lightGray hover:bg-[#EFEFF1] flex items-center justify-center transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
