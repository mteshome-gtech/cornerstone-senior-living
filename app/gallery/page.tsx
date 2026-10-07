import Image from "next/image";

const images = [
  "/assets/home/hero.jpg",
  "/assets/home/home-01.jpg",
  "/assets/home/home-02.jpg",
  "/assets/home/home-03.jpg",
  "/assets/home/home-04.jpg",
  "/assets/home/home-05.jpg",
  "/assets/home/home-06.jpg",
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#24221f] py-40 text-white">
        <div className="container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d8c5a0]">
            Gallery
          </p>

          <h1 className="serif mt-5 text-6xl md:text-8xl">
            A glimpse of home.
          </h1>

          <p className="mt-7 max-w-xl text-white/60">
            Explore the spaces and atmosphere that make Corner Stone feel
            distinctly residential.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-20">
        <div className="container-luxury columns-1 gap-5 md:columns-2">
          {images.map((src, index) => (
            <div
              key={src}
              className="relative mb-5 aspect-[4/5] break-inside-avoid overflow-hidden rounded-3xl"
            >
              <Image
                src={src}
                alt={`Corner Stone Senior Living gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}