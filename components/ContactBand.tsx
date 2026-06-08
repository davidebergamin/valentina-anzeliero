import Link from "next/link";
import { copy } from "@/lib/site-data";

export function ContactBand() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <div className="container-liquid grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <h2 className="section-title max-w-2xl text-white">{copy.contactBandTitle}</h2>
        </div>
        <div>
          <p className="body-text text-white/78">{copy.contactBandText}</p>
          <div className="mt-8">
            <Link href="/contatti/" className="btn-outline btn-outline--light inline-flex min-h-12 border-2 border-white px-8">
              {copy.ctaContact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
