import {sanityClient} from './sanity'

export async function getArticles() {
  return sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      contentType,
      featured
    }
  `)
}