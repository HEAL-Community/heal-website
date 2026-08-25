import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-heal-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="HEAL Community home"
        >
          <div className="flex h-9 w-9 items-center justify-center border border-heal-navy text-sm font-extrabold tracking-tight text-heal-navy transition group-hover:border-heal-emerald group-hover:text-heal-emerald">
            H
          </div>

          <div className="leading-none">
            <div className="text-lg font-extrabold tracking-[-0.03em] text-heal-navy">
              HEAL
            </div>

            <div className="mt-1 hidden text-[8px] font-semibold uppercase tracking-[0.14em] text-heal-slate sm:block">
              Healthcare Education & Awareness Lab
            </div>
          </div>
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center text-heal-navy transition-colors hover:text-heal-emerald lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}