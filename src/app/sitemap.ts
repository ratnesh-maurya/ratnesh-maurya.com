import type { MetadataRoute } from 'next';
import { fetchBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://ratnesh-maurya.com';

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchBlogPosts(50);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0,   images: [`${BASE_URL}/opengraph-image`] },
    { url: `${BASE_URL}/projects`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9,  images: [`${BASE_URL}/projects/opengraph-image`] },
    { url: `${BASE_URL}/blog`,          lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9,  images: [`${BASE_URL}/blog/opengraph-image`] },
    { url: `${BASE_URL}/github`,        lastModified: new Date(), changeFrequency: 'daily',   priority: 0.8,  images: [`${BASE_URL}/github/opengraph-image`] },
    { url: `${BASE_URL}/social`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8,  images: [`${BASE_URL}/social/opengraph-image`] },
    { url: `${BASE_URL}/now`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8,  images: [`${BASE_URL}/now/opengraph-image`] },
    { url: `${BASE_URL}/uses`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7,  images: [`${BASE_URL}/uses/opengraph-image`] },
    { url: `${BASE_URL}/photos`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6,  images: [`${BASE_URL}/photos/opengraph-image`] },
  ];

  // Blog posts (canonical URLs on blog.ratnesh-maurya.com — included for cross-linking)
  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: p.href,
    lastModified: p.date ? new Date(p.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
