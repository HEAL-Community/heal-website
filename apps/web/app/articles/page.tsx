import Link from 'next/link'
import {getArticles} from '@/lib/queries'

export default async function ArticlesPage() {
  const articles = await getArticles()

  return (
    <main style={{padding: '2rem'}}>
      <h1>HEAL Articles</h1>

      {articles.length === 0 ? (
        <p>No articles published yet.</p>
      ) : (
        <section>
          {articles.map((article: any) => (
            <article key={article._id} style={{marginBottom: '2rem'}}>
              <h2>
                <Link href={`/articles/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              {article.excerpt && <p>{article.excerpt}</p>}

              <small>
                {article.contentType}
              </small>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}