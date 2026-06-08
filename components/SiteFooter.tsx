"use client";

import Link from "next/link";
import { contact, copy, navGroups } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-black py-14 text-white">
      <div className="container-liquid grid gap-12 md:grid-cols-[1.1fr_0.85fr_0.75fr]">
        <div>
          <p className="site-logo text-white">Valentina Anzeliero</p>
          <p className="footer-tagline mt-6 max-w-md">{copy.footerText}</p>
        </div>
        <div className="grid gap-2 text-[var(--type-small)] leading-7 text-white/74">
          {contact.phone ? <a className="transition hover:text-white" href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a> : null}
          <p>{contact.address}</p>
          <p>{contact.hours}</p>
          <a href={contact.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
            {contact.instagramHandle}
          </a>
          <p>© Valentina Anzeliero Photografa</p>
        </div>
        <div className="site-nav grid gap-3 text-white/72">
          {navGroups.map((item) => (
            <Link className="transition hover:text-white" key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="transition hover:text-white" href="/contatti/">
            {copy.contactTitle}
          </Link>
        </div>
      </div>
    </footer>
  );
}
