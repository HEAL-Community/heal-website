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
      <h2 style={{fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem'}}>
        {children}
      </h2>
    ),
    h3: ({children}: {children?: React.ReactNode}) => (
      <h3 style={{fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem'}}>
        {children}
      </h3>
    ),
    normal: ({children}: {children?: React.ReactNode}) => (
      <p style={{fontSize: '1.08rem', lineHeight: 1.8, marginBottom: '1.5rem'}}>
        {children}
      </p>
    ),
    blockquote: ({children}: {children?: React.ReactNode}) => (
      <blockquote
        style={{
          borderLeft: '4px solid currentColor',
          paddingLeft: '1.5rem',
          margin: '2rem 0',
          fontStyle: 'italic',
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({children}: {children?: React.ReactNode}) => (
      <ul style={{lineHeight: 1.8, marginBottom: '1.5rem'}}>{children}</ul>
    ),
    number: ({children}: {children?: React.ReactNode}) => (
      <ol style={{lineHeight: 1.8, marginBottom: '1.5rem'}}>{children}</ol>
    ),
  },
}

export default async function ArticlePage({params}: Props) {
  const {slug} = await params
  const article = await getArticle(slug)

  if (!article) {
    notFound()
  }

  const imageUrl = article.featuredImage
    ? urlFor(article.featuredImage).width(1400).auto('format').url()
    : null

  return (
    <main style={{maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem'}}>
      <article>
        <header style={{marginBottom: '3rem'}}>
          <p
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            {article.contentType}
          </p>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.05,
              margin: '1rem 0',
            }}
          >
            {article.title}
          </h1>

          {article.excerpt && (
            <p
              style={{
                fontSize: '1.3rem',
                lineHeight: 1.6,
                opacity: 0.75,
                maxWidth: '700px',
              }}
            >
              {article.excerpt}
            </p>
          )}

          {article.publishedAt && (
            <p style={{marginTop: '1.5rem', fontSize: '0.9rem', opacity: 0.65}}>
              {new Date(article.publishedAt).toLocaleDateString('en-NG', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          )}
        </header>

        {imageUrl && (
          <figure style={{margin: '0 0 3rem'}}>
            <img
              src={imageUrl}
              alt={article.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                display: 'block',
              }}
            />
          </figure>
        )}

        <div>
          <PortableText
            value={article.body}
            components={portableTextComponents}
          />
        </div>
      </article>
    </main>
  )
}