import Link from "next/link";

const areas = [
  {
    title: "Healthcare Education",
    description:
      "We translate healthcare knowledge into clear, accessible information that helps people understand health, make informed decisions, and engage more confidently with healthcare.",
  },
  {
    title: "Health Journalism",
    description:
      "We report, interpret, and tell health stories with accuracy, context, and responsibility, keeping public interest at the centre of healthcare communication.",
  },
  {
    title: "Healthcare Documentation",
    description:
      "We turn complex healthcare knowledge, processes, and systems into structured documentation that people and organisations can understand, navigate, and use.",
  },
  {
    title: "Health Communication",
    description:
      "We develop campaigns, editorial content, and communication materials designed to move audiences from awareness to understanding and action.",
  },
  {
    title: "Digital Health",
    description:
      "We explore and build digital experiences that make healthcare information more accessible, useful, and connected to the people who need it.",
  },
  {
    title: "Research & Knowledge",
    description:
      "We support the discovery, synthesis, documentation, and dissemination of healthcare knowledge to strengthen evidence-informed communication.",
  },
  {
    title: "Community Engagement",
    description:
      "We create meaningful channels for dialogue between healthcare knowledge, institutions, professionals, and the communities they serve.",
  },
  {
    title: "Healthcare Innovation",
    description:
      "We explore new approaches to healthcare education, communication, documentation, and information systems, with technology as an enabler.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main>
{/* HERO */}
<section className="heal-ambient heal-grid heal-grain relative border-b border-heal-border bg-white">
  <div className="heal-orb -right-24 -top-24" />

  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="relative grid gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:gap-8 lg:py-28">
      <div className="relative z-10 lg:col-span-8">
        <p className="heal-reveal text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
          Our work
        </p>

        <h1 className="heal-reveal heal-reveal-delay-1 mt-7 max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-[-0.04em] text-heal-navy sm:text-6xl lg:text-[64px] xl:text-[76px]">
          We move healthcare knowledge forward.
        </h1>
      </div>

      <div className="relative z-10 lg:col-span-4 lg:self-end">
        <div className="heal-glass heal-interactive heal-reveal heal-reveal-delay-2 max-w-md border-l-2 border-l-heal-emerald p-6 sm:p-7">
          <p className="text-base leading-7 text-heal-slate-dark sm:text-lg">
            From evidence and expertise to communication, understanding, and
            action, we build the pathways through which healthcare knowledge
            reaches people and communities.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* AREAS OF WORK */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-heal-border">
            {areas.map((area) => (
              <article
                key={area.title}
                className="grid gap-8 border-b border-heal-border py-14 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20"
              >
                <div className="lg:col-span-5">
                  <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.025em] text-heal-navy sm:text-4xl">
                    {area.title}
                  </h2>
                </div>

                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="max-w-2xl text-lg leading-8 text-heal-slate-dark">
                    {area.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT CONNECTS */}
      <section className="border-b border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                How it connects
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] text-heal-navy sm:text-5xl">
                Different disciplines. One purpose.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                These areas are not isolated services. They work together as
                parts of a broader healthcare knowledge and communication
                ecosystem.
              </p>

              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3 text-lg font-bold text-heal-navy sm:text-xl">
                <span>Evidence</span>
                <span className="text-heal-emerald">→</span>
                <span>Education</span>
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

      {/* COLLABORATE */}
      <section className="border-t border-heal-border bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Build with us
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                Healthcare knowledge is stronger when we build it together.
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                We welcome healthcare professionals, researchers, institutions,
                journalists, creators, technologists, and communities who want
                to contribute to a better health information ecosystem.
              </p>

              <Link
                href="/get-involved"
                className="mt-10 inline-flex border-b-2 border-heal-emerald pb-1 text-sm font-bold text-white transition-colors hover:text-heal-emerald"
              >
                Explore collaboration →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
