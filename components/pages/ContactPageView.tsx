import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { contact, copy } from "@/lib/site-data";

export function ContactPageView() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-liquid">
          <SectionEyebrow>{copy.contactTitle}</SectionEyebrow>
          <h1 className="section-title">{copy.contactTitle}</h1>
          <div className="mt-9 grid max-w-3xl gap-4">
            <p className="body-text">{copy.contactIntro}</p>
            {contact.phone ? (
              <a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="lead">
                {contact.phone}
              </a>
            ) : null}
            {contact.email ? (
              <a href={`mailto:${contact.email}`} className="lead text-[var(--foreground)]">
                {contact.email}
              </a>
            ) : null}
            <p className="body-text">{contact.address}</p>
            <p className="body-text">Treviso e Vicenza — disponibile in tutta Italia e all&apos;estero.</p>
            <a href={contact.matrimonioUrl} target="_blank" rel="noopener noreferrer" className="btn-outline mt-4 inline-flex w-fit border border-black px-6 py-3 text-black">
              Richiedi preventivo su Matrimonio.com
            </a>
          </div>
        </div>
        <div className="mt-12">
          <PhotoFrame src="/photos/120.webp" alt="Contatta Valentina Anzeliero" priority sizes="100vw" />
        </div>
      </section>
    </main>
  );
}
