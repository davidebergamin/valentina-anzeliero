import { ContactBand } from "@/components/ContactBand";
import { PortfolioMasonry } from "@/components/PortfolioMasonry";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { servicePhotos, type GalleryType } from "@/lib/site-data";

export function SimpleGalleryPageView({ type }: { type: GalleryType }) {
  const service = servicePhotos[type];
  const items = service.photos.map((src, index) => ({
    src,
    alt: `${service.title} — immagine ${index + 1}`
  }));

  return (
    <main>
      <section className="container-liquid section-pad-tight">
        <SectionEyebrow>Servizi</SectionEyebrow>
        <h1 className="section-title">{service.title}</h1>
      </section>
      <section className="pb-24 md:pb-32">
        <PortfolioMasonry items={items} sizes="100vw" />
      </section>
      <ContactBand />
    </main>
  );
}
