export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Healthcare Education and Awareness Lab
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Building Healthier Communities Through Communication.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-600">
            HEAL is a mission-driven health communication institution focused
            on making healthcare knowledge more accessible, understandable,
            responsible, and useful to the communities it serves.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-500">
            <span>Established 2025</span>
            <span>•</span>
            <span>Sokoto Studio · 2026</span>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.8fr_1.4fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              The beginning
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Better communication saves lives.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-600">
            <p>
              HEAL began in 2025 from a growing recognition that healthcare
              knowledge only creates meaningful impact when people can access,
              understand, trust, and use it.
            </p>

            <p>
              Its formative period involved studying health communication
              challenges, misinformation trends, public-health communication,
              and the role of technology in improving how healthcare knowledge
              reaches communities.
            </p>

            <p>
              These experiences shaped the foundation for an institution built
              around a simple conviction: better communication saves lives.
            </p>
          </div>
        </div>
      </section>

      {/* From Experience to Institution */}
      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              From experience to institution
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built from real healthcare communication experience.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              HEAL's foundation grew through exposure to public health,
              healthcare research, journalism, One Health, technology,
              documentation, and innovation.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Public Health',
                text: 'Experience in public-health communication helped shape HEAL’s commitment to accessible and responsible health information.',
              },
              {
                title: 'One Health',
                text: 'Exposure to One Health strengthened the understanding that human, animal, and environmental health are interconnected.',
              },
              {
                title: 'Health Journalism',
                text: 'Journalistic experience reinforced the importance of evidence, responsibility, clarity, and public trust in healthcare communication.',
              },
              {
                title: 'Technology & Documentation',
                text: 'Technology, digital health, and healthcare documentation provide the infrastructure for creating, organizing, and distributing knowledge.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-7"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What HEAL Is */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            What HEAL is
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
            More than a content agency.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            HEAL is being developed as an institution for healthcare
            communication, education, documentation, journalism, research,
            public health, digital health, and innovation.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Educate',
                text: 'Translate credible healthcare knowledge into accessible education and awareness.',
              },
              {
                number: '02',
                title: 'Inform',
                text: 'Communicate healthcare information responsibly through journalism, documentation, and storytelling.',
              },
              {
                number: '03',
                title: 'Innovate',
                text: 'Use technology, creativity, research, and new approaches to improve healthcare communication.',
              },
            ].map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 p-7"
              >
                <span className="text-sm text-zinc-500">{item.number}</span>
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Areas of work
          </p>

          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Connecting knowledge, communication, and innovation.
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              'Healthcare Education',
              'Health Journalism',
              'Healthcare Documentation',
              'Public Health Communication',
              'Digital Health',
              'One Health',
              'Research Communication',
              'Healthcare Innovation',
            ].map((item) => (
              <div
                key={item}
                className="border-t border-zinc-200 pt-5 text-lg font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-zinc-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              How we work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              One idea. Many channels. One message.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              HEAL approaches communication as a system rather than as
              isolated pieces of content.
            </p>
          </div>

          <div className="space-y-5">
            {[
              ['Create', 'Develop evidence-informed healthcare communication.'],
              ['Document', 'Build structured and reusable knowledge resources.'],
              ['Repurpose', 'Adapt knowledge across platforms and audiences without losing its core message.'],
              ['Distribute', 'Use digital platforms and community channels to reach people where they are.'],
              ['Learn', 'Study outcomes, feedback, and communication challenges to improve future work.'],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-zinc-200 bg-white p-6"
              >
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-zinc-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sokoto Studio */}
      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Sokoto Studio
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The beginning of HEAL's operational journey.
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                HEAL Sokoto Studio is the first operational studio in the
                institution's planned growth model, with its launch scheduled
                for September 2026.
              </p>

              <p>
                The Studio provides a practical environment for healthcare
                education, health journalism, content creation, documentation,
                digital health, community engagement, and innovation.
              </p>

              <p>
                Sokoto is the beginning of the operational journey, while the
                long-term vision extends across Nigeria and Africa.
              </p>
            </div>
          </div>

          <div className="flex items-center rounded-3xl bg-zinc-950 p-8 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Growth model
              </p>

              <p className="mt-6 text-3xl font-semibold leading-tight">
                Pilot.
                <br />
                Learn.
                <br />
                Document.
                <br />
                Replicate.
                <br />
                Scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            The HEAL Promise
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            Communication with purpose.
          </h2>

          <div className="mt-10 space-y-4 text-lg leading-8 text-zinc-600">
            <p>Communicate with integrity.</p>
            <p>Innovate with purpose.</p>
            <p>Build with responsibility.</p>
            <p>Serve communities with evidence.</p>
            <p>Pursue impact with humility.</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            HEAL
          </p>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            To Educate.
            <br />
            To Inform.
            <br />
            To Innovate.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
            Building Healthier Communities Through Communication.
          </p>
        </div>
      </section>
    </main>
  )
}
