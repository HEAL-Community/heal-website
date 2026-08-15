import Link from 'next/link'
import {getArticles} from '@/lib/queries'

export default async function Home() {
  const articles = await getArticles()

  const featuredArticles = articles.filter((article: any) => article.featured)
  const latestArticles = articles.slice(0, 3)

  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Healthcare Education and Awareness Lab
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
            Building Healthier Communities Through Communication.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-gray-600">
            HEAL is a healthcare communication institution focused on education,
            awareness, journalism, documentation, and evidence-based health
            information.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="rounded-full bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
            >
              Explore Publications
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50"
            >
              About HEAL
            </Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
            Healthcare communication with purpose.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Health Education',
                text: 'Clear, accessible health information designed to improve understanding and informed decision-making.',
              },
              {
                title: 'Health Journalism',
                text: 'Responsible reporting and storytelling around healthcare, public health, research, and medicine.',
              },
              {
                title: 'Healthcare Documentation',
                text: 'Structured healthcare documentation that makes complex information easier to understand and use.',
              },
              {
                title: 'Digital Health',
                text: 'Technology-enabled approaches to healthcare communication, education, and information access.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
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