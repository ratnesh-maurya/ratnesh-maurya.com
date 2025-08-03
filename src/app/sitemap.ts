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

    // Read the blog post to get metadata for better priority calculation
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const matter = require('gray-matter');
    const { data } = matter(fileContent);

    // Calculate priority based on recency and category
    const postDate = new Date(data.date);
    const now = new Date();
    const daysSincePost = Math.floor((now.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24));

    // Higher priority for newer posts, with a base priority of 0.6-0.8
    let priority = 0.8;
    if (daysSincePost > 30) priority = 0.7;
    if (daysSincePost > 90) priority = 0.6;
    if (daysSincePost > 365) priority = 0.5;

    return {
      url: `https://ratnesh-maurya.com/blogs/${slug}`,
      lastModified: stats.mtime,
      changeFrequency: "weekly" as const,
      priority,
    };
  });

  // Add static routes with enhanced priorities
  const routes = [
    {
      url: "https://ratnesh-maurya.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: "https://ratnesh-maurya.com/blogs",
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: "https://ratnesh-maurya.com/projects",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: "https://ratnesh-maurya.com/gallery",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Combine all routes
  return [...routes, ...blogEntries];
}
