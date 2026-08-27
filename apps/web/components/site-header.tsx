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
    <header className="sticky top-0 z-50 border-b border-heal-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center rounded-sm"
          aria-label="HEAL Community home"
          onClick={closeMenu}
        >
          <Image
            src="/heal-community-logo.png"
            alt="HEAL Community"
            width={240}
            height={90}
            priority
            className="h-auto w-[184px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.015] sm:w-[220px] lg:w-[250px]"
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
                className={`group relative rounded-sm py-3 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold ${
                  active ? "text-heal-navy" : "text-heal-slate-dark hover:text-heal-emerald"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 bottom-1 h-px bg-heal-emerald transition-transform duration-200 origin-left ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}

          <span className="ml-1 h-5 w-px bg-heal-border" aria-hidden="true" />

          <Link
            href="/get-involved"
            aria-current={isActivePath(pathname, "/get-involved") ? "page" : undefined}
            className="rounded-sm py-3 text-[13px] font-bold text-heal-navy transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
          >
            Get involved <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-sm text-heal-navy transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden="true">
            <span className={`absolute h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45" : "-translate-y-[5px]"}`} />
            <span className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute h-px w-5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45" : "translate-y-[5px]"}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`border-t border-heal-border bg-background transition-[opacity,visibility] duration-200 lg:hidden ${
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
                  className={`border-b border-heal-border py-4 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heal-gold ${
                    active ? "text-heal-emerald" : "text-heal-navy hover:text-heal-emerald"
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
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-sm py-3 text-sm font-bold text-heal-navy transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-heal-gold"
            >
              Get involved <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

