import { Phone, Mail } from "lucide-react";

export default function ContactDock() {
  return (
    <div className="fixed left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-2 p-2.5 bg-brand-black rounded-3xl shadow-[0_8px_32px_rgba(10,10,10,0.28)] z-50">
      <a
        href="tel:+61433850101"
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center transition-all duration-150 hover:scale-[1.15]"
      >
        <Phone className="w-5 h-5 text-white" strokeWidth={1.8} />
      </a>
      <a
        href="mailto:hello@mhdevelopments.com"
        aria-label="Email us"
        className="w-12 h-12 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center transition-all duration-150 hover:scale-[1.15]"
      >
        <Mail className="w-5 h-5 text-white" strokeWidth={1.8} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5a623] via-[#e1306c] to-[#5851db] flex items-center justify-center transition-transform duration-150 hover:scale-[1.15]"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="#FFFFFF" />
        </svg>
      </a>
    </div>
  );
}
