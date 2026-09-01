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
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/_healcommunity_",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_healcommunity_/",
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@_healcommunity_",
  },
  {
    label: "Substack",
    href: "https://healcommunity25.substack.com/",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@healcommunity25",
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

export default function SiteFooter() {
  return (
    <footer
      style={{
        backgroundColor: "#0b1f3a",
        color: "#ffffff",
      }}
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Institution */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
              Institution
            </h2>

            <p
              className="mt-4 max-w-sm text-sm leading-7"
              style={{ color: "rgba(255,255,255,0.70)" }}
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
                  className="w-fit text-sm"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Follow */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
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
                  className="w-fit text-sm"
                  style={{ color: "rgba(255,255,255,0.70)" }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Community */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
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
                  className="w-fit text-sm font-medium"
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