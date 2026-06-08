import Image from "next/image";
import Link from "next/link";
import heroHome from "../../public/photos/001.jpg";
import { InstagramStrip } from "@/componenti/InstagramStrip";
import { RecensioniSection } from "@/componenti/RecensioniSection";
import { HomeBridgeSection } from "@/components/HomeBridgeSection";
import { HomeScatterSection } from "@/components/HomeScatterSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StoryGrid } from "@/components/StoryGrid";
import { copy } from "@/lib/site-data";

export function HomePageView() {
  return (
    <main>
      <section className="hero-home">
        <div className="hero-home__image">
          <Image src={heroHome} alt="Matrimonio nel Veneto — Valentina Anzeliero" fill priority sizes="100vw" className="object-contain" unoptimized />
        </div>
        <div className="hero-home__copy container-liquid">
          <div className="max-w-5xl">
            <SectionEyebrow light>{copy.heroEyebrow}</SectionEyebrow>
            <h1 className="display-title text-balance">{copy.heroTitle}</h1>
          </div>
        </div>
      </section>

      <section className="hero-intro-band section-pad-tight">
        <div className="container-liquid max-w-3xl">
          <p className="hero-intro-band__lead">{copy.heroSubtitle}</p>
        </div>
      </section>

      <HomeScatterSection />

      <section className="container-liquid section-pad">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <h2 className="section-title">{copy.storiesTitle}</h2>
          <Link href="/storie/" className="text-link">
            {copy.ctaStories}
          </Link>
        </div>
        <StoryGrid limit={3} variant="home" />
      </section>

      <HomeBridgeSection />
      <RecensioniSection />
      <InstagramStrip />
    </main>
  );
}
