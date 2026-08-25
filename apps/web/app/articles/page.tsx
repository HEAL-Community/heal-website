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

const subjects = [
  "Health Education",
  "Health Journalism",
  "Public Health",
  "Research & Evidence",
  "Digital Health",
  "Documentation",
];

export default async function KnowledgePage() {
  const articles = (await getArticles()) as Article[];

  const featuredArticle =
    articles.find((article) => article.featured) ?? articles[0];

  const latestArticles = articles
    .filter((article) => article._id !== featuredArticle?._id)
    .slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <section className="border-b border-heal-border bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-h-[60vh] items-end gap-16 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Knowledge Hub
              </p>

              <h1 className="mt-7 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-heal-navy sm:text-6xl lg:text-7xl">
                Knowledge worth
                <br />
                <span className="text-heal-emerald">sharing.</span>
              </h1>
            </div>

            <div className="max-w-md border-l-2 border-heal-emerald pl-7 lg:mb-2 lg:ml-auto">
              <p className="text-lg leading-8 text-heal-slate-dark">
                Evidence, insight, and stories from the intersection of
                healthcare, communication, technology, and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featuredArticle ? (
        <section className="bg-heal-surface">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                  Featured
                </p>
              </div>

              <div className="lg:col-span-8 lg:col-start-5">
                <Link
                  href={`/articles/${featuredArticle.slug}`}
                  className="group block border-t-2 border-heal-navy pt-7"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-heal-gold">
                    {featuredArticle.contentType || "Publication"}
                  </p>

                  <h2 className="mt-5 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-heal-navy transition group-hover:text-heal-emerald sm:text-4xl lg:text-5xl">
                    {featuredArticle.title}
                  </h2>

                  {featuredArticle.excerpt && (
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-heal-slate-dark">
                      {featuredArticle.excerpt}
                    </p>
                  )}

                  <span className="mt-8 inline-block text-sm font-bold text-heal-navy transition group-hover:text-heal-emerald">
                    Read publication →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* LATEST */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="flex flex-col gap-6 border-b border-heal-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                Latest
              </p>

              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-heal-navy sm:text-5xl">
                Recent publications.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-heal-slate-dark md:text-right">
              New perspectives, evidence, and stories from HEAL.
            </p>
          </div>

          {latestArticles.length > 0 ? (
            <div className="divide-y divide-heal-border">
              {latestArticles.map((article) => (
                <Link
                  key={article._id}
                  href={`/articles/${article.slug}`}
                  className="group grid gap-4 py-8 transition-colors md:grid-cols-[0.25fr_1fr_auto] md:items-start md:gap-8"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-heal-gold">
                    {article.contentType || "Publication"}
                  </p>

                  <div>
                    <h3 className="text-xl font-extrabold leading-snug text-heal-navy transition group-hover:text-heal-emerald sm:text-2xl">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-heal-slate-dark">
                        {article.excerpt}
                      </p>
                    )}
                  </div>

                  <span className="text-sm font-bold text-heal-slate-dark transition group-hover:text-heal-emerald">
                    Read →
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border-b border-heal-border py-10">
              <p className="text-lg text-heal-slate-dark">
                Publications from the HEAL Knowledge Hub will appear here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="border-y border-heal-border bg-heal-surface">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
                Browse
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-heal-navy sm:text-4xl">
                Explore by subject.
              </h2>

              <p className="mt-5 max-w-sm leading-7 text-heal-slate-dark">
                Find knowledge across the areas where healthcare and
                communication intersect.
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-heal-border">
                {subjects.map((subject) => (
                  <Link
                    key={subject}
                    href={`/articles?subject=${encodeURIComponent(subject)}`}
                    className="group flex items-center justify-between border-b border-heal-border py-5"
                  >
                    <span className="text-lg font-bold text-heal-navy transition group-hover:text-heal-emerald">
                      {subject}
                    </span>

                    <span className="text-lg text-heal-slate-dark transition group-hover:translate-x-1 group-hover:text-heal-emerald">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-heal-navy text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-gold">
              The Knowledge Hub
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Better knowledge creates better possibilities.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Explore the ideas, evidence, stories, and resources shaping
              healthcare communication.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}