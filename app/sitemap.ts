import type { MetadataRoute } from "next"

const baseUrl = "https://www.uro-ehingen.de"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ]
}
