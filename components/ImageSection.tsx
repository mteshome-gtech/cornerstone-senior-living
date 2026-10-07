import Image from "next/image";

type ImageSectionProps = {
  image: string;
  eyebrow?: string;
  title: string;
  description?: string;
  reverse?: boolean;
  dark?: boolean;
};

export default function ImageSection({
  image,
  eyebrow,
  title,
  description,
  reverse = false,
  dark = false,
}: ImageSectionProps) {
  return (
    <section
      className={`section ${
        dark ? "section--forest" : "section--cream"
      }`}
    >
      <div className="container">
        <div
          className={`image-editorial ${
            reverse ? "image-editorial--reverse" : ""
          }`}
        >
          <div className="image-editorial__media">
            <Image
              src={image}
              alt={title}
              width={1400}
              height={1750}
              sizes="(max-width: 900px) 100vw, 58vw"
            />
          </div>

          <div className="image-editorial__content">
            {eyebrow && (
              <span className="eyebrow">{eyebrow}</span>
            )}

            <h2 className="display-md">{title}</h2>

            {description && (
              <p
                className={
                  dark
                    ? "body-copy"
                    : "body-copy"
                }
              >
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}