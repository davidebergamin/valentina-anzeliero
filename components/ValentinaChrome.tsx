import Image from "next/image";

const instagramHref =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={28}
      height={28}
      aria-hidden
      focusable="false"
    >
      <defs>
        <linearGradient id="instagram-gradient-glyph" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="45%" stopColor="#e6683c" />
          <stop offset="60%" stopColor="#dc2743" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagram-gradient-glyph)"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  );
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Matrimoni", href: "/matrimoni" },
  { label: "Storie", href: "/storie" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pb-16 pt-24 text-center md:pb-20 md:pt-28">
      <a href="/" aria-label="Valentina Anzeliero home" className="relative px-10 py-5">
        <span className="absolute inset-x-0 top-4 border-t border-[#9b968f]" />
        <span className="absolute inset-y-4 left-0 border-l border-[#9b968f]" />
        <span className="absolute inset-y-4 right-0 border-r border-[#9b968f]" />
        <span className="absolute inset-x-0 bottom-4 border-b border-[#9b968f]" />
        <span className="serif block text-3xl uppercase tracking-[0.42em] text-[#4a4540] md:text-5xl">
          Valentina
        </span>
        <span className="serif mt-1 block text-right text-xl italic tracking-[0.04em] text-[#706962] md:text-2xl">
          photographer
        </span>
      </a>
      <nav
        aria-label="Navigazione principale"
        className="mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-[0.62rem] uppercase tracking-[0.18em] text-[#5d5751]"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="border-b border-transparent pb-1 transition hover:border-[#5d5751]"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#d9e1e1] px-6 py-10 text-center">
      <div className="mx-auto max-w-[1220px] border-t border-[#9da7a7] pt-7">
        <a
          href={instagramHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram — Valentina Anzeliero Photografa"
          className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:ring-black/10"
        >
          <InstagramIcon />
        </a>
        <p className="serif mt-4 text-sm italic text-[#6c7473]">Instagram</p>
        <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-[#7d8786]">
          Treviso · Vicenza · Veneto
        </p>
      </div>
    </footer>
  );
}

export function ImagePanel({
  src,
  alt,
  className,
  priority = false,
  sizes = "(max-width: 768px) 92vw, 42vw"
}: {
  src: string;
  alt: string;
  className: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#f2f2f2] ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
