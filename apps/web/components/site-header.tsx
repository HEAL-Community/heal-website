"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-heal-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="HEAL Community home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/heal-symbol.png"
            alt=""
            width={64}
            height={64}
            priority
            aria-hidden="true"
            className="size-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:size-10"
          />
          <Image
            src="/heal-community-logo.png"
            alt=""
            width={192}
            height={72}
            priority
            aria-hidden="true"
            className="h-auto w-[112px] object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:w-[150px] lg:w-[180px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-2 text-[13px] font-semibold text-heal-slate-dark transition-colors hover:text-heal-emerald"
            >
              {item.label}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-heal-emerald transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <span className="ml-1 h-5 w-px bg-heal-border" />

          <Link
            href="/get-involved"
            className="text-[13px] font-bold text-heal-navy transition-colors hover:text-heal-emerald"
          >
            Get involved →
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex min-h-11 min-w-11 items-center justify-center rounded-sm text-heal-navy transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-current transition-opacity duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute h-px w-5 bg-current transition-transform duration-200 ${
                menuOpen ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-heal-border bg-white lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto max-w-7xl px-6 py-6"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-heal-border py-4 text-lg font-bold text-heal-navy transition-colors hover:text-heal-emerald"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/get-involved"
              onClick={() => setMenuOpen(false)}
              className="mt-6 inline-flex w-fit items-center text-sm font-bold text-heal-navy transition-colors hover:text-heal-emerald"
            >
              Get involved
              <span className="ml-2">→</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
