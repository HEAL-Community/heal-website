import Link from "next/link";

const domains = [
  {
    title: "Knowledge",
    description:
      "Making healthcare knowledge clearer, more accessible, and more useful.",
    areas: [
      {
        title: "Health Education",
        text: "Turning complex health information into clear, practical knowledge.",
      },
      {
        title: "Research Communication",
        text: "Bringing research and evidence beyond academic and professional spaces.",
      },
      {
        title: "Healthcare Documentation",
        text: "Creating structured resources that preserve, organize, and communicate healthcare knowledge.",
      },
    ],
  },
  {
    title: "Communication",
    description:
      "Connecting evidence, health systems, and communities through purposeful communication.",
    areas: [
      {
        title: "Health Journalism",
        text: "Responsible reporting and storytelling around healthcare, medicine, and public health.",
      },
      {
        title: "Public Health Communication",
        text: "Designing communication that helps communities understand and respond to health issues.",
      },
    ],
  },
  {
    title: "Technology",
    description:
      "Using technology and innovation to expand access to healthcare knowledge.",
    areas: [
      {
        title: "Digital Health",
        text: "Exploring digital approaches that improve how health information is accessed and experienced.",
      },
      {
        title: "Healthcare Innovation",
        text: "Developing responsible ideas, systems, and tools for better health communication.",
      },
    ],
  },
  {
    title: "Community",
    description:
      "Keeping people and the environments in which they live at the centre of our work.",
    areas: [
      {
        title: "Health Awareness",
        text: "Creating purposeful campaigns that connect health knowledge with everyday communities.",
      },
      {
        title: "Community Engagement",
        text: "Working with people and institutions to understand needs and create meaningful impact.",
      },
      {
        title: "One Health",
        text: "Recognizing the interconnected health of people, animals, and the environment.",
      },
    ],
  },
];

export default function WhatWeDoPage() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[70vh] items-end gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                What we do
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-heal-navy sm:text-6xl lg:text-7xl">
                Where healthcare
                <br />
                meets{" "}
                <span className="text-heal-emerald">
                  communication.
                </span>
              </h1>
            </div>

            <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:mb-2 lg:ml-auto">
              <p className="text-lg leading-8 text-heal-slate-dark">
                HEAL works across knowledge, communication, technology, and
                community to make healthcare information more accessible,
                useful, and actionable.
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
                Our work
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-4xl">
                Communication is the thread connecting everything we do.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                From education and journalism to digital health and community
                engagement, our work begins with evidence and is designed to
                reach people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div>
            {domains.map((domain, index) => (
              <div
                key={domain.title}
                className={`grid gap-10 border-t border-heal-border py-14 lg:grid-cols-12 lg:gap-12 ${
                  index === domains.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Domain */}
                <div className="lg:col-span-4">
                  <span
                    className="block h-1.5 w-1.5 rounded-full bg-heal-gold"
                    aria-hidden="true"
                  />

                  <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                    {domain.title}
                  </h2>

                  <p className="mt-4 max-w-sm leading-7 text-heal-slate-dark">
                    {domain.description}
                  </p>
                </div>

                {/* Areas */}
                <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
                  {domain.areas.map((area) => (
                    <div key={area.title}>
                      <h3 className="text-lg font-extrabold text-heal-navy">
                        {area.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-heal-slate-dark">
                        {area.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-heal-border bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Our approach
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                Evidence to action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
                We connect credible knowledge with thoughtful communication,
                community context, and responsible innovation.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-bold tracking-wide text-white sm:text-base">
                <span>Evidence</span>
                <span className="text-heal-gold">→</span>
                <span>Communication</span>
                <span className="text-heal-gold">→</span>
                <span>Community</span>
                <span className="text-heal-gold">→</span>
                <span>Action</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
              Work with HEAL
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-5xl">
              Better health communication requires collaboration.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
              We work with healthcare professionals, researchers, institutions,
              communities, and organizations committed to healthier societies.
            </p>

            <Link
              href="/get-involved"
              className="mt-9 inline-flex border-b-2 border-heal-emerald pb-1 text-sm font-bold text-heal-navy transition hover:text-heal-emerald"
            >
              Work with HEAL →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}