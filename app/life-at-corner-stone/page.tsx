import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Meaningful Days",
    text: "Life at Corner Stone is shaped around the rhythm of home — conversation, shared meals, quiet moments, and opportunities to stay engaged.",
    image: "/assets/home/home-03.jpg",
  },
  {
    title: "Gather Around the Table",
    text: "Meals are more than nourishment. They are opportunities for connection, conversation, and the familiar rituals that make a house feel like home.",
    image: "/assets/home/home-04.jpg",
  },
  {
    title: "Comfort Outside",
    text: "Outdoor spaces create room for fresh air, sunshine, conversation, and peaceful moments throughout the day.",
    image: "/assets/home/home-05.jpg",
  },
];

export default function LifePage() {
  return (
    <>
      <section className="bg-[#24221f] py-40 text-white">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Life at Corner Stone
          </p>

          <h1 className="serif mt-5 max-w-5xl text-6xl md:text-8xl">
            The little things are the big things.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
            A residential lifestyle built around comfort, connection, dignity,
            and the freedom to enjoy each day.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ee]">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className="container-luxury grid min-h-[650px] items-center gap-16 py-20 md:grid-cols-2"
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <p className="text-xs uppercase tracking-[0.3em] text-[#b49a6a]">
                0{index + 1}
              </p>

              <h2 className="serif mt-5 text-5xl md:text-6xl">
                {section.title}
              </h2>

              <p className="mt-7 max-w-lg text-base leading-8 text-black/60">
                {section.text}
              </p>
            </div>

            <div
              className={`relative aspect-[4/5] overflow-hidden rounded-[2rem] ${
                index % 2 ? "md:order-1" : ""
              }`}
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#eee8dc] py-28 text-center">
        <div className="container-luxury">
          <h2 className="serif mx-auto max-w-3xl text-5xl md:text-7xl">
            A day should feel like your own.
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#24221f] px-8 py-4 text-xs uppercase tracking-[0.16em] text-white"
          >
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
}