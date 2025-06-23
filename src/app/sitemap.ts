import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "projects", "about"].map((url) => ({
    url: `https://guibi.dev/${url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
  }));
}
