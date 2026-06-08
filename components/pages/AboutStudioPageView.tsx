import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { aboutBody, copy } from "@/lib/site-data";

export function AboutStudioPageView() {
  return (
    <main>
      <section className="container-liquid grid gap-12 section-pad md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <SectionEyebrow>Chi sono</SectionEyebrow>
          <h1 className="section-title">{copy.aboutTitle}</h1>
          <div className="mt-8 grid gap-5">
            {aboutBody.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          <PhotoFrame src="/photos/050.webp" alt="Valentina Anzeliero — fotografa matrimonio Treviso" priority sizes="(max-width: 768px) 100vw, 42vw" />
          <PhotoFrame src="/photos/090.webp" alt="Reportage matrimonio nel Veneto" sizes="(max-width: 768px) 100vw, 42vw" />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
