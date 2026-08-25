import Link from "next/link";

const principles = [
  {
    title: "Integrity",
    text: "Communicate truthfully.",
  },
  {
    title: "Evidence",
    text: "Ground the work in credible knowledge.",
  },
  {
    title: "Accessibility",
    text: "Make knowledge usable.",
  },
  {
    title: "Innovation",
    text: "Build better ways to communicate.",
  },
  {
    title: "Collaboration",
    text: "Work across disciplines and communities.",
  },
  {
    title: "Service",
    text: "Keep people at the centre.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[72vh] items-end gap-16 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                About HEAL
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-heal-navy sm:text-6xl lg:text-7xl">
                Better communication
                <br />
                <span className="text-heal-emerald">saves lives.</span>
              </h1>
            </div>

            <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:mb-2 lg:ml-auto">
              <p className="text-lg leading-8 text-heal-slate-dark">
                HEAL is a health communication institution working across
                education, journalism, documentation, public health, digital
                health, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Why we exist
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-5xl">
                Healthcare knowledge should not stop where expertise ends.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                We bridge evidence and communities through communication that
                is clear, credible, accessible, and purposeful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE */}
      <section className="border-y border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Our purpose
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
                Educate. Inform. Innovate.
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-heal-slate-dark md:text-right">
              Three words. One institutional direction.
            </p>
          </div>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Where we began
              </p>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Sokoto · 2025
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-xl leading-8 text-slate-200">
                HEAL began with a simple conviction: communication is part of
                healthcare infrastructure.
              </p>

              <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    2025
                  </p>
                  <p className="mt-2 text-sm text-slate-300">Founded</p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    2026
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Sokoto Studio
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    Beyond
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Nigeria → Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
              What we believe
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-5xl">
              Evidence deserves clarity.
              <br />
              Communities deserve access.
              <br />
              Communication deserves responsibility.
            </h2>
          </div>

          <div className="mt-16 grid border-t border-heal-border sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="border-b border-heal-border py-8 sm:px-8 lg:px-7"
              >
                <h3 className="text-xl font-extrabold text-heal-navy">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-heal-slate-dark">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOOKING AHEAD */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
              Looking ahead
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-5xl lg:text-6xl">
              From Sokoto, forward.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-heal-slate-dark">
              Building an institution for better health communication—locally
              rooted, nationally relevant, and ultimately African in reach.
            </p>

            <Link
              href="/get-involved"
              className="mt-10 inline-flex border-b-2 border-heal-emerald pb-1 text-sm font-bold text-heal-navy transition hover:text-heal-emerald"
            >
              Build with HEAL →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Healthcare Education & Awareness Lab (HEAL)
              </p>

              <p className="mt-4 text-2xl font-extrabold sm:text-3xl">
                Building Healthier Communities Through Communication.
              </p>
            </div>

            <Link
              href="/articles"
              className="text-sm font-bold text-white transition hover:text-heal-gold"
            >
              Explore the Knowledge Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}