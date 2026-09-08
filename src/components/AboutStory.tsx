import Image from "next/image";
import FadeInSection from "./FadeInSection";

export default function AboutStory() {
  return (
    <FadeInSection className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,400px)] gap-x-8">
      <div className="pt-16 px-6 md:px-14 pb-12 flex flex-col justify-center">
        <h1 className="m-0 mb-4 text-[clamp(32px,4vw,54px)] font-semibold tracking-[-1.6px] leading-[1.1] max-w-[560px]">
          Building spaces people belong in.
        </h1>
        <p className="m-0 mb-6 text-[17px] text-brand-gray leading-[1.6] max-w-[560px]">
          We plan, build and deliver house-and-land developments across NSW,
          run by people who know the ground they&apos;re building on.
        </p>
        <div className="border-t border-brand-border pt-6 max-w-[560px]">
          {/* Placeholder copy — pending the founder's final story */}
          <div className="text-[13px] font-semibold text-brand-gray mb-4">
            Placeholder copy — pending the founder&apos;s final story.
          </div>
          <div className="flex flex-col gap-3 text-base text-brand-black leading-[1.7]">
            <p className="m-0">
              M&amp;H Developments started with years on the ground in local
              real estate before ever picking up a hammer.
            </p>
            <p className="m-0">
              Our founder worked his way through the industry — sales, then
              site management — before building under his own name and his
              own standards.
            </p>
          </div>
          {/* [Founder Name] placeholder — pending the founder's final bio */}
          <div className="mt-4 text-sm font-semibold text-brand-black">
            [Founder Name]{" "}
            <span className="font-medium text-brand-gray">
              — Founder &amp; Director
            </span>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full min-h-[520px]">
        <Image
          src="/founder-photo.jpg"
          alt="[Founder Name] — Founder & Director"
          fill
          className="object-cover"
        />
      </div>
    </FadeInSection>
  );
}
