import { PhotoFrame } from "@/components/PhotoFrame";

export type PortfolioMasonryItem = { src: string; alt: string };

type PortfolioMasonryProps = {
  items: PortfolioMasonryItem[];
  sizes?: string;
  className?: string;
};

export function PortfolioMasonry({ items, sizes = "100vw", className = "" }: PortfolioMasonryProps) {
  return (
    <div className={`photo-stack ${className}`}>
      {items.map((item, index) => (
        <div key={`${item.src}-${index}`}>
          <PhotoFrame src={item.src} alt={item.alt} sizes={sizes} />
        </div>
      ))}
    </div>
  );
}
