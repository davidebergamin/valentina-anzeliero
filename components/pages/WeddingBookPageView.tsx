import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { weddingBookCopy } from "@/lib/site-data";

export function WeddingBookPageView() {
  return (
    <main>
      <section className="container-liquid grid gap-12 section-pad md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <SectionEyebrow>Album</SectionEyebrow>
          <h1 className="section-title">Album matrimoniale</h1>
          <div className="mt-8 grid gap-5">
            {weddingBookCopy.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <PhotoFrame src="/photos/070.webp" alt="Album matrimoniale Valentina Anzeliero" priority sizes="(max-width: 768px) 100vw, 42vw" />
      </section>
      <ContactBand />
    </main>
  );
}
