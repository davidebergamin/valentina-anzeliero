import { ContactBand } from "@/components/ContactBand";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { StoryGrid } from "@/components/StoryGrid";
import { copy } from "@/lib/site-data";

export function StoriesPageView() {
  return (
    <main>
      <section className="container-liquid section-pad-tight">
        <SectionEyebrow>Matrimoni</SectionEyebrow>
        <h1 className="section-title max-w-4xl">Matrimoni</h1>
        <p className="body-text mt-8 max-w-2xl">{copy.storiesLead}</p>
      </section>
      <section className="container-liquid pb-24 md:pb-32">
        <StoryGrid />
      </section>
      <ContactBand />
    </main>
  );
}
