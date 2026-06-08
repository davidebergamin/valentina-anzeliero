import Link from "next/link";
import { stories } from "@/lib/site-data";
import { PhotoFrame } from "./PhotoFrame";

export function StoryGrid({ limit, variant = "stories" }: { limit?: number; variant?: "stories" | "home" }) {
  const visibleStories = typeof limit === "number" ? stories.slice(0, limit) : stories;
  const gridClass = variant === "home" ? "photo-grid photo-grid--home" : "photo-grid photo-grid--stories";
  return (
    <div className={gridClass}>
      {visibleStories.map((story) => (
        <article key={story.slug}>
          <Link href={`/${story.slug}/`} className="group block">
            <PhotoFrame src={story.image} alt={story.alt} sizes="(max-width: 768px) 100vw, 50vw" />
            <div className="story-card-meta">
              <p className="story-card-location">{story.location}</p>
              <h3 className="card-title story-card-title">{story.title}</h3>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
