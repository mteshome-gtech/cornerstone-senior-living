import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

interface HeroProps {
  image: string;
}

export default function Hero({ image }: HeroProps) {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#24221f]">
      <Image
        src={image}
        alt="Corner Stone Senior Living home"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="image-overlay absolute inset-0" />

      <div className="relative z-10 container-luxury pb-24 pt-40 text-white">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#d8c5a0]">
            Family-Owned Senior Living · Allen, Texas
          </p>

          <h1 className="serif text-5xl leading-[0.95] md:text-7xl lg:text-[92px]">
            Where Care
            <br />
            Feels Like Family.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/75 md:text-lg">
            A beautiful residential home where thoughtful care, meaningful
            connection, and everyday comfort come together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#b49a6a] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#24221f]"
            >
              Schedule a Private Visit
              <ArrowDownRight size={16} />
            </Link>

            <Link
              href="/our-home"
              className="rounded-full border border-white/35 px-7 py-4 text-xs uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-[#24221f]"
            >
              Discover Our Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}