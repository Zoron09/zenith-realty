"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import type { FormEvent } from "react";

const COMPANY_LINKS = [
  { label: "Properties", href: "#", comingSoon: true },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "#" },
];
const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center transition-colors"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
  };

  return (
    <footer className="mt-24 bg-brand-black text-white/70 px-6 md:px-12 pt-12 pb-8">
      <div className="max-w-wrap mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 pb-10">
          <div>
            <Image
              src="/logo.png"
              alt="M&H Developments"
              width={616}
              height={276}
              className="h-7 w-auto invert mb-4"
            />
            <p className="m-0 text-sm leading-relaxed max-w-[280px] text-white/55">
              Helping you find space you truly belong in.
            </p>
            <div className="flex gap-3 mt-4">
              <SocialLink href="https://instagram.com" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FFFFFF" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="#FFFFFF" strokeWidth="1.8" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
                </svg>
              </SocialLink>
              <SocialLink href="mailto:hello@mhdevelopments.com" label="Email">
                <Mail className="w-4 h-4 text-white" strokeWidth={1.8} />
              </SocialLink>
              <SocialLink href="tel:+61433850101" label="Phone">
                <Phone className="w-4 h-4 text-white" strokeWidth={1.8} />
              </SocialLink>
            </div>
          </div>

          <div>
            <div className="text-[13px] font-bold tracking-wide text-white/90 mb-4">
              Company
            </div>
            <div className="flex flex-col gap-3 text-sm">
              {COMPANY_LINKS.map(({ label, href, comingSoon }) =>
                comingSoon ? (
                  <span key={label} className="flex items-center gap-1.5 cursor-default text-white/60">
                    {label}
                    <span className="bg-white text-brand-black text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-[7px]">
                      SOON
                    </span>
                  </span>
                ) : (
                  <a
                    key={label}
                    href={href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                )
              )}
            </div>
          </div>

          <div>
            <div className="text-[13px] font-bold tracking-wide text-white/90 mb-4">
              Legal
            </div>
            <div className="flex flex-col gap-3 text-sm">
              {LEGAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[13px] font-bold tracking-wide text-white/90 mb-4">
              Stay in the loop
            </div>
            <p className="m-0 mb-4 text-sm text-white/55 leading-snug">
              New listings and updates, straight to your inbox.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-wrap gap-2"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="flex-1 min-w-[140px] h-11 box-border px-3.5 border border-white/15 rounded-lg text-sm font-[inherit] bg-white/[0.06] text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                className="shrink-0 h-11 px-5 bg-white text-brand-black border-0 rounded-lg text-[13px] font-extrabold tracking-wide"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-[13px] text-white/45">
          <p>© 2026 M&amp;H Developments. All rights reserved.</p>
          {/* Placeholder pending the actual agent name and NSW license number */}
          <p className="mt-1">
            Licensed Real Estate Agent — [PLACEHOLDER NAME] — NSW Licence No. PENDING
          </p>
        </div>
      </div>
    </footer>
  );
}
