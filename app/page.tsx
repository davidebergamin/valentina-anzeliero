import Image from "next/image";
import { ImagePanel, SiteFooter, SiteHeader } from "../components/ValentinaChrome";

const triptych = [
  {
    src: "/photos/006.webp",
    alt: "Ritratto romantico degli sposi in primo piano",
    className: "aspect-[3/4]"
  },
  {
    src: "/photos/001.jpg",
    alt: "Sposi in giardino con auto d'epoca",
    className: "aspect-[4/3] md:aspect-[5/4]"
  },
  {
    src: "/photos/011.webp",
    alt: "Torta e dettagli di ricevimento matrimonio",
    className: "aspect-[3/4]"
  }
];

const categories = [
  {
    title: "Matrimoni",
    image: "/photos/004.webp",
    alt: "Sposi fotografati nella luce calda del matrimonio",
    href: "/matrimoni"
  },
  {
    title: "Storie",
    image: "/photos/012.webp",
    alt: "Gruppo di invitati e sposi durante il matrimonio",
    href: "/storie"
  },
  {
    title: "Dettagli",
    image: "/photos/002.webp",
    alt: "Dettaglio delle mani degli sposi",
    href: "/matrimoni#dettagli"
  }
];

const instagram = [
  "/photos/013.webp",
  "/photos/014.jpg",
  "/photos/015.jpg",
  "/photos/024.webp",
  "/photos/031.webp",
  "/photos/038.webp"
];

export default function Home() {
  return (
    <main className="bg-white text-[#342e2a]">
      <SiteHeader />

      <section className="mx-auto w-[calc(100%-2rem)] max-w-[1220px]">
        <ImagePanel
          src="/photos/001.jpg"
          alt="Fotografia di matrimonio con sposi in giardino e auto d'epoca"
          className="aspect-[16/8] md:aspect-[16/5.8]"
          priority
          sizes="100vw"
        />
        <div className="mt-5 border-t border-[#928d86]" />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-14 text-center md:py-16">
        <h1 className="serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#3d3935] md:text-4xl">
          Fotografa di matrimoni
        </h1>
        <p className="serif mt-2 text-lg italic tracking-[0.08em] text-[#8a8179]">
          Treviso, Vicenza, Veneto
        </p>
        <p className="mx-auto mt-9 max-w-2xl text-sm leading-8 text-[#5d5751] md:text-base">
          Fotografie romantiche e spontanee, con uno sguardo discreto sulle emozioni vere del vostro matrimonio.
        </p>
      </section>

      <section id="matrimoni" className="mx-auto w-[calc(100%-2rem)] max-w-[1220px] border-y border-[#928d86] py-5">
        <div className="grid gap-2 md:grid-cols-[0.85fr_1.8fr_0.85fr]">
          {triptych.map((image) => (
            <ImagePanel
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={image.className}
              sizes="(max-width: 768px) 92vw, 33vw"
            />
          ))}
        </div>
      </section>

      <section id="storie" className="mt-14 bg-[#d9e1e1] py-16 md:mt-20 md:py-20">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1220px] gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <a key={category.title} href={category.href} className="group block">
              <div className="relative aspect-square border border-white/90 p-3">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 92vw, 31vw"
                  className="object-cover opacity-70 grayscale transition duration-500 group-hover:opacity-90 group-hover:grayscale-0"
                />
                <div className="absolute inset-3 border border-white/90" />
                <div className="absolute inset-x-8 bottom-10 border-y border-white/80 bg-white/18 py-5 text-center backdrop-blur-[1px]">
                  <h2 className="serif text-3xl uppercase tracking-[0.34em] text-[#37312d] md:text-4xl">
                    {category.title}
                  </h2>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid w-[calc(100%-2rem)] max-w-[1120px] gap-12 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-28">
        <ImagePanel
          src="/photos/030.jpg"
          alt="Sposa fotografata con luce morbida"
          className="aspect-square rounded-full"
          sizes="(max-width: 768px) 88vw, 42vw"
        />
        <div className="mx-auto max-w-xl text-center md:text-left">
          <p className="text-[0.62rem] uppercase tracking-[0.32em] text-[#8a8179]">About</p>
          <h2 className="serif mt-5 text-3xl leading-tight tracking-[-0.03em] md:text-5xl">
            Spontanea, professionale, eternamente romantica.
          </h2>
          <p className="mt-7 text-sm leading-8 text-[#5d5751] md:text-base">
            Valentina racconta matrimoni con naturalezza, senza forzare le pose, cercando la luce, i gesti e quella sensazione di casa che resta nelle fotografie.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <p className="text-center text-[0.58rem] uppercase tracking-[0.28em] text-[#8a8179]">
          Follow me on Instagram
        </p>
        <div className="mx-auto mt-10 grid w-[calc(100%-2rem)] max-w-[1220px] grid-cols-2 gap-2 md:grid-cols-6">
          {instagram.map((src, index) => (
            <ImagePanel
              key={src}
              src={src}
              alt={`Anteprima fotografica matrimonio ${index + 1}`}
              className="aspect-square"
              sizes="(max-width: 768px) 48vw, 16vw"
            />
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
