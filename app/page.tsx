import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero image="/assets/home/hero.jpg" />

      {/* INTRO */}
      <section className="bg-[#f7f4ee] py-28 md:py-36">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
              A Different Kind of Senior Living
            </p>
          </div>

          <div>
            <h2 className="serif text-4xl leading-tight md:text-6xl">
              More than a place to live.
              <br />
              It is home.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-black/60">
              Corner Stone Senior Living was created around a simple belief:
              senior living should feel personal. Our residential approach
              creates an environment where residents can enjoy the comfort of
              home while receiving thoughtful, individualized support.
            </p>

            <Link
              href="/our-home"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#b49a6a] pb-2 text-xs uppercase tracking-[0.18em]"
            >
              Explore Our Home
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="relative min-h-[75vh] overflow-hidden">
        <Image
          src="/assets/home/home-01.jpg"
          alt="Corner Stone Senior Living"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#211c17]/80 via-[#211c17]/25 to-transparent" />

        <div className="relative z-10 flex min-h-[75vh] items-end">
          <div className="container-luxury pb-20 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
              Thoughtful Living
            </p>

            <h2 className="serif mt-5 max-w-2xl text-5xl leading-tight md:text-7xl">
              Everyday moments,
              <br />
              made meaningful.
            </h2>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-[#eee8dc] py-28">
        <div className="container-luxury">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
              The Corner Stone Approach
            </p>

            <h2 className="serif mt-5 text-4xl md:text-6xl">
              Designed around people, not processes.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-black/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Life",
                text: "A warm residential environment designed to make everyday living feel comfortable, familiar, and beautiful.",
                href: "/life-at-corner-stone",
              },
              {
                number: "02",
                title: "Care",
                text: "Thoughtful support centered around each resident as an individual, with dignity and respect at the heart of the experience.",
                href: "/care",
              },
              {
                number: "03",
                title: "Family",
                text: "A family-owned community where relationships matter and communication remains personal.",
                href: "/about",
              },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.number}
                className="group bg-[#f7f4ee] p-9 transition hover:bg-[#24221f] hover:text-white md:p-12"
              >
                <div className="text-xs tracking-[0.2em] text-[#b49a6a]">
                  {item.number}
                </div>

                <h3 className="serif mt-16 text-4xl">{item.title}</h3>

                <p className="mt-5 text-sm leading-7 opacity-60">
                  {item.text}
                </p>

                <div className="mt-10 text-xs uppercase tracking-[0.2em] opacity-50">
                  Discover →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY STORY */}
      <section className="bg-[#f7f4ee] py-28 md:py-36">
        <div className="container-luxury grid items-center gap-16 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/assets/home/home-02.jpg"
              alt="Corner Stone residential home"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
              Family-Owned. Personal by Nature.
            </p>

            <h2 className="serif mt-5 text-4xl leading-tight md:text-6xl">
              Built around family.
            </h2>

            <p className="mt-8 text-base leading-8 text-black/60">
              Corner Stone Senior Living is a family-owned and family-operated
              residential senior living home in Allen, Texas. Our approach is
              rooted in the belief that the best care begins with genuine
              relationships, a welcoming environment, and the feeling that you
              truly belong.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#24221f]/20 px-6 py-3 text-xs uppercase tracking-[0.16em] transition hover:bg-[#24221f] hover:text-white"
            >
              Meet Our Family
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="bg-[#24221f] py-24">
        <div className="container-luxury">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
                A Place to Belong
              </p>

              <h2 className="serif mt-4 text-4xl text-white md:text-6xl">
                See what home feels like.
              </h2>
            </div>

            <Link
              href="/gallery"
              className="hidden text-xs uppercase tracking-[0.16em] text-white/60 hover:text-white md:block"
            >
              View Gallery →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "/assets/home/home-03.jpg",
              "/assets/home/home-04.jpg",
              "/assets/home/home-05.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl ${
                  index === 1 ? "aspect-[4/5] md:-translate-y-10" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt="Corner Stone Senior Living"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[#eee8dc] py-28">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
              Allen, Texas
            </p>

            <h2 className="serif mt-5 text-4xl leading-tight md:text-6xl">
              Close to what matters.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-black/60">
              Nestled in Allen, Texas, Corner Stone offers a peaceful
              residential setting while remaining connected to the people,
              places, and conveniences that make North Texas home.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#24221f] px-7 py-4 text-xs uppercase tracking-[0.16em] text-white"
            >
              Plan a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#3a3028] py-32 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,154,106,0.22),transparent_55%)]" />

        <div className="container-luxury relative">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Come See for Yourself
          </p>

          <h2 className="serif mx-auto mt-6 max-w-4xl text-5xl leading-tight md:text-7xl">
            A beautiful place to call home.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#b49a6a] px-8 py-4 text-xs uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#24221f]"
          >
            Schedule a Private Visit
          </Link>
        </div>
      </section>
    </>
  );
}