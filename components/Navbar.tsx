"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Our Home", href: "/our-home" },
  { label: "Life", href: "/life-at-corner-stone" },
  { label: "Care", href: "/care" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[rgba(28,41,36,0.12)] bg-[#f4f1eb]/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[82px] w-[min(100%-48px,1440px)] items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <div className="flex flex-col">
              <span className="font-serif text-[19px] leading-none tracking-[-0.02em]">
                Corner Stone
              </span>

              <span className="mt-[6px] text-[8px] font-semibold uppercase tracking-[0.24em] opacity-60">
                Senior Living
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden border border-[#1c2924] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:bg-[#1c2924] hover:text-[#f4f1eb] lg:inline-flex"
          >
            Private Visit
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-current transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#26352f] text-[#f4f1eb] transition-all duration-500 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-8 pb-10 pt-[130px]">
          <nav className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/15 py-5 font-serif text-[clamp(2.1rem,9vw,3.5rem)] leading-none tracking-[-0.03em]"
                style={{
                  transitionDelay: menuOpen ? `${index * 45}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/15 pt-6">
            <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] opacity-50">
              Begin a conversation
            </p>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex border border-[#f4f1eb] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.16em]"
            >
              Request a Private Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}