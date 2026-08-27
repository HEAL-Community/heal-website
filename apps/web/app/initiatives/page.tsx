import Link from "next/link";

const initiatives = [
  {
    title: "Health Education & Awareness",
    status: "Ongoing",
    description:
      "Public-facing initiatives designed to make reliable health information clearer, accessible, and relevant to everyday communities.",
  },
  {
    title: "Health Journalism",
    status: "Ongoing",
    description:
      "Responsible reporting, storytelling, and editorial work focused on healthcare, medicine, public health, and the people behind them.",
  },
  {
    title: "Healthcare Documentation",
    status: "Developing",
    description:
      "Building structured documentation and knowledge resources that make complex healthcare information easier to understand and use.",
  },
  {
    title: "Digital Health",
    status: "Developing",
    description:
      "Exploring responsible applications of technology that improve access to healthcare knowledge, communication, and information.",
  },
];

export default function InitiativesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[65vh] items-end gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Initiatives
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.05em] text-heal-navy">
                Turning ideas into
                <br />
                <span className="text-heal-emerald">meaningful work.</span>
              </h1>
            </div>

            <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:mb-2 lg:ml-auto">
              <p className="text-lg leading-8 text-heal-slate-dark">
                HEAL develops and supports initiatives that connect healthcare
                knowledge with communication, technology, and community
                engagement.
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
                Our initiatives
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-extrabold sm:text-5xl leading-[1.02] tracking-[-0.045em] text-heal-navy">
                From communication to action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                Our initiatives translate HEAL&apos;s mission into practical
                programmes, projects, and collaborations designed to improve
                how healthcare knowledge reaches people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="border-t border-heal-border">
            {initiatives.map((initiative, index) => (
              <article
                key={initiative.title}
                className="grid gap-8 border-b border-heal-border py-12 lg:grid-cols-12 lg:gap-12"
              >
                <div className="lg:col-span-1">
                  <p className="font-mono text-xs font-bold tracking-[0.18em] text-heal-gold" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                {/* Status */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-heal-gold"
                      aria-hidden="true"
                    />

                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-heal-slate">
                      {initiative.status}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:col-span-4">
                  <h2 className="text-2xl font-extrabold tracking-tight text-heal-navy sm:text-3xl">
                    {initiative.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="lg:col-span-5 lg:col-start-8">
                  <p className="max-w-xl text-base leading-7 text-heal-slate-dark">
                    {initiative.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW INITIATIVES WORK */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Our model
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
                Evidence. Communication. Impact.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                We approach initiatives with the same principle that guides
                our wider work: start with credible knowledge, communicate it
                responsibly, and design for meaningful use.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold text-heal-navy sm:text-base">
                <span>Evidence</span>
                <span className="text-heal-emerald">→</span>
                <span>Communication</span>
                <span className="text-heal-emerald">→</span>
                <span>Engagement</span>
                <span className="text-heal-emerald">→</span>
                <span>Impact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
              Collaborate
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Good initiatives are built with people.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              We welcome partnerships with healthcare professionals,
              researchers, institutions, communities, and organizations
              interested in advancing health communication.
            </p>

            <Link
              href="/get-involved"
              className="mt-9 inline-flex border-b-2 border-heal-gold pb-1 text-sm font-bold text-white transition hover:text-heal-gold"
            >
              Explore collaboration →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
