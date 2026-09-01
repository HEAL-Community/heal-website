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
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.85-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.555 20.452h3.558V8.999H3.555v11.453ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.454C23.205 24 24 23.226 24 22.271V1.729C24 .774 23.205 0 22.225 0Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M12.186 2C6.36 2 2.5 5.64 2.5 11.73c0 6.42 3.7 10.27 9.72 10.27 5.7 0 9.28-3.05 9.28-7.77 0-4.12-2.62-6.54-6.77-6.54h-.24c-.38-1.72-1.63-2.93-3.94-2.93-2.47 0-4.15 1.37-4.15 3.37 0 1.73 1.27 2.85 3.38 3.15l.38-1.76c-1.14-.17-1.7-.63-1.7-1.38 0-.91.82-1.52 2.04-1.52 1.48 0 2.26.72 2.49 2.27-4.54.1-7.05 1.7-7.05 4.61 0 2.55 2.06 4.35 4.98 4.35 2.57 0 4.42-1.13 5.05-3.17 1.22.49 1.8 1.34 1.8 2.59 0 2.61-2.16 4.16-5.55 4.16-4.68 0-7.57-2.93-7.57-8.68 0-5.29 2.99-8.25 7.53-8.25 3.57 0 5.91 1.58 6.91 4.65l1.83-.65C18.11 3.88 15.77 2 12.186 2Zm-.26 11.57c1.48 0 2.56.65 2.56 1.72 0 1.11-1.01 1.8-2.65 1.8-1.69 0-2.78-.77-2.78-1.94 0-1.04.92-1.58 2.87-1.58Z" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M3 3h18v2H3V3Zm0 4h18v2H3V7Zm0 4h18v10l-9-5-9 5V11Z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.58 9.39.58 9.39.58s7.52 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/heal-community/",
    icon: LinkedInIcon,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/_healcommunity_",
    icon: XIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_healcommunity_",
    icon: InstagramIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@_healcommunity_",
    icon: ThreadsIcon,
  },
  {
    label: "Substack",
    href: "https://open.substack.com/pub/healcommunity25",
    icon: SubstackIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@healcommunity25",
    icon: YouTubeIcon,
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-heal-navy">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Institution
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Healthcare Education &amp; Awareness Lab
            </p>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
              Advancing health education, journalism, documentation, digital
              health, and community engagement through purposeful communication.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-4 flex flex-col gap-3"
            >
              {exploreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/70 transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Follow
            </h2>

            <nav
              aria-label="HEAL social media"
              className="mt-4 flex flex-col gap-3"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-3 text-sm text-white/70 transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Community
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              Stay connected with HEAL
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/70">
              Follow our health education, awareness, publications, and
              community updates on WhatsApp.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://whatsapp.com/channel/0029Vb8RkZqA2pL7Pz93VH0F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm font-medium text-heal-emerald transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
              >
                WhatsApp Channel ↗
              </a>

              <a
                href="https://chat.whatsapp.com/H5Jmb1weV5xDoMZImy8kku?s=cl&p=i&mlu=4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-sm font-medium text-heal-emerald transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
              >
                WhatsApp Community ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 Healthcare Education &amp; Awareness Lab. All rights
            reserved.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span>
              Built with passion by{" "}
              <a
                href="https://www.linkedin.com/in/abdulraheemolurode25"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c9a44c",
                  fontWeight: 700,
                }}
                className="transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
              >
                AbdulRaheem Olurode
              </a>
            </span>

            <span className="hidden text-white/20 sm:inline">•</span>

            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-heal-emerald focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-heal-gold"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}