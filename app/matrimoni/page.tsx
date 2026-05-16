import type { Metadata } from "next";
import { ImagePanel, SiteFooter, SiteHeader } from "../../components/ValentinaChrome";

export const metadata: Metadata = {
  title: "Matrimoni | Valentina Anzeliero",
  description:
    "Una selezione di fotografie di matrimonio di Valentina Anzeliero: momenti spontanei, dettagli romantici e reportage in Veneto.",
  alternates: { canonical: "/matrimoni" }
};

const photos = [
  { src: "/photos/001.jpg", alt: "Sposi in giardino con auto d'epoca", aspect: "aspect-[4/3]" },
  { src: "/photos/006.webp", alt: "Ritratto romantico degli sposi", aspect: "aspect-[3/4]" },
  { src: "/photos/011.webp", alt: "Dettaglio della torta nuziale", aspect: "aspect-[4/5]" },
  { src: "/photos/013.webp", alt: "Sposi e invitati durante il matrimonio", aspect: "aspect-[4/3]" },
  { src: "/photos/014.jpg", alt: "Coppia di sposi all'aperto", aspect: "aspect-[3/4]" },
  { src: "/photos/015.jpg", alt: "Sposi seduti in un momento naturale", aspect: "aspect-[5/4]" },
  { src: "/photos/020.jpg", alt: "Sposa su una scala elegante", aspect: "aspect-[4/5]" },
  { src: "/photos/024.webp", alt: "Dettaglio floreale del matrimonio", aspect: "aspect-[3/4]" },
  { src: "/photos/030.jpg", alt: "Sposa vicino alla finestra", aspect: "aspect-square" },
  { src: "/photos/031.webp", alt: "Sposi in un momento intimo", aspect: "aspect-[4/5]" },
  { src: "/photos/032.webp", alt: "Sposi sulla scalinata", aspect: "aspect-[3/4]" },
  { src: "/photos/033.webp", alt: "Ritratto spontaneo degli sposi", aspect: "aspect-[5/4]" },
  { src: "/photos/034.webp", alt: "Dettaglio delle mani", aspect: "aspect-square" },
  { src: "/photos/038.webp", alt: "Invitati e sposi nel verde", aspect: "aspect-[4/3]" },
  { src: "/photos/041.webp", alt: "Momento elegante del ricevimento", aspect: "aspect-[3/4]" }
];

export default function MatrimoniPage() {
  return (
    <main className="bg-white text-[#342e2a]">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <h1 className="serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#3d3935] md:text-4xl">
          Matrimoni
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-[#5d5751]">
          Una selezione di immagini romantiche, spontanee e luminose.
        </p>
      </section>

      <section className="mx-auto w-[calc(100%-2rem)] max-w-[1220px] border-y border-[#928d86] py-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <div key={photo.src} id={photo.src.includes("024") ? "dettagli" : undefined} className="mb-5 break-inside-avoid">
              <ImagePanel
                src={photo.src}
                alt={photo.alt}
                className={photo.aspect}
                sizes="(max-width: 768px) 92vw, 31vw"
              />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
