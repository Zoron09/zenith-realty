import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border/50">
      <div className="max-w-wrap mx-auto px-6 md:px-12 h-20 flex items-center gap-14">
        <a href="#home" className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="M&H Developments"
            width={616}
            height={276}
            className="h-8 w-auto"
            preload
          />
        </a>

        <nav className="hidden min-[860px]:flex items-center gap-10 text-[15px] font-extrabold text-brand-black/80 whitespace-nowrap">
          <span className="flex items-center gap-1.5 cursor-default">
            Properties
            <span className="bg-brand-black text-white text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-[7px]">
              SOON
            </span>
          </span>
          <a href="/about" className="hover:text-brand-black transition-colors">
            About Us
          </a>
          <span className="flex items-center gap-1.5 cursor-default">
            Blog
            <span className="bg-brand-black text-white text-[10px] font-bold tracking-wide px-2 py-0.5 rounded-[7px]">
              SOON
            </span>
          </span>
        </nav>
      </div>
    </header>
  );
}
