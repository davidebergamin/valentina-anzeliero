type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoFrame({ src, alt, className = "", priority = false }: PhotoFrameProps) {
  return (
    <figure className={`photo-frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
    </figure>
  );
}
