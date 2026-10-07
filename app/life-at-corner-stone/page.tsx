import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Meaningful Days",
    text: "Life at Corner Stone is shaped around the rhythm of home — conversation, shared meals, quiet moments, and opportunities to stay engaged.",
    image: "/assets/gallery/home-03.jpg",
  },
  {
    title: "Gather Around the Table",
    text: "Meals are more than nourishment. They are opportunities for connection, conversation, and the familiar rituals that make a house feel like home.",
    image: "/assets/gallery/home-04.jpg",
  },
  {
    title: "Comfort Outside",
    text: "Outdoor spaces create room for fresh air, sunshine, conversation, and peaceful moments throughout the day.",
    image: "/assets/gallery/home-05.jpg",
  },
];

export default function LifePage() {
  return (
    <>
      <section className="section section--forest">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Life at Corner Stone
              </span>
            </div>

            <div className="editorial__content">
              <h1 className="display-lg">
                The little things
                <br />
                are the big things.
              </h1>

              <p className="body-large">
                A residential lifestyle built around comfort,
                connection, dignity, and the freedom to enjoy each
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          {sections.map((section, index) => (
            <div
              key={section.title}
              style={{
                marginBottom:
                  index === sections.length - 1 ? 0 : "clamp(100px, 14vw, 190px)",
              }}
            >
              <div
                className={`image-editorial ${
                  index % 2 === 1
                    ? "image-editorial--reverse"
                    : ""
                }`}
              >
                <div className="image-editorial__media">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={1400}
                    height={1750}
                    sizes="(max-width: 900px) 100vw, 58vw"
                  />
                </div>

                <div className="image-editorial__content">
                  <span className="eyebrow">
                    0{index + 1}
                  </span>

                  <h2 className="display-md">
                    {section.title}
                  </h2>

                  <p className="body-copy">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Everyday life
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                A day should feel
                <br />
                like your own.
              </h2>

              <Link
                href="/contact"
                className="button button--dark"
                style={{ marginTop: "35px" }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}