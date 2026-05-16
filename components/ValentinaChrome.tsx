import Image from "next/image";

const instagramHref =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={26}
      height={26}
      aria-hidden
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.65" cy="6.35" r="0.95" fill="currentColor" stroke="none" />
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
          className="mx-auto inline-flex text-black transition hover:opacity-60"
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
