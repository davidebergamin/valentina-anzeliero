"use client";

import { useCallback, useEffect, useRef } from "react";
import { PhotoFrame } from "@/components/PhotoFrame";
import type { Review } from "@/lib/site-data";
import { matrimonioProfileUrl, reviewStats, reviews } from "@/lib/site-data";

const LOOP_COPIES = 2;

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review-card">
      <div className="review-card-stars" aria-label="Valutazione 5 su 5">
        <span aria-hidden="true">★★★★★</span>
      </div>
      <blockquote>“{review.text}”</blockquote>
      <figcaption>
        <span>{review.name}</span>
        <small>
          {review.title} · {review.date}
        </small>
      </figcaption>
    </figure>
  );
}

export function RecensioniSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const setWidthRef = useRef(0);
  const isRepositioningRef = useRef(false);
  const loopReviews = Array.from({ length: LOOP_COPIES }, () => reviews).flat();
  const featured = reviews[0];

  const measureSetWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const cards = track.querySelectorAll<HTMLElement>(".review-card");
    if (cards.length < reviews.length) return 0;
    const gap = parseFloat(getComputedStyle(track).gap || "0");
    let width = 0;
    for (let i = 0; i < reviews.length; i += 1) {
      width += cards[i].offsetWidth;
      if (i < reviews.length - 1) width += gap;
    }
    return width;
  }, []);

  const repositionIfNeeded = useCallback(() => {
    const track = trackRef.current;
    const setWidth = setWidthRef.current;
    if (!track || !setWidth || isRepositioningRef.current) return;

    if (track.scrollLeft >= setWidth - 2) {
      isRepositioningRef.current = true;
      track.style.scrollBehavior = "auto";
      track.scrollLeft -= setWidth;
      track.style.scrollBehavior = "smooth";
      isRepositioningRef.current = false;
      return;
    }

    if (track.scrollLeft <= 2) {
      isRepositioningRef.current = true;
      track.style.scrollBehavior = "auto";
      track.scrollLeft += setWidth;
      track.style.scrollBehavior = "smooth";
      isRepositioningRef.current = false;
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const init = () => {
      const setWidth = measureSetWidth();
      if (!setWidth) return;
      setWidthRef.current = setWidth;
      track.style.scrollBehavior = "auto";
      track.scrollLeft = setWidth;
      track.style.scrollBehavior = "smooth";
    };

    init();

    const onScrollEnd = () => repositionIfNeeded();
    track.addEventListener("scrollend", onScrollEnd);

    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const onScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(onScrollEnd, 150);
    };
    track.addEventListener("scroll", onScroll, { passive: true });

    const observer = new ResizeObserver(() => {
      const previousSetWidth = setWidthRef.current;
      const setWidth = measureSetWidth();
      if (!setWidth) return;
      if (previousSetWidth > 0 && track.scrollLeft > 0) {
        const ratio = track.scrollLeft / previousSetWidth;
        track.style.scrollBehavior = "auto";
        track.scrollLeft = setWidth * ratio;
        track.style.scrollBehavior = "smooth";
      }
      setWidthRef.current = setWidth;
    });
    observer.observe(track);

    return () => {
      track.removeEventListener("scrollend", onScrollEnd);
      track.removeEventListener("scroll", onScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      observer.disconnect();
    };
  }, [measureSetWidth, repositionIfNeeded]);

  return (
    <section className="reviews-section section-pad" aria-labelledby="reviews-title">
      <div className="container-liquid">
        <div className="reviews-head">
          <div className="reviews-head-copy">
            <p className="kicker">Recensioni</p>
            <h2 id="reviews-title" className="section-title">
              Le parole delle coppie.
            </h2>
            <div className="reviews-trust" aria-label="Valutazione su Matrimonio.com">
              {reviewStats.map((stat, index) => (
                <span key={stat.label} className="reviews-trust-item">
                  {index > 0 ? <span className="reviews-trust-dot" aria-hidden="true"> · </span> : null}
                  <strong>{stat.value}</strong> {stat.label}
                </span>
              ))}
            </div>
          </div>
          <a href={matrimonioProfileUrl} target="_blank" rel="noopener noreferrer" className="text-link reviews-head-link">
            Leggi tutte su Matrimonio.com →
          </a>
        </div>

        <div className="reviews-featured">
          <div className="reviews-featured__photo">
            <PhotoFrame src="/photos/120.webp" alt="Momento di matrimonio nel Veneto" priority sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <figure className="review-card review-card--spotlight">
            <div className="review-card-stars" aria-label="Valutazione 5 su 5">
              <span aria-hidden="true">★★★★★</span>
            </div>
            <blockquote>“{featured.text}”</blockquote>
            <figcaption>
              <span>{featured.name}</span>
              <small>
                {featured.title} · {featured.date}
              </small>
            </figcaption>
          </figure>
        </div>

        <div ref={trackRef} className="reviews-track">
          {loopReviews.map((review, index) => (
            <ReviewCard key={`${review.name}-${review.date}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
