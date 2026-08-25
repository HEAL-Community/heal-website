import Link from 'next/link'
import {getArticles} from '@/lib/queries'

export default async function Home() {
  const articles = await getArticles()

  const featuredArticles = articles.filter((article: any) => article.featured)
  const latestArticles = articles.slice(0, 3)

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
          HEAL translates credible healthcare knowledge into accessible
          education, responsible journalism, documentation, and innovative
          digital experiences.
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
        <div className="relative ml-auto max-w-xs">
          <div className="border-l-2 border-heal-emerald pl-8">
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
  </div>
</section>

      {/* Featured */}
      {featuredArticles.length > 0 && (
        <section className="border-b bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  Featured
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                  From the HEAL Knowledge Hub
                </h2>
              </div>

              <Link
                href="/articles"
                className="hidden text-sm font-semibold text-gray-900 md:block"
              >
                View all publications →
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article: any) => (
                <Link
                  key={article._id}
                  href={`/articles/${article.slug}`}
                  className="group rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {article.contentType}
                  </p>

                  <h3 className="mt-4 text-xl font-semibold text-gray-900 group-hover:underline">
                    {article.title}
                  </h3>

                  {article.excerpt && (
                    <p className="mt-3 leading-7 text-gray-600">
                      {article.excerpt}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Latest
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Latest publications
          </h2>

          <div className="mt-10 divide-y divide-gray-200 border-y">
            {latestArticles.map((article: any) => (
              <Link
                key={article._id}
                href={`/articles/${article.slug}`}
                className="group block py-6"
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {article.contentType}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:underline">
                      {article.title}
                    </h3>

                    {article.excerpt && (
                      <p className="mt-2 max-w-2xl text-gray-600">
                        {article.excerpt}
                      </p>
                    )}
                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/articles"
              className="font-semibold text-gray-900"
            >
              Explore the full Knowledge Hub →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}