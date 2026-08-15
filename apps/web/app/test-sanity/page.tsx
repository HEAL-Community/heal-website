import {getArticles} from '@/lib/queries'

export default async function SanityTestPage() {
  const articles = await getArticles()

  return (
    <main style={{padding: '2rem'}}>
      <h1>Sanity Connection Test</h1>

      <pre>
        {JSON.stringify(articles, null, 2)}
      </pre>
    </main>
  )
}