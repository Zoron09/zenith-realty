"use client";

import { useState, type FormEvent } from "react";
import FadeInSection from "./FadeInSection";
import { useCountUpOnView } from "@/hooks/useCountUpOnView";
import { METRICS } from "@/data/metrics";

export default function FindYourNextHome() {
  const { counts, ref: metricsRef } = useCountUpOnView(METRICS.map((m) => m.target));
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="pt-24 px-6 md:px-12">
      <FadeInSection className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_minmax(360px,1.05fr)] gap-16 items-center">
        <div>
          <div>
            <h2 className="m-0 mb-3 text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.15]">
              Let&apos;s find your next home
            </h2>
            <p className="m-0 mb-10 text-base text-brand-gray leading-[1.62] max-w-[440px]">
              Tell us what you&apos;re looking for and a member of our team
              will follow up within one business day.
            </p>
          </div>
          <div
            ref={metricsRef}
            className="grid grid-cols-2 gap-x-8 gap-y-7 max-w-[440px]"
          >
            {METRICS.map((m, i) => (
              <div key={m.label}>
                <div className="text-4xl font-bold tracking-[-1px]">
                  {counts[i]}
                  {m.suffix}
                </div>
                <div className="text-sm font-medium text-brand-gray mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-lightGray rounded-[20px] p-8">
          {submitted ? (
            <div className="h-full flex flex-col items-start justify-center gap-2">
              <div className="text-[22px] font-bold">
                Thanks — we&apos;ve got it.
              </div>
              <p className="m-0 text-[15px] text-brand-gray">
                A member of our team will reach out within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-4"
            >
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-semibold leading-none">
                  Full Name <span className="text-[#C0392B]">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full h-10 box-border px-3.5 border border-brand-border rounded-lg text-[15px] font-[inherit] bg-white outline-none focus:border-brand-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-semibold leading-none">
                  Phone <span className="text-[#C0392B]">*</span>
                </label>
                <input
                  required
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full h-10 box-border px-3.5 border border-brand-border rounded-lg text-[15px] font-[inherit] bg-white outline-none focus:border-brand-black"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-semibold leading-none">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  className="w-full h-10 box-border px-3.5 border border-brand-border rounded-lg text-[15px] font-[inherit] bg-white outline-none focus:border-brand-black"
                />
              </div>
              <div className="col-span-full flex flex-col gap-2">
                <label className="block text-sm font-semibold leading-none">
                  I&apos;m interested in
                </label>
                <div className="relative">
                  <select className="w-full h-10 box-border pl-3.5 pr-10 border border-brand-border rounded-lg text-[15px] font-[inherit] bg-white outline-none focus:border-brand-black appearance-none">
                    <option value="">Select an option</option>
                    <option value="buying">Buying a home</option>
                    <option value="selling">Selling a home</option>
                    <option value="construction">
                      Construction / building
                    </option>
                    <option value="mortgage">Mortgage &amp; financing</option>
                  </select>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="#5E6670"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-xs text-brand-gray">
                  This is an optional field
                </div>
              </div>
              <div className="col-span-full flex items-center gap-2">
                <input
                  type="checkbox"
                  id="newsletter"
                  className="w-4 h-4 accent-brand-black"
                />
                <label
                  htmlFor="newsletter"
                  className="text-sm font-medium cursor-pointer whitespace-nowrap"
                >
                  Subscribe to newsletter
                </label>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="col-span-full mt-0.5 h-11 bg-brand-black text-white border-0 px-6 text-[13px] font-extrabold tracking-wide rounded-lg disabled:opacity-60"
              >
                {submitting ? "SUBMITTING..." : "REQUEST A CALLBACK"}
              </button>
            </form>
          )}
        </div>
      </FadeInSection>
    </section>
  );
}
