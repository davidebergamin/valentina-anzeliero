import { PhotoFrame } from "@/components/PhotoFrame";

export type PortfolioMasonryItem = { src: string; alt: string };

type PortfolioMasonryProps = {
  items: PortfolioMasonryItem[];
  sizes?: string;
  className?: string;
};

export function PortfolioMasonry({ items, sizes = "(max-width: 768px) 100vw, 46vw", className = "" }: PortfolioMasonryProps) {
  return (
    <div className={`photo-grid--gallery ${className}`}>
      {items.map((item, index) => (
        <div key={`${item.src}-${index}`}>
          <PhotoFrame src={item.src} alt={item.alt} sizes={sizes} />
        </div>
      ))}
    </div>
  );
}
