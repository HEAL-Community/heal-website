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
    number: "01",
    title: "Health Education",
    description:
      "Making credible healthcare knowledge understandable, accessible, and useful to communities.",
  },
  {
    number: "02",
    title: "Health Journalism",
    description:
      "Responsible reporting and storytelling around healthcare, public health, research, and medicine.",
  },
  {
    number: "03",
    title: "Healthcare Documentation",
    description:
      "Organizing complex healthcare knowledge into clear, discoverable, and maintainable resources.",
  },
  {
    number: "04",
    title: "Digital Health",
    description:
      "Using technology and purposeful creativity to expand how healthcare knowledge reaches people.",
  },
];

export default async function Home() {
  const articles = (await getArticles()) as Article[];

  const featuredArticles = articles.filter((article) => article.featured);
  const latestArticles = articles.slice(0, 3);
  const leadArticle = featuredArticles[0];
  const supportingArticles = featuredArticles.slice(1, 3);

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-heal-emerald" />

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-navy">
                  Healthcare Education & Awareness Lab
                </p>
              </div>

              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-heal-navy sm:text-5xl lg:text-6xl">
                Better communication
                <span className="text-heal-emerald"> saves lives.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-semibold leading-8 text-heal-navy/80">
                Building Healthier Communities Through Communication.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-heal-slate-dark sm:text-lg">
                HEAL bridges the gap between credible healthcare knowledge and
                the communities that need it through education, journalism,
                documentation, communication, and technology.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/articles"
                  className="rounded-full bg-heal-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-heal-emerald"
                >
                  Explore the Knowledge Hub
                </Link>

                <Link
                  href="/about"
                  className="rounded-full border border-heal-border px-6 py-3 text-sm font-bold text-heal-navy transition hover:border-heal-emerald hover:text-heal-emerald"
                >
                  Discover HEAL
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative ml-auto max-w-xs border-l-2 border-heal-emerald pl-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-gold">
                  Our purpose
                </p>

                <div className="mt-6 space-y-5">
                  <p className="text-2xl font-extrabold text-heal-navy">
                    Educate.
                  </p>

                  <p className="text-2xl font-extrabold text-heal-navy">
                    Inform.
                  </p>

                  <p className="text-2xl font-extrabold text-heal-navy">
                    Innovate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Proposition */}
      <section className="border-b border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-emerald">
                Why HEAL exists
              </p>

              <div className="mt-5 h-1 w-12 rounded-full bg-heal-gold" />
            </div>

            <div>
              <h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-4xl lg:text-5xl">
                Healthcare knowledge should reach the people who need it.
              </h2>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-heal-slate-dark">
                Healthcare information should not remain confined to
                institutions, professionals, or academic literature. HEAL
                exists to help move credible knowledge from evidence to
                communication, communication to community, and community to
                action.
              </p>

              <div className="mt-12 grid gap-8 border-t border-heal-border pt-8 sm:grid-cols-3">
                {[
                  {
                    number: "01",
                    title: "Educate",
                    text: "Make credible healthcare knowledge understandable and accessible.",
                  },
                  {
                    number: "02",
                    title: "Inform",
                    text: "Communicate responsibly through journalism, awareness, and public health communication.",
                  },
                  {
                    number: "03",
                    title: "Innovate",
                    text: "Use technology and purposeful creativity to expand how healthcare knowledge reaches people.",
                  },
                ].map((item) => (
                  <div key={item.number}>
                    <p className="text-sm font-bold uppercase tracking-[0.15em] text-heal-gold">
                      {item.number}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold text-heal-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-heal-slate">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Work */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-emerald">
                What we do
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                Where healthcare meets communication, technology, and
                community.
              </h2>
            </div>

            <Link
              href="/what-we-do"
              className="font-semibold text-heal-navy transition hover:text-heal-emerald"
            >
              Explore our work →
            </Link>
          </div>

          <div className="mt-12 grid border-t border-heal-border md:grid-cols-2">
            {areasOfWork.map((item) => (
              <div
                key={item.number}
                className="border-b border-heal-border py-8 md:pr-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
              >
                <p className="text-sm font-bold tracking-[0.15em] text-heal-gold">
                  {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-extrabold text-heal-navy">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl leading-7 text-heal-slate-dark">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Hub */}
      <section className="border-b border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-emerald">
                Knowledge Hub
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                Evidence, explained and communicated.
              </h2>
            </div>

            <Link
              href="/articles"
              className="font-semibold text-heal-navy transition hover:text-heal-emerald"
            >
              View all publications →
            </Link>
          </div>

          {leadArticle ? (
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <Link
                href={`/articles/${leadArticle.slug}`}
                className="group rounded-3xl border border-heal-border bg-white p-8 transition hover:-translate-y-1 hover:border-heal-emerald hover:shadow-xl sm:p-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-heal-gold">
                  {leadArticle.contentType || "Publication"}
                </p>

                <h3 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-heal-navy group-hover:text-heal-emerald sm:text-4xl">
                  {leadArticle.title}
                </h3>

                {leadArticle.excerpt && (
                  <p className="mt-5 max-w-2xl leading-7 text-heal-slate-dark">
                    {leadArticle.excerpt}
                  </p>
                )}

                <span className="mt-8 inline-block text-sm font-bold text-heal-navy">
                  Read publication →
                </span>
              </Link>

              <div className="space-y-6">
                {supportingArticles.map((article) => (
                  <Link
                    key={article._id}
                    href={`/articles/${article.slug}`}
                    className="group block rounded-2xl border border-heal-border bg-white p-6 transition hover:border-heal-emerald"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-heal-gold">
                      {article.contentType || "Publication"}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold text-heal-navy group-hover:text-heal-emerald">
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
            <div className="mt-12 rounded-3xl border border-dashed border-heal-border bg-white p-10">
              <p className="text-heal-slate-dark">
                The HEAL Knowledge Hub is being prepared. Publications will
                appear here as they are published.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* HEAL Approach */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-emerald">
              The HEAL approach
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
              From evidence to action.
            </h2>

            <p className="mt-5 text-lg leading-8 text-heal-slate-dark">
              We work to move credible healthcare knowledge through a
              deliberate chain: evidence becomes communication, communication
              reaches communities, and communities are empowered to act.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-y border-heal-border md:grid-cols-4">
            {[
              ["01", "Evidence"],
              ["02", "Communication"],
              ["03", "Community"],
              ["04", "Action"],
            ].map(([number, title], index) => (
              <div
                key={title}
                className={`py-8 md:px-8 ${
                  index !== 0 ? "border-t md:border-l md:border-t-0" : ""
                } border-heal-border`}
              >
                <p className="text-sm font-bold text-heal-gold">{number}</p>

                <h3 className="mt-3 text-xl font-extrabold text-heal-navy">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Journey */}
      <section className="border-b border-heal-border bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-gold">
                Our journey
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From Sokoto, forward.
              </h2>
            </div>

            <div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    2025
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    HEAL is founded on the conviction that better communication
                    saves lives.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    2026
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    HEAL Sokoto Studio begins the institution's operational
                    phase.
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold text-heal-gold">
                    Forward
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Building systems and communities capable of extending HEAL
                    across Nigeria and Africa.
                  </p>
                </div>
              </div>

              <Link
                href="/about"
                className="mt-10 inline-block font-bold text-white transition hover:text-heal-gold"
              >
                Discover our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="rounded-3xl border border-heal-border bg-heal-surface px-8 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-heal-emerald">
                Work with HEAL
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                Better health communication requires collaboration.
              </h2>

              <p className="mt-4 leading-7 text-heal-slate-dark">
                We welcome opportunities to collaborate with healthcare
                professionals, institutions, researchers, communities, and
                organizations working toward healthier societies.
              </p>
            </div>

            <Link
              href="/get-involved"
              className="mt-8 inline-flex shrink-0 rounded-full bg-heal-emerald px-6 py-3 text-sm font-bold text-white transition hover:bg-heal-navy lg:mt-0"
            >
              Get involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}