"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, copy, navGroups } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainNavItems = navGroups.filter((item) => !item.href.endsWith("/contatti/"));

  useEffect(() => {
    const id = window.setTimeout(() => setMobileOpen(false), 0);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-[100] bg-[var(--header)]">
      <div className="container-liquid flex min-h-20 items-center justify-between gap-4 py-4">
        <Link href="/" className="site-logo min-w-0 shrink text-black" aria-label="Valentina Anzeliero homepage">
          Valentina Anzeliero
        </Link>

        <nav aria-label="Navigazione principale" className="site-nav hidden items-center gap-8 lg:flex">
          {mainNavItems.map((item) => (
            <div key={item.href} className="group relative py-4">
              <Link href={item.href}>{item.label}</Link>
              {item.children ? (
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 bg-white p-4 opacity-0 shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition group-hover:visible group-hover:opacity-100">
                  <div className="grid gap-2">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="site-nav-dropdown py-3 transition hover:text-black">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          {contact.instagram ? (
            <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 shrink-0 items-center justify-center text-[#252525] transition hover:text-[var(--muted)] sm:h-11 sm:w-11" aria-label="Instagram">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          ) : null}
          <Link href="/contatti/" className="btn-outline hidden border border-black px-3 py-2.5 text-black lg:inline-flex lg:items-center lg:px-4 lg:py-3">
            Contatti
          </Link>
          <button
            type="button"
            className="btn-outline flex h-11 w-11 shrink-0 items-center justify-center border border-black/20 text-black lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Chiudi menu" : "Apri menu"}</span>
            {mobileOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button type="button" className="fixed inset-x-0 bottom-0 top-20 z-[90] bg-black/35 lg:hidden" aria-label="Chiudi menu" onClick={() => setMobileOpen(false)} />
          <div id="mobile-navigation" className="fixed inset-x-0 top-20 z-[95] max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white shadow-[0_24px_48px_rgba(0,0,0,0.12)] lg:hidden">
            <nav aria-label="Navigazione principale" className="container-liquid pb-10 pt-6">
              <div className="grid gap-1">
                {mainNavItems.map((item) => (
                  <div key={item.href} className="py-4">
                    <Link href={item.href} className="site-nav block text-black" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                    {item.children ? (
                      <ul className="mt-3 grid gap-2 pl-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="site-nav-dropdown block py-2" onClick={() => setMobileOpen(false)}>
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-4">
                <Link href="/contatti/" className="btn-outline inline-flex w-full justify-center border border-black px-5 py-3 text-black sm:w-fit" onClick={() => setMobileOpen(false)}>
                  {copy.contactTitle}
                </Link>
              </div>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
