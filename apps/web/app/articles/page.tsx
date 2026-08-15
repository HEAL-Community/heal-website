import Link from 'next/link'
import {getArticles} from '@/lib/queries'

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <main style={{maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem'}}>
      <header style={{marginBottom: '3rem'}}>
        <p
          style={{
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          HEAL Editorial
        </p>

        <h1 style={{fontSize: '3.5rem', margin: '0.5rem 0'}}>
          Articles
        </h1>

        <p style={{fontSize: '1.2rem', opacity: 0.7}}>
          Health education, journalism, evidence, and practical healthcare
          knowledge.
        </p>
      </header>

      {articles.length === 0 ? (
        <p>No articles published yet.</p>
      ) : (
        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {articles.map((article: any) => (
            <article
              key={article._id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <p
                style={{
                  textTransform: 'uppercase',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                }}
              >
                {article.contentType}
              </p>

              <h2 style={{fontSize: '1.5rem'}}>
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              {article.excerpt && (
                <p style={{lineHeight: 1.6, opacity: 0.75}}>
                  {article.excerpt}
                </p>
              )}

              {article.publishedAt && (
                <p style={{fontSize: '0.85rem', opacity: 0.6}}>
                  {new Date(article.publishedAt).toLocaleDateString('en-NG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
            </article>
          ))}
        </section>
      )}
    </main>
  )
}