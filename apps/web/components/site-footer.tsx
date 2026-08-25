import Link from "next/link";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

const connectLinks = [
  { label: "Get Involved", href: "/get-involved" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-heal-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-14 py-20 lg:grid-cols-[1.5fr_0.75fr_0.75fr_1fr] lg:py-24">
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label="HEAL Community home"
            >
              <span className="flex h-9 w-9 items-center justify-center border border-white text-sm font-extrabold tracking-tight">
                H
              </span>

              <span className="text-xl font-extrabold tracking-[-0.03em]">
                HEAL
              </span>
            </Link>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-heal-gold">
              Healthcare Education & Awareness Lab
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Advancing health education, journalism, documentation, digital
              health, and community engagement through purposeful communication.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
              Explore
            </p>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Footer navigation"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
              Connect
            </p>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Connect navigation"
            >
              {connectLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="mailto:hello@healcommunity.net"
                className="w-fit text-sm text-slate-300 transition-colors hover:text-white"
              >
                Email HEAL
              </a>
            </nav>
          </div>

          {/* WhatsApp */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
              Community
            </p>

            <h2 className="mt-5 text-lg font-extrabold">
              Stay connected with HEAL.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Follow our health education, awareness, publications, and
              community updates on WhatsApp.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <span className="text-sm font-semibold text-slate-400">
                WhatsApp Channel
              </span>

              <span className="text-sm font-semibold text-slate-400">
                WhatsApp Community
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/15 py-7 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Healthcare Education & Awareness Lab
            (HEAL). All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}