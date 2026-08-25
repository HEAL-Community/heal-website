import Link from 'next/link'
import {getArticles} from '@/lib/queries'

export default async function Home() {
  const articles = await getArticles()

  const featuredArticles = articles.filter((article: any) => article.featured)
  const latestArticles = articles.slice(0, 3)

  return (
    <main>
      {/* Hero */}
<section className="relative overflow-hidden bg-heal-navy text-white">
  <div className="absolute inset-0">
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-heal-emerald/20 blur-3xl" />
    <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-heal-gold/10 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div className="max-w-5xl">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-heal-gold" />

        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-heal-gold">
          Healthcare Education & Awareness Lab
        </p>
      </div>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
        Building Healthier Communities Through Communication.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
        HEAL translates credible healthcare knowledge into accessible
        education, responsible journalism, documentation, and innovative
        digital experiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href="/articles"
          className="rounded-full bg-heal-emerald px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-heal-emerald/90"
        >
          Explore the Knowledge Hub
        </Link>

        <Link
          href="/about"
          className="rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
        >
          Discover HEAL
        </Link>
      </div>
    </div>

    <div className="mt-20 grid max-w-4xl gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-heal-gold">
          Founded
        </p>
        <p className="mt-2 text-2xl font-bold">2025</p>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-heal-gold">
          Purpose
        </p>
        <p className="mt-2 text-2xl font-bold">Educate. Inform. Innovate.</p>
      </div>

      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-heal-gold">
          First Studio
        </p>
        <p className="mt-2 text-2xl font-bold">Sokoto · 2026</p>
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