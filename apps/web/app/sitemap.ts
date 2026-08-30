import type { MetadataRoute } from "next";
import { getArticles } from "@/lib/queries";

const BASE_URL = "https://healcommunity.net";

type SitemapArticle = {
  slug: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    {
      path: "",
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      path: "/about",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/what-we-do",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/initiatives",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      path: "/articles",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      path: "/get-involved",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  let articles: SitemapArticle[] = [];

  try {
    articles = (await getArticles()) as SitemapArticle[];
  } catch {
    // Keep the core sitemap available if Sanity is temporarily unavailable.
  }

  const staticRoutes: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles
    .filter((article) => article.slug)
    .map((article) => ({
      url: `${BASE_URL}/articles/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...articleRoutes];
}
