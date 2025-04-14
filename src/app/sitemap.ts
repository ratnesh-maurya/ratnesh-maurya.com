import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog post files
  const blogContentPath = path.join(process.cwd(), "src", "blogContent");
  const blogFiles = fs.readdirSync(blogContentPath);

  // Create sitemap entries for blog posts
  const blogEntries = blogFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const filePath = path.join(blogContentPath, filename);
    const stats = fs.statSync(filePath);

    return {
      url: `https://ratnesh-maurya.com/blogs/${slug}`,
      lastModified: stats.mtime,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  // Add static routes
  const routes = [
    {
      url: "https://ratnesh-maurya.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://ratnesh-maurya.com/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: "https://ratnesh-maurya.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://ratnesh-maurya.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ];

  // Combine all routes
  return [...routes, ...blogEntries];
}
