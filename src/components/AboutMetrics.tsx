"use client";

import { METRICS } from "@/data/metrics";
import { useCountUpOnView } from "@/hooks/useCountUpOnView";

export default function AboutMetrics() {
  const { counts, ref: metricsRef } = useCountUpOnView(
    METRICS.map((m) => m.target),
  );

  return (
    <section className="py-14 px-6 md:px-12 border-t border-b border-brand-border">
      <div
        ref={metricsRef}
        className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-8 max-w-[960px] mx-auto"
      >
        {METRICS.map((m, i) => (
          <div key={m.label} className="border-l border-brand-border pl-6">
            <div className="text-[40px] font-bold tracking-[-1px]">
              {counts[i]}
              {m.suffix}
            </div>
            <div className="text-sm font-medium text-brand-gray mt-1">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
