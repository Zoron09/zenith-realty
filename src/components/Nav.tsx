"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

const PROPERTIES = ["Aether Heights", "Azure Sanctuary", "Summit Pavilion"];

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Escape closes whichever surface is open and returns focus to its trigger.
  useEffect(() => {
    if (!dropdownOpen && !mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (dropdownOpen) {
        setDropdownOpen(false);
        dropdownTriggerRef.current?.focus();
      }
      if (mobileOpen) {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [dropdownOpen, mobileOpen]);

  // Pointer press outside the dropdown closes it.
  useEffect(() => {
    if (!dropdownOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [dropdownOpen]);

  // Focus trap for the mobile drawer.
  useEffect(() => {
    if (!mobileOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const items = () =>
      Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      );

    items()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusable = items();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || !drawer.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    drawer.addEventListener("keydown", onKeyDown);
    return () => drawer.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border/50">
      <div className="max-w-wrap mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="M&H Developments"
            width={637}
            height={290}
            className="h-10 w-auto"
            preload
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-brand-black/80">
          <div
            ref={dropdownRef}
            className="relative"
            // Opening on focus-within keeps the menu reachable by keyboard.
            onFocus={() => setDropdownOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                setDropdownOpen(false);
              }
            }}
          >
            <button
              ref={dropdownTriggerRef}
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              aria-controls="properties-menu"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:text-brand-black transition-colors py-2"
            >
              Properties
              <ChevronDown
                className={`w-4 h-4 text-brand-black/60 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <div
                id="properties-menu"
                className="absolute left-0 top-full mt-1 w-48 bg-white border border-brand-border rounded-lg shadow-lg py-2"
              >
                {PROPERTIES.map((name) => (
                  <a
                    key={name}
                    href="#listings"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-brand-lightGray transition-colors"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#mortgage" className="flex items-center gap-2 hover:text-brand-black transition-colors">
            Mortgage
            <span className="bg-brand-black text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              New
            </span>
          </a>
          <a href="#company" className="hover:text-brand-black transition-colors">
            Company
          </a>
          <a href="#careers" className="hover:text-brand-black transition-colors">
            Careers
          </a>
          <a href="#blog" className="hover:text-brand-black transition-colors">
            Blog
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#post-property"
            className="inline-block border border-brand-black px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-brand-black hover:text-white transition-all duration-300"
          >
            Post a property
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="md:hidden p-2 text-brand-black"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          ref={drawerRef}
          className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-brand-border p-6 flex flex-col space-y-4 shadow-xl"
        >
          <a
            href="#listings"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium hover:text-brand-gray transition-colors"
          >
            Properties
          </a>
          <a
            href="#mortgage"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium flex items-center justify-between hover:text-brand-gray transition-colors"
          >
            Mortgage
            <span className="bg-brand-black text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase">
              New
            </span>
          </a>
          <a
            href="#company"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium hover:text-brand-gray transition-colors"
          >
            Company
          </a>
          <a
            href="#careers"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium hover:text-brand-gray transition-colors"
          >
            Careers
          </a>
          <a
            href="#blog"
            onClick={() => setMobileOpen(false)}
            className="text-lg font-medium hover:text-brand-gray transition-colors"
          >
            Blog
          </a>
          <a
            href="#post-property"
            onClick={() => setMobileOpen(false)}
            className="inline-block border border-brand-black px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide text-center"
          >
            Post a property
          </a>
        </div>
      )}
    </header>
  );
}
