import { PhotoFrame } from "@/components/PhotoFrame";
import { copy, homeScatterPhotos } from "@/lib/site-data";

export function HomeScatterSection() {
  return (
    <section className="home-scatter section-pad" aria-label="Introduzione">
      <div className="home-scatter__grid">
        <div className="home-scatter__photo">
          <PhotoFrame src={homeScatterPhotos[0].src} alt={homeScatterPhotos[0].alt} sizes="100vw" />
        </div>
        <div className="home-scatter__photo">
          <PhotoFrame src={homeScatterPhotos[1].src} alt={homeScatterPhotos[1].alt} sizes="100vw" />
        </div>
        <blockquote className="home-scatter__quote">
          <p className="lead text-balance">{copy.introPhrase}</p>
        </blockquote>
        <div className="home-scatter__photo">
          <PhotoFrame src={homeScatterPhotos[2].src} alt={homeScatterPhotos[2].alt} sizes="100vw" />
        </div>
        <div className="home-scatter__photo">
          <PhotoFrame src={homeScatterPhotos[3].src} alt={homeScatterPhotos[3].alt} sizes="100vw" />
        </div>
      </div>
    </section>
  );
}
