import {PortableText} from '@portabletext/react'
import {notFound} from 'next/navigation'
import {getArticle} from '@/lib/queries'
import {urlFor} from '@/lib/image'

type Props = {
  params: Promise<{slug: string}>
}

const portableTextComponents = {
  block: {
    h2: ({children}: {children?: React.ReactNode}) => (
      <h2 className="mt-14 text-3xl font-extrabold leading-tight tracking-tight text-heal-navy sm:text-4xl">
        {children}
      </h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 className="mt-10 text-2xl font-extrabold leading-tight text-heal-navy">
        {children}
      </h3>
    ),
    normal: ({children}: {children?: React.ReactNode}) => (
      <p className="mb-6 text-lg leading-8 text-heal-slate-dark">{children}</p>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote className="my-10 border-l-2 border-heal-emerald pl-6 text-xl italic leading-8 text-heal-navy sm:pl-8">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <ul className="mb-6 list-disc space-y-2 pl-6 text-lg leading-8 text-heal-slate-dark">{children}</ul>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <ol className="mb-6 list-decimal space-y-2 pl-6 text-lg leading-8 text-heal-slate-dark">{children}</ol>
    ),
  },
  marks: {
    link: ({children, value}: {children?: React.ReactNode; value?: {href?: string}}) => (
      <a
        href={value?.href}
        className="font-semibold text-heal-emerald underline decoration-heal-emerald/40 underline-offset-4 transition-colors hover:text-heal-navy"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
        rel={value?.href?.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export default async function ArticlePage({params}: Props) {
  const {slug} = await params
  const article = await getArticle(slug)

  if (!article) notFound()

  const imageUrl = article.featuredImage
    ? urlFor(article.featuredImage).width(1600).auto('format').url()
    : null

  return (
    <main>
      <article>
        <header className="border-b border-heal-border bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-heal-emerald">
                {article.contentType || 'Publication'}
              </p>
              <h1 className="mt-7 text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-heal-navy">
                {article.title}
              </h1>
              {article.excerpt && (
                <p className="mt-8 max-w-2xl text-xl leading-8 text-heal-slate-dark sm:text-2xl sm:leading-9">
                  {article.excerpt}
                </p>
              )}
              {article.publishedAt && (
                <p className="mt-8 border-t border-heal-border pt-5 text-xs font-bold uppercase tracking-[0.16em] text-heal-slate">
                  Published {new Date(article.publishedAt).toLocaleDateString('en-NG', {year: 'numeric', month: 'long', day: 'numeric'})}
                </p>
              )}
            </div>
          </div>
        </header>

        {imageUrl && (
          <figure className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
            <img src={imageUrl} alt={article.title} className="block max-h-[70vh] w-full object-cover" />
          </figure>
        )}

        <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
          <PortableText value={article.body} components={portableTextComponents} />
        </div>
      </article>
    </main>
  )
}
