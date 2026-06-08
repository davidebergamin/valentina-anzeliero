import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { aboutLinks, copy } from "@/lib/site-data";

export function AboutHubPageView() {
  return (
    <main>
      <section className="container-liquid grid gap-12 section-pad md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <SectionEyebrow>Chi sono</SectionEyebrow>
          <h1 className="section-title">Chi sono</h1>
        </div>
        <p className="body-text max-w-2xl">{copy.aboutIntro}</p>
      </section>
      <section className="container-liquid grid gap-8 pb-24 md:grid-cols-3 md:gap-6 md:pb-32">
        {aboutLinks.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <PhotoFrame src={item.image} alt={item.title} sizes="(max-width: 768px) 100vw, 33vw" />
            <div className="p-7 md:p-9">
              <h2 className="card-title transition group-hover:text-[var(--muted)]">{item.title}</h2>
              <p className="body-text mt-5">{item.text}</p>
            </div>
          </Link>
        ))}
      </section>
      <ContactBand />
    </main>
  );
}
