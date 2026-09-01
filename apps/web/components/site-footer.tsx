import Link from "next/link";

const exploreLinks = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Knowledge", href: "/articles" },
  { label: "Initiatives", href: "/initiatives" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/heal-community/",
    icon: "linkedin",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/_healcommunity_",
    icon: "x",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_healcommunity_/",
    icon: "instagram",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@_healcommunity_",
    icon: "threads",
  },
  {
    label: "Substack",
    href: "https://healcommunity25.substack.com/",
    icon: "substack",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@healcommunity25",
    icon: "youtube",
  },
];

const whatsappLinks = [
  {
    label: "WhatsApp Channel",
    href: "https://www.whatsapp.com/channel/0029Vb8RkZqA2pL7Pz93VH0F",
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/H5Jmb1weV5xDoMZImy8kku?mlu=4&p=i&s=cl",
  },
];

function SocialIcon({ type }: { type: string }) {
  const common = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    className: "h-[18px] w-[18px] shrink-0",
  };

  switch (type) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
        </svg>
      );

    case "x":
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg {...common}>
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0-3 0Z" />
        </svg>
      );

    case "threads":
      return (
        <svg {...common}>
          <path d="M12.186 2C6.36 2 2.5 5.64 2.5 11.73c0 6.42 3.7 10.27 9.72 10.27 5.7 0 9.28-3.05 9.28-7.77 0-4.12-2.62-6.54-6.77-6.54h-.24c-.38-1.72-1.63-2.93-3.94-2.93-2.47 0-4.15 1.37-4.15 3.37 0 1.73 1.27 2.85 3.38 3.15l.38-1.76c-1.14-.17-1.7-.63-1.7-1.38 0-.91.82-1.52 2.04-1.52 1.48 0 2.26.72 2.49 2.27-4.54.1-7.05 1.7-7.05 4.61 0 2.55 2.06 4.35 4.98 4.35 2.57 0 4.42-1.13 5.05-3.17 1.22.49 1.8 1.34 1.8 2.59 0 2.61-2.16 4.16-5.55 4.16-4.68 0-7.57-2.93-7.57-8.68 0-5.29 2.99-8.25 7.53-8.25 3.57 0 5.91 1.58 6.91 4.65l1.83-.65C18.11 3.88 15.77 2 12.186 2Zm-.26 11.57c1.48 0 2.56.65 2.56 1.72 0 1.11-1.01 1.8-2.65 1.8-1.69 0-2.78-.77-2.78-1.94 0-1.04.92-1.58 2.87-1.58Z" />
        </svg>
      );

    case "substack":
      return (
        <svg {...common}>
          <path d="M3 3h18v2H3V3Zm0 4h18v2H3V7Zm0 4h18v2H3v-2Zm0 4h18v6l-9-5-9 5v-6Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...common}>
          <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.58A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.58 9.39.58 9.39.58s7.52 0 9.39-.58a3 3 0 0 0 2.11-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      );

    default:
      return null;
  }
}

export default function SiteFooter() {
  return (
    <footer
      className="border-t border-white/10"
      style={{
        backgroundColor: "#0b1f3a",
        color: "#ffffff",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Institution */}
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.16em]"
              style={{ color: "#c9a44c" }}
            >
              Institution
            </h2>

            <p
              className="mt-4 max-w-sm text-sm font-bold leading-7"
              style={{ color: "#008f6b" }}
            >
              Healthcare Education &amp; Awareness Lab
            </p>

            <p
              className="mt-3 max-w-sm text-sm leading-7"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Advancing health education, journalism, documentation, digital
              health, and community engagement through purposeful communication.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.16em]"
              style={{ color: "#c9a44c" }}
            >
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
                  className="w-fit text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Follow */}
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.16em]"
              style={{ color: "#c9a44c" }}
            >
              Follow
            </h2>

            <nav
              aria-label="HEAL social media"
              className="mt-4 flex flex-col gap-3"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-fit items-center gap-3 text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  <span
                    className="transition-colors group-hover:text-heal-gold"
                    style={{ color: "#c9a44c" }}
                  >
                    <SocialIcon type={link.icon} />
                  </span>

                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Community */}
          <div>
            <h2
              className="text-sm font-semibold uppercase tracking-[0.16em]"
              style={{ color: "#c9a44c" }}
            >
              Community
            </h2>

            <h3 className="mt-4 text-base font-semibold text-white">
              Stay connected with HEAL
            </h3>

            <p
              className="mt-3 text-sm leading-7"
              style={{ color: "rgba(255,255,255,0.70)" }}
            >
              Follow our health education, awareness, publications, and
              community updates on WhatsApp.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {whatsappLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit text-sm font-medium transition-colors hover:text-white"
                  style={{ color: "#008f6b" }}
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p style={{ color: "rgba(255,255,255,0.60)" }}>
            © 2026 Healthcare Education &amp; Awareness Lab. All rights
            reserved.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <span style={{ color: "rgba(255,255,255,0.60)" }}>
              Built with passion by{" "}
              <a
                href="https://www.linkedin.com/in/abdulraheemolurode25"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c9a44c",
                  fontWeight: 700,
                }}
              >
                AbdulRaheem Olurode
              </a>
            </span>

            <span
              className="hidden sm:inline"
              style={{ color: "rgba(255,255,255,0.20)" }}
            >
              •
            </span>

            <div
              className="flex gap-4"
              style={{ color: "rgba(255,255,255,0.60)" }}
            >
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}