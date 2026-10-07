import Image from "next/image";
import Link from "next/link";

export default function OurHome() {
  const images = [
    "/assets/home/home-01.jpg",
    "/assets/home/home-02.jpg",
    "/assets/home/home-03.jpg",
    "/assets/home/home-04.jpg",
    "/assets/home/home-05.jpg",
    "/assets/home/home-06.jpg",
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#24221f]">
        <Image
          src="/assets/home/home-01.jpg"
          alt="Corner Stone Senior Living home"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#241f1a]/80 via-[#241f1a]/35 to-transparent" />

        <div className="container-luxury relative z-10 pb-20 pt-40 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Our Home
          </p>

          <h1 className="serif mt-5 max-w-4xl text-6xl md:text-8xl">
            Residential by design.
          </h1>

          <p className="mt-7 max-w-xl text-white/70">
            A genuine home environment where comfort, connection, and
            thoughtful living come first.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-28">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <h2 className="serif text-4xl md:text-6xl">
            It should feel like home because it is home.
          </h2>

          <p className="text-base leading-8 text-black/60">
            Corner Stone Senior Living takes a residential approach to senior
            living. Rather than a large institutional setting, our home is
            designed around familiar spaces, personal connection, and the
            simple pleasures of everyday life.
          </p>
        </div>
      </section>

      <section className="bg-[#eee8dc] py-24">
        <div className="container-luxury">
          <div className="grid gap-5 md:grid-cols-2">
            {images.map((src, index) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-3xl ${
                  index === 0 || index === 3
                    ? "aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt="Corner Stone Senior Living"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24221f] py-28 text-white">
        <div className="container-luxury text-center">
          <h2 className="serif mx-auto max-w-3xl text-5xl md:text-7xl">
            Come experience the home for yourself.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#b49a6a] px-8 py-4 text-xs uppercase tracking-[0.16em]"
          >
            Schedule a Private Visit
          </Link>
        </div>
      </section>
    </>
  );
}