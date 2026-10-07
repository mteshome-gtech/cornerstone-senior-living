import Image from "next/image";
import Link from "next/link";

const images = [
  "/assets/home/home-01.jpg",
  "/assets/home/home-02.jpg",
  "/assets/home/home-03.jpg",
  "/assets/home/home-04.jpg",
  "/assets/home/home-05.jpg",
  "/assets/home/home-06.jpg",
];

export default function OurHome() {
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/assets/home/home-01.jpg"
            alt="Corner Stone Senior Living home in Allen, Texas"
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="hero__overlay" />

        <div className="container hero__content">
          <span className="eyebrow">Our Home</span>

          <h1 className="hero__title">
            Residential
            <br />
            by design.
          </h1>

          <div className="hero__bottom">
            <p className="hero__description">
              A genuine home environment where comfort, connection,
              dignity, and thoughtful living come first.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                The residence
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                It should feel like home
                <br />
                because it is home.
              </h2>

              <p className="body-copy">
                Corner Stone Senior Living takes a residential
                approach to senior living. Rather than a large
                institutional setting, our home is designed around
                familiar spaces, personal connection, and the simple
                pleasures of everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div
                key={src}
                className="gallery-grid__item"
              >
                <Image
                  src={src}
                  alt={`Corner Stone Senior Living home ${index + 1}`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="cta__inner">
            <h2 className="cta__title">
              Come experience the home
              <br />
              for yourself.
            </h2>

            <div className="cta__action">
              <Link
                href="/contact"
                className="button button--light"
              >
                Schedule a Private Visit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}