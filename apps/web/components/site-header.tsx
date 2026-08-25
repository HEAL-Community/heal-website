import Link from "next/link";

const navigation = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge Hub", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="HEAL Community home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-heal-navy text-sm font-extrabold tracking-tight text-white">
            H
          </div>

          <div className="leading-none">
            <div className="text-lg font-extrabold tracking-tight text-heal-navy">
              HEAL
            </div>

            <div className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-heal-slate sm:block">
              Healthcare Education & Awareness Lab
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-heal-slate-dark transition hover:text-heal-emerald"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/get-involved"
            className="rounded-full bg-heal-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-heal-emerald"
          >
            Get Involved
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-heal-border text-heal-navy transition hover:border-heal-emerald hover:text-heal-emerald lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}