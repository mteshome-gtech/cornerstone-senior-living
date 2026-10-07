import Link from "next/link";

export default function CarePage() {
  return (
    <>
      <section className="bg-[#24221f] py-40 text-white">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Our Approach to Care
          </p>

          <h1 className="serif mt-5 max-w-5xl text-6xl md:text-8xl">
            Care that begins with knowing you.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            Our philosophy is simple: every resident deserves to be known,
            respected, listened to, and cared for as an individual.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-28">
        <div className="container-luxury">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-black/10 md:grid-cols-2">
            {[
              {
                title: "Personal Attention",
                text: "We believe meaningful care begins with understanding the individual — their preferences, routines, personality, and story.",
              },
              {
                title: "Dignity & Respect",
                text: "Every interaction should preserve independence, dignity, comfort, and the sense of being at home.",
              },
              {
                title: "Family Connection",
                text: "Families should feel informed, welcomed, and connected throughout the experience.",
              },
              {
                title: "A Peaceful Environment",
                text: "A calm residential setting allows care to feel natural rather than institutional.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-[#f7f4ee] p-10 md:p-14">
                <h2 className="serif text-3xl md:text-4xl">{item.title}</h2>

                <p className="mt-5 text-sm leading-7 text-black/60">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee8dc] py-28">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <h2 className="serif text-5xl md:text-6xl">
            The goal isn't simply care.
            <br />
            It's quality of life.
          </h2>

          <div>
            <p className="leading-8 text-black/60">
              We take a whole-person approach to the experience of senior
              living, creating space for relationships, familiar routines,
              meaningful moments, and a genuine sense of belonging.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-[#24221f] px-7 py-4 text-xs uppercase tracking-[0.16em] text-white"
            >
              Talk With Our Family
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}