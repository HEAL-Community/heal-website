import type { MetadataRoute } from "next";

const BASE_URL = "https://healcommunity.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/what-we-do",
    "/initiatives",
    "/articles",
    "/get-involved",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}