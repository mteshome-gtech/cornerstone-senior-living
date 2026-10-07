import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

const pillars = [
  {
    number: "01",
    title: "Life",
    text: "A warm residential environment where everyday living feels comfortable, familiar, and meaningful.",
    href: "/life-at-corner-stone",
  },
  {
    number: "02",
    title: "Care",
    text: "Thoughtful support centered around each resident as an individual, with dignity at the heart of every interaction.",
    href: "/care",
  },
  {
    number: "03",
    title: "Family",
    text: "A family-owned home where relationships matter and communication remains personal.",
    href: "/about",
  },
];

export default function Home() {
  return (
    <>
      <Hero image="/assets/home/hero.jpg" />

      <section className="section section--cream">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                A different kind of senior living
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                More than a place to live.
                <br />
                It is home.
              </h2>

              <p className="body-copy">
                Corner Stone Senior Living was created around a simple
                belief: senior living should feel personal. Our
                residential approach creates an environment where
                residents can enjoy the comfort of home while receiving
                thoughtful, individualized support.
              </p>

              <Link
                href="/our-home"
                className="footer__visit-link"
              >
                Explore Our Home
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="full-image">
        <Image
          src="/assets/home/home-01.jpg"
          alt="Interior of Corner Stone Senior Living"
          width={2400}
          height={1350}
          sizes="100vw"
        />

        <div className="hero__overlay" />

        <div
          className="container"
          style={{
            position: "absolute",
            inset: "auto 0 0",
            paddingBottom: "clamp(60px, 8vw, 110px)",
            color: "var(--white)",
          }}
        >
          <span className="eyebrow">
            Thoughtful living
          </span>

          <h2
            className="display-lg"
            style={{ maxWidth: "800px", marginTop: "20px" }}
          >
            Everyday moments,
            <br />
            made meaningful.
          </h2>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                The Corner Stone approach
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                Designed around people,
                <br />
                not processes.
              </h2>
            </div>
          </div>

          <div
            className="editorial-list"
            style={{ marginTop: "80px" }}
          >
            {pillars.map((pillar) => (
              <Link
                href={pillar.href}
                key={pillar.number}
                className="editorial-list__item"
              >
                <span className="editorial-list__number">
                  {pillar.number}
                </span>

                <h3 className="editorial-list__title">
                  {pillar.title}
                </h3>

                <p className="editorial-list__description">
                  {pillar.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="image-editorial image-editorial--reverse">
            <div className="image-editorial__media">
              <Image
                src="/assets/home/home-02.jpg"
                alt="Corner Stone residential home"
                width={1400}
                height={1750}
                sizes="(max-width: 900px) 100vw, 58vw"
              />
            </div>

            <div className="image-editorial__content">
              <span className="eyebrow">
                Family-owned. Personal by nature.
              </span>

              <h2 className="display-md">
                Built around family.
              </h2>

              <p className="body-copy">
                Corner Stone Senior Living is a family-owned and
                family-operated residential senior living home in
                Allen, Texas. Our approach is rooted in the belief
                that the best care begins with genuine relationships,
                a welcoming environment, and the feeling that you
                truly belong.
              </p>

              <Link
                href="/about"
                className="footer__visit-link"
              >
                Meet Our Family
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--forest">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                A place to belong
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                See what home feels like.
              </h2>

              <Link
                href="/gallery"
                className="footer__visit-link"
              >
                View Gallery
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="gallery-grid" style={{ marginTop: "70px" }}>
            {[
              "/assets/home/home-03.jpg",
              "/assets/home/home-04.jpg",
              "/assets/home/home-05.jpg",
              "/assets/home/home-06.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className="gallery-grid__item"
              >
                <Image
                  src={src}
                  alt={`Corner Stone Senior Living interior ${index + 1}`}
                  width={1200}
                  height={900}
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
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
                Allen, Texas
              </span>
            </div>

            <div className="editorial__content">
              <h2 className="display-md">
                Close to what matters.
              </h2>

              <p className="body-copy">
                Nestled in Allen, Texas, Corner Stone offers a
                peaceful residential setting while remaining
                connected to the people, places, and conveniences
                that make North Texas home.
              </p>

              <Link
                href="/contact"
                className="button button--dark"
                style={{ marginTop: "34px" }}
              >
                Plan a Private Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        eyebrow="Come see for yourself"
        title="A beautiful place to call home."
        description="We would love to welcome you into Corner Stone and let you experience the home for yourself."
        buttonText="Schedule a Private Visit"
      />
    </>
  );
}