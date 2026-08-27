import {sanityClient, sanityConfigured} from './sanity'

export async function getArticles() {
  if (!sanityConfigured) {
    return []
  }

  return sanityClient.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      contentType,
      featured,
      featuredImage
    }
  `)
}

export async function getArticle(slug: string) {
  if (!sanityConfigured) {
    return null
  }

  return sanityClient.fetch(
    `
      *[_type == "article" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        contentType,
        featured,
        featuredImage,
        body
      }
    `,
    {slug},
  )
}
