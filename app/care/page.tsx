import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Personal Attention",
    text: "Meaningful care begins with understanding the individual — their preferences, routines, personality, and story.",
  },
  {
    number: "02",
    title: "Dignity & Respect",
    text: "Every interaction should preserve independence, dignity, comfort, and the sense of being at home.",
  },
  {
    number: "03",
    title: "Family Connection",
    text: "Families should feel informed, welcomed, and connected throughout the experience.",
  },
  {
    number: "04",
    title: "A Peaceful Environment",
    text: "A calm residential setting allows care to feel natural rather than institutional.",
  },
];

export default function CarePage() {
  return (
    <>
      <section className="section section--forest">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Our approach to care
              </span>
            </div>

            <div className="editorial__content">
              <h1 className="display-lg">
                Care that begins
                <br />
                with knowing you.
              </h1>

              <p className="body-large">
                Every resident deserves to be known, respected,
                listened to, and cared for as an individual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                What guides us
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                Thoughtful support.
                <br />
                Personally delivered.
              </h2>
            </div>
          </div>

          <div
            className="editorial-list"
            style={{ marginTop: "75px" }}
          >
            {principles.map((item) => (
              <div
                key={item.number}
                className="editorial-list__item"
              >
                <span className="editorial-list__number">
                  {item.number}
                </span>

                <h3 className="editorial-list__title">
                  {item.title}
                </h3>

                <p className="editorial-list__description">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Quality of life
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                The goal isn't simply care.
                <br />
                It's quality of life.
              </h2>

              <p className="body-copy">
                We take a whole-person approach to senior living,
                creating space for relationships, familiar routines,
                meaningful moments, and a genuine sense of belonging.
              </p>

              <Link
                href="/contact"
                className="button button--dark"
                style={{ marginTop: "35px" }}
              >
                Talk With Our Family
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}