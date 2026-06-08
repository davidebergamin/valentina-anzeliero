import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { aboutBody, copy } from "@/lib/site-data";

export function AboutStudioPageView() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-liquid">
          <SectionEyebrow>Chi sono</SectionEyebrow>
          <h1 className="section-title">{copy.aboutTitle}</h1>
          <div className="mt-8 grid max-w-3xl gap-5">
            {aboutBody.map((paragraph) => (
              <p key={paragraph} className="body-text">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="photo-stack mt-12">
          <PhotoFrame src="/photos/050.webp" alt="Valentina Anzeliero — fotografa matrimonio Treviso" priority sizes="100vw" />
          <PhotoFrame src="/photos/090.webp" alt="Reportage matrimonio nel Veneto" sizes="100vw" />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
