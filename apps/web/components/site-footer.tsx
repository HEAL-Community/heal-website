import Link from "next/link";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.99H3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.41l-5.8-7.58L4.15 22H.46l8.6-9.83L0 2h7.6l5.24 6.93L18.9 2Zm-1.3 17.52h2.04L6.47 4.38H4.28L17.6 19.52Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 fill-current"
    >
      <path d="M12.1 2C6.1 2 3 5.7 3 11.7 3 18.3 6.7 22 12.5 22c5.1 0 8.5-2.7 8.5-7 0-3.9-2.5-6.3-6.5-6.8-.5-2.1-1.9-3.2-4.2-3.2-2.3 0-3.8 1.2-4.2 3.4h2.1c.3-1 .9-1.5 2-1.5 1.3 0 2 .7 2.2 1.9-4.5.1-6.8 1.8-6.8 4.8 0 2.7 2.1 4.4 5.2 4.4 3.6 0 5.8-1.9 5.8-4.9 0-.3 0-.6-.1-.9 2.1.4 3.2 1.6 3.2 3.5 0 2.8-2.3 4.5-6.1 4.5-4.7 0-7.1-3-7.1-8.8 0-4.9 2.2-7.6 6.5-7.6 3.1 0 5.2 1.4 6.1 4.2h2.1C20.3 5 17.2 2 12.1 2Zm.4 10.2c2.4 0 3.7.8 3.7 2.3 0 1.8-1.3 2.9-3.7 2.9-1.9 0-3.1-.8-3.1-2.1 0-1.9 1.5-3 3.1-3.1Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FacebookIcon,
  },
  {
    label: "X",
    href: "#",
    icon: XIcon,
  },
  {
    label: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
  {
    label: "Threads",
    href: "#",
    icon: ThreadsIcon,
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-heal-navy text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 py-20 lg:grid-cols-[1.45fr_0.75fr_0.9fr_1fr] lg:py-24">
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

          {/* Social */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
              Follow HEAL
            </p>

            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="HEAL social media"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={`Follow HEAL on ${social.label}`}
                    className="group flex w-fit items-center gap-3 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <Icon />

                    <span>{social.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Community */}
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

            <div className="mt-6 flex flex-col gap-3">
              <span className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="h-2 w-2 rounded-full bg-heal-emerald" />
                WhatsApp Channel
              </span>

              <span className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                <span className="h-2 w-2 rounded-full bg-heal-emerald" />
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