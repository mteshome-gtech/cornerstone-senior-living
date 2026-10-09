import Link from "next/link";

const exploreLinks = [
  { label: "Our Home", href: "/our-home" },
  { label: "Life at Corner Stone", href: "/life-at-corner-stone" },
  { label: "Care", href: "/care" },
  { label: "Our Story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="eyebrow">Corner Stone Senior Living</span>

            <h2 className="footer__brand-name">
              The comfort of home.
            </h2>

            <p className="footer__tagline">
              The quality of exceptional care.
            </p>

            <p className="footer__description">
              A residential approach to senior living, designed around
              comfort, dignity, connection, and exceptional care.
            </p>
          </div>

          <div>
            <span className="footer__heading">Explore</span>

            <nav className="footer__links" aria-label="Footer navigation">
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="footer__link"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <span className="footer__heading">Visit</span>

            <div className="footer__visit">
              <p>Corner Stone Senior Living</p>
              <p>Allen, Texas</p>
              <p>By private appointment</p>
            </div>

            <Link href="/contact" className="footer__visit-link">
              Plan a Private Visit
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p>@2026 Corner Stone Senior Living</p>

          <p>Residential by design.</p>
        </div>
      </div>
    </footer>
  );
}