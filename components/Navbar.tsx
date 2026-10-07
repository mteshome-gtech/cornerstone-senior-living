"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Our Home", href: "/our-home" },
  { label: "Life", href: "/life-at-corner-stone" },
  { label: "Care", href: "/care" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`site-header ${
          scrolled ? "site-header--scrolled" : ""
        }`}
      >
        <div className="container nav">
          <Link
            href="/"
            className="nav__brand"
            onClick={() => setOpen(false)}
            aria-label="Corner Stone Senior Living home"
          >
            Corner Stone
          </Link>

          <nav className="nav__links" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav__link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav__action">
            <Link href="/contact" className="button button--light">
              Private Visit
            </Link>
          </div>

          <button
            type="button"
            className="nav__mobile-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            <span
              aria-hidden="true"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: "18px",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "100%",
                  height: "1px",
                  background: "currentColor",
                  transform: open
                    ? "translateY(3px) rotate(45deg)"
                    : "none",
                  transition: "transform 220ms ease",
                }}
              />

              <span
                style={{
                  display: "block",
                  width: "100%",
                  height: "1px",
                  background: "currentColor",
                  opacity: open ? 0 : 1,
                  transition: "opacity 180ms ease",
                }}
              />

              <span
                style={{
                  display: "block",
                  width: "100%",
                  height: "1px",
                  background: "currentColor",
                  transform: open
                    ? "translateY(-3px) rotate(-45deg)"
                    : "none",
                  transition: "transform 220ms ease",
                }}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`mobile-menu ${
          open ? "mobile-menu--open" : ""
        }`}
      >
        <div className="mobile-menu__inner">
          <nav
            className="mobile-menu__nav"
            aria-label="Mobile navigation"
          >
            {links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-menu__link"
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open
                    ? `${index * 45}ms`
                    : "0ms",
                }}
              >
                <span className="mobile-menu__number">
                  0{index + 1}
                </span>

                <span>{link.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-menu__footer">
            <div>
              <span className="eyebrow">Corner Stone</span>

              <p>
                The comfort of home.
                <br />
                The quality of exceptional care.
              </p>
            </div>

            <Link
              href="/contact"
              className="button button--light"
              onClick={() => setOpen(false)}
            >
              Request a Private Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}