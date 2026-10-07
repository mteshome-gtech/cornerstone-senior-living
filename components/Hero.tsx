import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  image: string;
}

export default function Hero({ image }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__media">
        <Image
          src={image}
          alt="Corner Stone Senior Living residence in Allen, Texas"
          fill
          priority
          sizes="100vw"
          className="hero__image"
        />
      </div>

      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__label">
          <span className="eyebrow">
            Family-owned senior living · Allen, Texas
          </span>
        </div>

        <h1 className="hero__title">
          Residential
          <br />
          by design.
        </h1>

        <div className="hero__bottom">
          <p className="hero__description">
            A genuine home environment where comfort, connection, dignity,
            and thoughtful care come first.
          </p>

          <div>
            <Link href="/contact" className="button button--light">
              Schedule a Private Visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}