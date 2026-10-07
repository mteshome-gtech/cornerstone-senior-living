import Link from "next/link";

const founders = [
  "Mimi Tadesse",
  "Elias Tadesse",
  "Ermias Tadesse",
  "Israel Haile",
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#24221f] py-40 text-white">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Our Story
          </p>

          <h1 className="serif mt-5 max-w-5xl text-6xl md:text-8xl">
            Built around family.
          </h1>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-28">
        <div className="container-luxury grid gap-14 md:grid-cols-2">
          <h2 className="serif text-5xl md:text-6xl">
            A family vision for senior living.
          </h2>

          <div className="space-y-6 text-base leading-8 text-black/60">
            <p>
              Corner Stone Senior Living was created from a deeply personal
              perspective on what home should mean as we grow older.
            </p>

            <p>
              Our family believes senior living should feel welcoming,
              personal, and human. It should offer the comfort of familiar
              surroundings while creating an environment where residents feel
              valued and supported.
            </p>

            <p>
              That belief is at the heart of Corner Stone: a residential home
              in Allen, Texas, operated by a family who understands the
              importance of trust, dignity, and genuine connection.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eee8dc] py-28">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
            The Founding Family
          </p>

          <h2 className="serif mt-5 max-w-3xl text-5xl md:text-7xl">
            Four people. One shared vision.
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {founders.map((founder, index) => (
              <div
                key={founder}
                className="rounded-3xl bg-[#f7f4ee] p-10"
              >
                <div className="text-xs tracking-[0.2em] text-[#b49a6a]">
                  0{index + 1}
                </div>

                <h3 className="serif mt-20 text-3xl">{founder}</h3>

                <p className="mt-4 text-sm leading-7 text-black/50">
                  Founder biography and role coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24221f] py-28 text-center text-white">
        <div className="container-luxury">
          <h2 className="serif mx-auto max-w-4xl text-5xl md:text-7xl">
            Because the best care starts with family.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#b49a6a] px-8 py-4 text-xs uppercase tracking-[0.16em]"
          >
            Meet Us
          </Link>
        </div>
      </section>
    </>
  );
}