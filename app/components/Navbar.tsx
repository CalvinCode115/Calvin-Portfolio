"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "About",       href: "/" },
  { label: "Projects",    href: "/projects" },
  { label: "Achievement", href: "/achievement" },
  { label: "Work",        href: "/work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    isActive(href)
      ? "text-accent font-medium"
      : "text-foreground hover:text-accent transition-colors";

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Wordmark */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Calvin&apos;s Portfolio
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`text-sm ${linkClass(l.href)}`}>
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white hover:bg-accent-600 transition-colors"
          >
            Download Resume
          </a>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden p-2 text-foreground"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            /* ✕ icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="3" x2="17" y2="17" />
              <line x1="17" y1="3" x2="3" y2="17" />
            </svg>
          ) : (
            /* ☰ icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="5"  x2="17" y2="5"  />
              <line x1="3" y1="10" x2="17" y2="10" />
              <line x1="3" y1="15" x2="17" y2="15" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm ${linkClass(l.href)}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 w-fit rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white hover:bg-accent-600 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
