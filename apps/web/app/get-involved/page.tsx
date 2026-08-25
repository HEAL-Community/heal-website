import Link from "next/link";

const pathways = [
  {
    title: "Collaborate",
    description:
      "Work with HEAL on healthcare education, journalism, documentation, research communication, digital health, or community initiatives.",
    href: "#contact",
    action: "Discuss a collaboration",
  },
  {
    title: "Contribute",
    description:
      "Bring your expertise, ideas, writing, design, research, technology, or communication skills to meaningful healthcare work.",
    href: "#contact",
    action: "Explore contributing",
  },
  {
    title: "Partner",
    description:
      "Partner with HEAL to develop, support, or extend initiatives that improve how healthcare knowledge reaches people.",
    href: "#contact",
    action: "Explore partnership",
  },
];

export default function GetInvolvedPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[65vh] items-end gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Get involved
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-heal-navy sm:text-6xl lg:text-7xl">
                Better health communication
                <br />
                <span className="text-heal-emerald">
                  is built together.
                </span>
              </h1>
            </div>

            <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:mb-2 lg:ml-auto">
              <p className="text-lg leading-8 text-heal-slate-dark">
                HEAL brings together people and organizations working to make
                healthcare knowledge more accessible, useful, and meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Work with us
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-4xl">
                There are many ways to contribute to healthier communities.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                Whether you bring professional expertise, creative skills,
                institutional capacity, or simply a commitment to better health
                communication, there is room to contribute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="border-t border-heal-border">
            {pathways.map((pathway) => (
              <div
                key={pathway.title}
                className="grid gap-8 border-b border-heal-border py-12 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-4">
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-heal-gold"
                    aria-hidden="true"
                  />

                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-heal-navy">
                    {pathway.title}
                  </h2>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-xl leading-7 text-heal-slate-dark">
                    {pathway.description}
                  </p>

                  <Link
                    href={pathway.href}
                    className="mt-6 inline-flex border-b border-heal-emerald pb-1 text-sm font-bold text-heal-navy transition hover:text-heal-emerald"
                  >
                    {pathway.action} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP COMMUNITY */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Stay connected
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                Join the HEAL community.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <p className="max-w-2xl text-lg leading-8 text-heal-slate-dark">
                Follow HEAL on WhatsApp for health education, awareness
                campaigns, publications, updates, and opportunities to engage
                with our work.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {/* WhatsApp Channel */}
                <div className="border-t border-heal-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-heal-gold">
                    WhatsApp Channel
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold text-heal-navy">
                    Follow HEAL
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-heal-slate-dark">
                    Receive publications, health information, announcements,
                    and awareness content.
                  </p>

                  <span className="mt-5 inline-block text-sm font-bold text-heal-slate">
                    Channel link coming soon
                  </span>
                </div>

                {/* WhatsApp Community */}
                <div className="border-t border-heal-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-heal-gold">
                    WhatsApp Community
                  </p>

                  <h3 className="mt-3 text-xl font-extrabold text-heal-navy">
                    Join the community
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-heal-slate-dark">
                    Connect with people interested in healthcare education,
                    awareness, and community engagement.
                  </p>

                  <span className="mt-5 inline-block text-sm font-bold text-heal-slate">
                    Community link coming soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Start a conversation
              </p>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Have an idea worth exploring?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                Tell us what you are working on, how you would like to
                contribute, or where you think HEAL could collaborate with you.
              </p>

              <Link
                href="mailto:hello@healcommunity.net"
                className="mt-9 inline-flex border-b-2 border-heal-gold pb-1 text-sm font-bold text-white transition hover:text-heal-gold"
              >
                Send a mail message to HEAL →
              </Link>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-heal-gold">
                  Institutional contact
                </p>

                <p className="mt-4 text-lg font-bold">
                  HEAL — Healthcare Education & Awareness Lab
                </p>

                <a
                  href="mailto:hello@healcommunity.net"
                  className="mt-3 inline-block text-sm text-slate-300 transition hover:text-white"
                >
                  hello@healcommunity.net
                </a>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Official communication channel for partnerships,
                  collaboration, and institutional enquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}