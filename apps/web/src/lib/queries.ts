export async function getArticle(slug: string) {
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