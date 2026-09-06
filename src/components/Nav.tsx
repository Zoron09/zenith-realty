"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown, List, X } from "@phosphor-icons/react/ssr";
import { PROPERTIES } from "@/lib/properties";

const EASE = [0.2, 0.7, 0.3, 1] as const;

const NAV_LINKS = [
  { href: "#mortgage", label: "Mortgage", badge: true },
  { href: "#company", label: "Company" },
  { href: "#careers", label: "Careers" },
  { href: "#blog", label: "Blog" },
];

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function NewBadge() {
  return (
    <span className="bg-brand-black text-[10px] text-white px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
      New
    </span>
  );
}

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
    <header className="glass-panel sticky top-0 z-50">
      <div className="max-w-wrap mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-semibold tracking-wider text-brand-black"
        >
          ZENITH REALTY
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
              className="flex items-center gap-1 py-2 transition-colors duration-300 hover:text-brand-black"
            >
              Properties
              <CaretDown
                className={`w-4 h-4 text-brand-black/60 transition-transform duration-300 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                weight="light"
                aria-hidden="true"
              />
            </button>

            <AnimatePresence>
              {dropdownOpen ? (
                <motion.div
                  id="properties-menu"
                  initial={{ opacity: 0, scaleY: 0.96, y: -4 }}
                  animate={{
                    opacity: 1,
                    scaleY: 1,
                    y: 0,
                    transition: { duration: 0.18, ease: EASE },
                  }}
                  exit={{
                    opacity: 0,
                    scaleY: 0.96,
                    y: -4,
                    transition: { duration: 0.12, ease: EASE },
                  }}
                  className="absolute left-0 top-full mt-1 w-48 origin-top bg-white border border-brand-border rounded-sm shadow-lg py-2"
                >
                  {PROPERTIES.map(({ name }) => (
                    <a
                      key={name}
                      href="#listings"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 transition-colors duration-200 hover:bg-brand-lightGray"
                    >
                      {name}
                    </a>
                  ))}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {NAV_LINKS.map(({ href, label, badge }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-brand-black"
            >
              {label}
              {badge ? <NewBadge /> : null}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#post-property"
            className="hidden sm:inline-block border border-brand-black px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-colors duration-300 hover:bg-brand-black hover:text-white"
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
            {mobileOpen ? (
              <X className="w-6 h-6" weight="light" aria-hidden="true" />
            ) : (
              <List className="w-6 h-6" weight="light" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            id="mobile-menu"
            ref={drawerRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 260, damping: 30 },
            }}
            exit={{ opacity: 0, y: -12, transition: { duration: 0.18 } }}
            className="md:hidden fixed inset-x-0 top-20 bg-white border-b border-brand-border p-6 flex flex-col space-y-4 shadow-xl"
          >
            <a
              href="#listings"
              onClick={() => setMobileOpen(false)}
              className="text-lg font-medium transition-colors duration-300 hover:text-brand-gray"
            >
              Properties
            </a>
            {NAV_LINKS.map(({ href, label, badge }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium flex items-center justify-between transition-colors duration-300 hover:text-brand-gray"
              >
                {label}
                {badge ? <NewBadge /> : null}
              </a>
            ))}
            <a
              href="#post-property"
              onClick={() => setMobileOpen(false)}
              className="inline-block border border-brand-black px-6 py-2.5 rounded-sm text-sm font-semibold tracking-wide text-center"
            >
              Post a property
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
