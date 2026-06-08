import Link from "next/link";
import { RecensioniSection } from "@/componenti/RecensioniSection";
import { ContactBand } from "@/components/ContactBand";
import { contact } from "@/lib/site-data";

export function TestimonialsPageView() {
  return (
    <main>
      <RecensioniSection />
      <section className="container-liquid pb-20">
        <Link href={contact.matrimonioUrl} target="_blank" rel="noopener noreferrer" className="text-link">
          Leggi tutte le recensioni su Matrimonio.com →
        </Link>
      </section>
      <ContactBand />
    </main>
  );
}
