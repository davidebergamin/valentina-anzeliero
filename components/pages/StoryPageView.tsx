import Link from "next/link";
import { ContactBand } from "@/components/ContactBand";
import { PhotoFrame } from "@/components/PhotoFrame";
import { PortfolioMasonry } from "@/components/PortfolioMasonry";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { copy, findStoryBySlug, relatedStories, type Story } from "@/lib/site-data";

export function StoryPageView({ story }: { story: Story }) {
  const related = relatedStories.map((slug) => findStoryBySlug(slug)).filter(Boolean) as Story[];
  const galleryImages = story.galleryImages ?? [story.image];
  const masonryItems = galleryImages.map((src, index) => ({
    src,
    alt: `${story.title} — immagine ${index + 1} dalla storia`
  }));

  return (
    <main>
      <section className="bg-white">
        <PhotoFrame src={story.image} alt={story.alt} priority className="photo-frame--bleed" />
        <div className="container-liquid section-pad-tight">
          <SectionEyebrow>{story.location}</SectionEyebrow>
          <h1 className="section-title mt-4 text-balance">{story.title}</h1>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-liquid mb-10 md:mb-14">
          <SectionEyebrow>{copy.storyGalleryEyebrow}</SectionEyebrow>
          <p className="lead mt-4 max-w-xl">Momenti della giornata — ritmo, luce, dettagli.</p>
        </div>
        <PortfolioMasonry items={masonryItems} sizes="100vw" />
      </section>

      <section className="container-liquid pb-24 md:pb-32">
        <div className="mb-10 flex flex-col gap-4 pt-10 md:flex-row md:items-end md:justify-between">
          <h2 className="section-title">{copy.relatedStoriesTitle}</h2>
        </div>
        <div className="photo-grid photo-grid--stories">
          {related.map((item) => (
            <Link key={item.slug} href={`/${item.slug}/`} className="group block">
              <PhotoFrame src={item.image} alt={item.alt} sizes="(max-width: 768px) 100vw, 46vw" />
              <div className="story-card-meta">
                <p className="story-card-location">{item.location}</p>
                <h3 className="card-title story-card-title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
