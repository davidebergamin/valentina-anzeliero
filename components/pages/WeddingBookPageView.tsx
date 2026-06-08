import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { weddingBookCopy } from "@/lib/site-data";

export function WeddingBookPageView() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-liquid">
          <SectionEyebrow>Album</SectionEyebrow>
          <h1 className="section-title">Album matrimoniale</h1>
          <div className="mt-8 grid max-w-3xl gap-5">
            {weddingBookCopy.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <PhotoFrame src="/photos/070.webp" alt="Album matrimoniale Valentina Anzeliero" priority sizes="100vw" />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
