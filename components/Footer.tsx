import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#24221f] text-white">
      <div className="container-luxury py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="serif text-3xl">Corner Stone</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/50">
              Senior Living
            </div>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              The comfort of home. The quality of exceptional care.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#b49a6a]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
              <Link href="/our-home">Our Home</Link>
              <Link href="/life-at-corner-stone">Life at Corner Stone</Link>
              <Link href="/care">Care</Link>
              <Link href="/about">Our Story</Link>
              <Link href="/gallery">Gallery</Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#b49a6a]">
              Visit
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/65">
              Allen, Texas
              <br />
              By private appointment
            </p>

            <Link
              href="/contact"
              className="mt-5 inline-block text-sm text-white underline underline-offset-8"
            >
              Schedule a private visit
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-xs text-white/35">
          © {new Date().getFullYear()} Corner Stone Senior Living. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}