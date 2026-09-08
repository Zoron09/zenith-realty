import FadeInSection from "./FadeInSection";

export default function CtaBanner() {
  return (
    <section className="pt-16 px-6 md:px-12 pb-24">
      <FadeInSection className="bg-brand-black text-white py-14 px-6 md:px-12 flex flex-wrap items-center justify-between gap-6 max-w-[1160px] mx-auto">
        <div>
          <h2 className="m-0 mb-2 text-[clamp(22px,2.4vw,30px)] font-medium tracking-[-0.5px]">
            Want to talk about a project?
          </h2>
          <p className="m-0 text-[15px] text-white/60">
            Tell us what you&apos;re planning and we&apos;ll follow up within
            one business day.
          </p>
        </div>
        <a
          href="/#contact"
          className="shrink-0 inline-block bg-white text-brand-black text-xs font-extrabold tracking-[1.2px] uppercase px-6 py-[17px] hover:bg-white/85 transition-colors duration-300"
        >
          BOOK A CALL
        </a>
      </FadeInSection>
    </section>
  );
}
