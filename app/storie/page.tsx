import type { Metadata } from "next";
import { ImagePanel, SiteFooter, SiteHeader } from "../../components/ValentinaChrome";

export const metadata: Metadata = {
  title: "Storie | Valentina Anzeliero",
  description:
    "Tre storie di matrimonio raccontate con immagini romantiche, naturali e discrete da Valentina Anzeliero Photografa.",
  alternates: { canonical: "/storie" }
};

const stories = [
  {
    title: "Elisa & Davide",
    place: "Oderzo, Treviso",
    date: "Ottobre",
    image: "/photos/001.jpg",
    alt: "Matrimonio in giardino con auto d'epoca",
    text: "Un matrimonio caldo e autunnale, tra giardino, luce morbida e dettagli dal sapore familiare."
  },
  {
    title: "Anna & Tommaso",
    place: "Villa veneta",
    date: "Estate",
    image: "/photos/013.webp",
    alt: "Sposi e invitati durante il lancio del riso",
    text: "Una giornata elegante e leggera, fotografata seguendo i gesti spontanei degli sposi e degli invitati."
  },
  {
    title: "Marta & Giulio",
    place: "Colli trevigiani",
    date: "Primavera",
    image: "/photos/004.webp",
    alt: "Ritratto romantico degli sposi al tramonto",
    text: "Una storia intima, romantica, costruita intorno a luce naturale, silenzi e piccoli momenti veri."
  }
];

export default function StoriePage() {
  return (
    <main className="bg-white text-[#342e2a]">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 pb-16 text-center">
        <h1 className="serif text-3xl uppercase leading-tight tracking-[-0.04em] text-[#3d3935] md:text-4xl">
          Storie
        </h1>
      </section>

      <section className="mx-auto w-[calc(100%-2rem)] max-w-[1220px] pb-20 md:pb-28">
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.title} className="group">
              <a href="/matrimoni" className="block">
                <ImagePanel
                  src={story.image}
                  alt={story.alt}
                  className="aspect-[4/5]"
                  sizes="(max-width: 768px) 92vw, 31vw"
                />
                <div className="pt-5 text-left">
                  <h2 className="serif text-lg leading-tight text-[#4a4540]">{story.title}</h2>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#8a8179]">
                    {story.place} · {story.date}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5d5751]">{story.text}</p>
                  <p className="mt-4 text-[0.62rem] uppercase tracking-[0.18em] text-[#4a4540]">
                    Maggiori informazioni →
                  </p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
