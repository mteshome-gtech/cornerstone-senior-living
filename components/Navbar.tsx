"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Our Home", href: "/our-home" },
  { label: "Life", href: "/life-at-corner-stone" },
  { label: "Care", href: "/care" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/20 bg-[#24221f]/75 backdrop-blur-xl">
      <div className="container-luxury flex h-20 items-center justify-between">
        <Link href="/" className="text-white">
          <div className="serif text-xl tracking-wide">
            Corner Stone
          </div>
          <div className="text-[9px] uppercase tracking-[0.3em] text-white/65">
            Senior Living
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/80 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="rounded-full border border-[#b49a6a] bg-[#b49a6a] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-transparent"
          >
            Schedule a Visit
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#24221f] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white/80"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#b49a6a] px-5 py-3 text-center text-xs uppercase tracking-[0.15em] text-white"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}