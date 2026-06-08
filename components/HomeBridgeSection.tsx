import { PhotoFrame } from "@/components/PhotoFrame";
import { copy, homeBridgePhotos } from "@/lib/site-data";

export function HomeBridgeSection() {
  const photos = homeBridgePhotos.slice(0, 3);

  return (
    <section className="home-bridge section-pad" aria-label="Momenti dal portfolio">
      <div className="container-liquid home-bridge__intro">
        <p className="home-bridge__lead">{copy.bridgePhrase}</p>
      </div>

      <div className="home-bridge__band">
        {photos.map((photo) => (
          <div key={photo.src} className="home-bridge__item">
            <PhotoFrame src={photo.src} alt={photo.alt} sizes="100vw" />
          </div>
        ))}
      </div>
    </section>
  );
}
