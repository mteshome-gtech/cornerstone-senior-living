import Image from "next/image";

const images = [
  "/assets/home/home-01.webp",
  "/assets/home/home-02.webp",
  "/assets/home/home-03.webp",
  "/assets/home/home-04.webp",
  "/assets/home/home-05.webp",
  "/assets/home/home-06.webp",
  "/assets/home/home-07.webp",
];

export default function GalleryPage() {
  return (
    <>
      <section className="section section--forest">
        <div className="container">
          <div className="editorial">
            <div className="editorial__label">
              <span className="eyebrow">
                Gallery
              </span>
            </div>

            <div className="editorial__content">
              <h1 className="display-lg">
                A glimpse
                <br />
                of home.
              </h1>

              <p className="body-large">
                Explore the spaces and atmosphere that make Corner
                Stone feel distinctly residential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="gallery-grid">
            {images.map((src, index) => (
              <div
                key={src}
                className="gallery-grid__item"
              >
                <Image
                  src={src}
                  alt={`Corner Stone Senior Living gallery image ${
                    index + 1
                  }`}
                  width={1400}
                  height={1000}
                  sizes="(max-width: 900px) 50vw, 60vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}