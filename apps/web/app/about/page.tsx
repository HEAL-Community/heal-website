import Link from "next/link";

const principles = [
  {
    title: "Evidence matters.",
    description:
      "Our work begins with credible evidence, responsible reporting, and a clear understanding of the subject.",
  },
  {
    title: "Clarity matters.",
    description:
      "Information becomes useful when people can understand it, interpret it, and use it.",
  },
  {
    title: "Context matters.",
    description:
      "Health is shaped by people, communities, cultures, and systems. Communication must reflect that reality.",
  },
  {
    title: "Communication matters.",
    description:
      "How knowledge is communicated can influence understanding, trust, and action.",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:items-end lg:gap-8 lg:py-28">
            <div className="lg:col-span-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                The Institution
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold sm:text-6xl lg:text-7xl leading-[0.98] tracking-[-0.05em] text-heal-navy">
                Healthcare knowledge
                <br />
                should reach the people
                <br />
                who need it.
              </h1>
            </div>

            <div className="lg:col-span-4">
              <div className="max-w-md border-l-2 border-heal-emerald pl-6 sm:pl-7">
                <p className="text-base leading-7 text-heal-slate-dark sm:text-lg">
                  The Healthcare Education & Awareness Lab works at the
                  intersection of healthcare, communication, education,
                  journalism, documentation, and technology.
                </p>

                <p className="mt-5 text-base leading-7 text-heal-slate-dark sm:text-lg">
                  We help credible healthcare knowledge move from evidence to
                  understanding and, ultimately, to action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Why we exist
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-extrabold sm:text-5xl leading-[1.02] tracking-[-0.045em] text-heal-navy">
                There is a gap between knowing and understanding.
              </h2>

              <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-heal-slate-dark">
                <p>
                  Healthcare generates knowledge every day. Research produces
                  evidence, professionals develop expertise, and institutions
                  publish guidance.
                </p>

                <p>
                  But knowledge does not automatically become useful. Language,
                  accessibility, context, trust, and communication all shape
                  whether people can understand information and act on it.
                </p>

                <p>
                  HEAL works in that space — helping make healthcare knowledge
                  clearer, more accessible, and more useful across professional
                  and community settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Our story
              </p>

              <h2 className="mt-5 max-w-sm text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-heal-navy sm:text-5xl">
                Built from a simple conviction.
              </h2>
            </div>

            <div className="max-w-3xl space-y-7 text-lg leading-8 text-heal-slate-dark">
              <p>
                HEAL began as a feasibility study in 2025, shaped by a growing
                recognition that healthcare communication should be treated as
                an essential part of how health systems work.
              </p>

              <p>
                The idea developed through work in health education,
                journalism, documentation, and public health communication,
                including efforts focused on antimicrobial resistance and
                responsible health information.
              </p>

              <p>
                These experiences helped define a broader direction: building
                an institution capable of connecting healthcare knowledge with
                the people, communities, and organisations that need it.
              </p>

              <p>
                In 2026, HEAL entered its operational phase with the development
                of its Sokoto Studio and a growing digital infrastructure for
                publishing, documentation, community engagement, and healthcare
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
              What we believe
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-heal-navy sm:text-5xl">
              Communication is part of healthcare infrastructure.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
              These principles shape how we create, document, communicate, and
              collaborate.
            </p>
          </div>

          <div className="mt-16 grid border-t border-heal-border sm:grid-cols-2">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="border-b border-heal-border py-10 sm:px-8 lg:px-10"
              >
                <h3 className="text-2xl font-extrabold tracking-tight text-heal-navy">
                  {principle.title}
                </h3>

                <p className="mt-4 max-w-md leading-7 text-heal-slate-dark">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="border-y border-heal-border bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Our approach
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl">
                From evidence to action.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                We connect credible evidence with communication that people can
                understand, communities can engage with, and systems can act
                upon.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-bold sm:text-xl">
                <span>Evidence</span>
                <span className="text-heal-emerald">→</span>
                <span>Communication</span>
                <span className="text-heal-emerald">→</span>
                <span>Community</span>
                <span className="text-heal-emerald">→</span>
                <span>Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR DIRECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Our direction
              </p>

              <h2 className="mt-5 max-w-sm text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-heal-navy sm:text-5xl">
                From Sokoto, forward.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-lg leading-8 text-heal-slate-dark">
                HEAL is being built with a Nigerian foundation and a broader
                ambition. Our immediate work is rooted in communities and
                institutions across Nigeria, with a long-term direction toward
                a wider African ecosystem for healthcare knowledge and
                communication.
              </p>

              <div className="mt-12 grid gap-8 border-t border-heal-border pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-extrabold tracking-tight text-heal-navy">
                    Sokoto
                  </p>

                  <p className="mt-2 text-sm leading-6 text-heal-slate-dark">
                    Where the operational journey begins.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold tracking-tight text-heal-navy">
                    Nigeria
                  </p>

                  <p className="mt-2 text-sm leading-6 text-heal-slate-dark">
                    Building across communities and institutions.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold tracking-tight text-heal-navy">
                    Africa
                  </p>

                  <p className="mt-2 text-sm leading-6 text-heal-slate-dark">
                    Contributing to a stronger health information ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="border-t border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
              Work with us
            </p>

            <h2 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-heal-navy sm:text-5xl lg:text-6xl">
              Better health communication is built together.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-heal-slate-dark">
              We welcome thoughtful collaboration with healthcare
              professionals, researchers, institutions, communities, and
              organisations working toward healthier societies.
            </p>

            <Link
              href="/get-involved"
              className="mt-9 inline-flex border-b-2 border-heal-emerald pb-1 text-sm font-bold text-heal-navy transition-colors hover:text-heal-emerald"
            >
              Get involved →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
