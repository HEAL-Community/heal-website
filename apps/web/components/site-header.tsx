"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--heal-border-subtle)] bg-[var(--heal-bg-primary)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--heal-bg-primary)]/85">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center rounded-lg"
          aria-label="HEAL Community home"
          onClick={closeMenu}
        >
          <Image
            src="/heal-community-logo.png"
            alt="HEAL Community"
            width={240}
            height={90}
            priority
            className="h-auto w-[104px] shrink-0 object-contain transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover:scale-[1.015] sm:w-[124px] lg:w-[141px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative rounded-lg py-3 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--heal-gold)] ${
                  active ? "text-[var(--heal-text-primary)]" : "text-[var(--heal-text-secondary)] hover:text-[var(--heal-emerald)]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-1 h-px bg-[var(--heal-emerald)] transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          <span className="ml-1 h-5 w-px bg-[var(--heal-border-subtle)]" aria-hidden="true" />

          <Link
            href="/get-involved"
            aria-current={isActivePath(pathname, "/get-involved") ? "page" : undefined}
            className="rounded-lg py-3 text-[13px] font-bold text-[var(--heal-text-primary)] transition-colors hover:text-[var(--heal-emerald)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--heal-gold)]"
          >
            Get involved <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg text-[var(--heal-text-primary)] transition-colors hover:text-[var(--heal-emerald)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--heal-gold)] lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
            <span className={`absolute h-px w-5 bg-current transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-px w-5 bg-current transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-out)] ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-current transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`border-t border-[var(--heal-border-subtle)] bg-[var(--heal-bg-primary)] transition-[opacity,visibility] duration-[var(--duration-fast)] ease-[var(--ease-out)] lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6" aria-label="Mobile navigation">
          <div className="flex flex-col">
            {navigation.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  tabIndex={menuOpen ? 0 : -1}
                  className={`border-b border-[var(--heal-border-subtle)] py-4 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--heal-gold)] ${
                    active ? "text-[var(--heal-emerald)]" : "text-[var(--heal-text-primary)] hover:text-[var(--heal-emerald)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/get-involved"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg py-3 text-sm font-bold text-[var(--heal-text-primary)] transition-colors hover:text-[var(--heal-emerald)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--heal-gold)]"
            >
              Get involved <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

