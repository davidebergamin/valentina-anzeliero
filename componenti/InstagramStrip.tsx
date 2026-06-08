import { PhotoFrame } from "@/components/PhotoFrame";
import { contact, instagramFeedPhotos, instagramSection } from "@/lib/site-data";

export function InstagramStrip() {
  return (
    <section className="instagram-strip section-pad" aria-labelledby="instagram-heading">
      <div className="container-liquid">
        <div className="instagram-strip-head">
          <div>
            <p className="kicker">{instagramSection.kicker}</p>
            <h2 id="instagram-heading" className="section-title max-w-3xl">
              {instagramSection.title}
            </h2>
          </div>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="text-link">
            {contact.instagramHandle} →
          </a>
        </div>
      </div>

      <div className="instagram-strip-grid-wrap">
        <div className="instagram-strip-grid">
          {instagramFeedPhotos.map((photo) => (
            <a
              key={photo.src}
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-strip-item bg-white"
              aria-label={`Apri Instagram — ${photo.alt}`}
            >
              <PhotoFrame src={photo.src} alt={photo.alt} sizes="(max-width: 768px) 50vw, 25vw" />
            </a>
          ))}
        </div>
      </div>

      <div className="container-liquid">
        <p className="instagram-strip-note">{instagramSection.note}</p>
      </div>
    </section>
  );
}
