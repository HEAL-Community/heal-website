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
    "aria-hidden": true,
    className: "h-[18px] w-[18px] shrink-0",
  };

  switch (type) {
    case "linkedin":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
        </svg>
      );

    case "x":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      );

    case "instagram":
      return (
        <svg
          {...common}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );

    case "threads":
  return (
    <svg
      {...common}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098c1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015c-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164c1.43 1.783 3.631 2.698 6.54 2.717c2.623-.02 4.358-.631 5.8-2.045c1.647-1.613 1.618-3.593 1.09-4.798c-.31-.71-.873-1.3-1.634-1.75c-.192 1.352-.622 2.446-1.284 3.272c-.886 1.102-2.14 1.704-3.73 1.79c-1.202.065-2.361-.218-3.259-.801c-1.063-.689-1.685-1.74-1.752-2.964c-.065-1.19.408-2.285 1.33-3.082c.88-.76 2.119-1.207 3.583-1.291a14 14 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757c-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32l-1.757-1.18c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388q.163.07.321.142c1.49.7 2.58 1.761 3.154 3.07c.797 1.82.871 4.79-1.548 7.158c-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69q-.362 0-.739.021c-1.836.103-2.98.946-2.916 2.143c.067 1.256 1.452 1.839 2.784 1.767c1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221" />
    </svg>
  );

    case "substack":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
          <path d="M3 3h18v2H3V3Zm0 4h18v2H3V7Zm0 4h18v2H3v-2Zm0 4h18v6l-9-5-9 5v-6Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg
          {...common}
          fill="currentColor"
        >
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
              className="mt-4 max-w-sm text-sm leading-7"
              style={{ color: "rgba(255,255,255,0.85)" }}
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
                  <SocialIcon type={link.icon} />
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