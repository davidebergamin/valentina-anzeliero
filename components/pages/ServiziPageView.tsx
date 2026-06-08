import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { serviceCards, serviceHubIntro } from "@/lib/site-data";

export function ServiziPageView() {
  return (
    <main>
      <section className="container-liquid section-pad md:grid md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-12">
        <div>
          <SectionEyebrow>Servizi</SectionEyebrow>
          <h1 className="section-title">Servizi fotografici</h1>
        </div>
        <p className="body-text max-w-2xl">{serviceHubIntro}</p>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="service-cards">
          {serviceCards.map((service) => (
            <Link key={service.href} href={service.href} className="service-card group">
              <PhotoFrame src={service.image} alt={service.title} sizes="100vw" />
              <div className="service-card-body container-liquid">
                <h2 className="card-title transition group-hover:text-[var(--muted)]">{service.title}</h2>
                <p className="body-text mt-4">{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
