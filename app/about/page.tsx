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
      <section className="section section--forest">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Our Story
              </span>
            </div>

            <div className="editorial__content">
              <h1 className="display-lg">
                Built around
                <br />
                family.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Our philosophy
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                A family vision
                <br />
                for senior living.
              </h2>

              <div style={{ marginTop: "38px" }}>
                <p className="body-copy">
                  Corner Stone Senior Living was created from a
                  deeply personal perspective on what home should
                  mean as we grow older.
                </p>

                <p
                  className="body-copy"
                  style={{ marginTop: "24px" }}
                >
                  Our family believes senior living should feel
                  welcoming, personal, and human. It should offer
                  the comfort of familiar surroundings while
                  creating an environment where residents feel
                  valued and supported.
                </p>

                <p
                  className="body-copy"
                  style={{ marginTop: "24px" }}
                >
                  That belief is at the heart of Corner Stone: a
                  residential home in Allen, Texas, operated by a
                  family who understands the importance of trust,
                  dignity, and genuine connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                The founding family
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                Four people.
                <br />
                One shared vision.
              </h2>
            </div>
          </div>

          <div
            className="editorial-list"
            style={{ marginTop: "75px" }}
          >
            {founders.map((founder, index) => (
              <div
                key={founder}
                className="editorial-list__item"
              >
                <span className="editorial-list__number">
                  0{index + 1}
                </span>

                <h3 className="editorial-list__title">
                  {founder}
                </h3>

                <p className="editorial-list__description">
                  Founder biography and role coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">
              Because the best care
              <br />
              starts with family.
            </h2>

            <div className="cta__action">
              <Link
                href="/contact"
                className="button button--light"
              >
                Meet Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}