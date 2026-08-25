import Link from "next/link";
import { getArticles } from "@/lib/queries";

type Article = {
  _id: string;
  slug: string;
  title: string;
  excerpt?: string;
  contentType?: string;
  featured?: boolean;
};

const areasOfWork = [
  {
    title: "Health Education",
    description:
      "Making credible healthcare knowledge understandable, accessible, and useful.",
  },
  {
    title: "Health Journalism",
    description:
      "Responsible reporting and storytelling around healthcare, public health, research, and medicine.",
  },
  {
    title: "Healthcare Documentation",
    description:
      "Turning complex healthcare information into clear, structured, and useful resources.",
  },
  {
    title: "Public Health Communication",
    description:
      "Connecting evidence, health systems, and communities through purposeful communication.",
  },
  {
    title: "Digital Health",
    description:
      "Using technology to expand access to healthcare knowledge and information.",
  },
  {
    title: "Research Communication",
    description:
      "Making research and evidence more accessible beyond academic and professional spaces.",
  },
  {
    title: "One Health",
    description:
      "Exploring the interconnected health of people, animals, and the environment.",
  },
  {
    title: "Healthcare Innovation",
    description:
      "Developing responsible ideas, systems, and tools for better health communication.",
  },
];

export default async function Home() {
  const articles = (await getArticles()) as Article[];

  const featuredArticles = articles.filter((article) => article.featured);
  const latestArticles = articles.slice(0, 4);
  const leadArticle = featuredArticles[0];

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[calc(100vh-76px)] items-center gap-16 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24 lg:py-24">
            <div>
              <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Healthcare Education & Awareness Lab (HEAL)
              </p>

              <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-heal-navy sm:text-6xl lg:text-7xl xl:text-[84px]">
                Better communication
                <br />
                <span className="text-heal-emerald">saves lives.</span>
              </h1>

              <p className="mt-9 max-w-xl text-lg font-medium leading-8 text-heal-navy/75 sm:text-xl">
                Building Healthier Communities Through Communication.
              </p>
            </div>

            <div className="lg:mb-2">
              <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:ml-auto">
                <p className="text-base leading-7 text-heal-slate-dark sm:text-lg">
                  HEAL bridges the gap between credible healthcare knowledge
                  and the communities that need it through education,
                  journalism, documentation, communication, and technology.
                </p>

                <Link
                  href="/articles"
                  className="group mt-8 inline-flex items-center text-sm font-bold text-heal-navy transition-colors hover:text-heal-emerald"
                >
                  Explore the Knowledge Hub
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Conviction */}
      <section className="bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Our conviction
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <blockquote className="text-3xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-4xl lg:text-5xl">
                Healthcare knowledge should reach the people who need it.
              </blockquote>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                Information should not remain confined to institutions,
                professionals, or academic literature. HEAL works to move
                credible knowledge from evidence to communication, from
                communication to community, and from community to action.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="border-y border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 md:grid-cols-3 md:divide-x md:divide-heal-border">
            <div className="md:pr-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Purpose
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-heal-navy">
                Educate.
              </h2>

              <p className="mt-4 leading-7 text-heal-slate-dark">
                Make healthcare knowledge understandable, accessible, and
                useful.
              </p>
            </div>

            <div className="border-t border-heal-border pt-10 md:border-t-0 md:px-10 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Purpose
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-heal-navy">
                Inform.
              </h2>

              <p className="mt-4 leading-7 text-heal-slate-dark">
                Communicate responsibly through journalism, awareness, and
                public health communication.
              </p>
            </div>

            <div className="border-t border-heal-border pt-10 md:border-t-0 md:pl-10 md:pt-0">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Purpose
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-heal-navy">
                Innovate.
              </h2>

              <p className="mt-4 leading-7 text-heal-slate-dark">
                Use technology and purposeful creativity to expand how
                healthcare knowledge reaches people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
              Where healthcare meets communication.
            </h2>

            <p className="mt-6 text-lg leading-8 text-heal-slate-dark">
              HEAL works across disciplines to make healthcare knowledge more
              accessible, useful, and actionable.
            </p>
          </div>

          <div className="mt-16 grid border-t border-heal-border sm:grid-cols-2 lg:grid-cols-4">
            {areasOfWork.map((area) => (
              <div
                key={area.title}
                className="border-b border-heal-border py-8 sm:px-8 lg:px-6"
              >
                <h3 className="text-xl font-extrabold text-heal-navy">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-heal-slate-dark">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Knowledge
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
                Knowledge worth sharing.
              </h2>
            </div>

            <Link
              href="/articles"
              className="text-sm font-bold text-heal-navy transition hover:text-heal-emerald"
            >
              Explore all publications →
            </Link>
          </div>

          {leadArticle ? (
            <div className="mt-16 grid gap-12 lg:grid-cols-[1.4fr_0.6fr]">
              <Link
                href={`/articles/${leadArticle.slug}`}
                className="group border-t-2 border-heal-navy pt-7"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
                  {leadArticle.contentType || "Featured"}
                </p>

                <h3 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-heal-navy transition group-hover:text-heal-emerald sm:text-4xl lg:text-5xl">
                  {leadArticle.title}
                </h3>

                {leadArticle.excerpt && (
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                    {leadArticle.excerpt}
                  </p>
                )}

                <p className="mt-8 text-sm font-bold text-heal-navy">
                  Read publication →
                </p>
              </Link>

              <div className="space-y-8">
                {latestArticles.slice(0, 3).map((article) => (
                  <Link
                    key={article._id}
                    href={`/articles/${article.slug}`}
                    className="group block border-t border-heal-border pt-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-heal-gold">
                      {article.contentType || "Publication"}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold leading-snug text-heal-navy transition group-hover:text-heal-emerald">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="mt-2 text-sm leading-6 text-heal-slate">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="mt-16 border-t border-heal-border pt-7">
              <p className="text-lg text-heal-slate-dark">
                Publications from the HEAL Knowledge Hub will appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* The HEAL Approach */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                The HEAL approach
              </p>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <h2 className="text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
                From evidence to action.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                We believe communication is part of the healthcare
                infrastructure. Our work connects evidence with people,
                knowledge with understanding, and understanding with action.
              </p>

              <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-4 text-2xl font-extrabold text-heal-navy sm:text-3xl">
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

      {/* Our Journey */}
      <section className="border-y border-heal-border bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Our journey
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                From Sokoto, forward.
              </h2>
            </div>

            <div>
              <div className="grid gap-10 sm:grid-cols-3">
                <div>
                  <p className="text-4xl font-extrabold text-heal-gold">
                    2025
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    HEAL is founded on the conviction that better communication
                    saves lives.
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-extrabold text-heal-gold">
                    2026
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Sokoto Studio marks the beginning of its
                    operational phase.
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-extrabold text-heal-gold">
                    Beyond
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Building responsibly across Nigeria and, ultimately,
                    Africa.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-12 inline-block text-sm font-bold text-white transition hover:text-heal-gold"
              >
                Read the HEAL story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
              Healthcare Education & Awareness Lab (HEAL)
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-5xl lg:text-6xl">
              Building healthier communities through communication.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-heal-slate-dark">
              Better health communication requires people and institutions
              willing to build it together.
            </p>

            <Link
              href="/get-involved"
              className="mt-9 inline-flex border-b-2 border-heal-emerald pb-1 text-sm font-bold text-heal-navy transition hover:text-heal-emerald"
            >
              Get involved with HEAL →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}