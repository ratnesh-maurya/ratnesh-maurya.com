'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Eye } from 'lucide-react';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    views?: number;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [blogViews, setBlogViews] = useState<Record<string, number>>({});

    useEffect(() => {
        const fetchViews = async () => {
            const updatedViews: Record<string, number> = {};
            await Promise.all(
                posts.map(async (post) => {
                    try {
                        const res = await fetch(`https://api.ratn.tech/blogview/${post.slug}`);
                        const data = await res.json();
                        updatedViews[post.slug] = data.views || 0;
                    } catch (error) {
                        console.error(`Error fetching views for ${post.slug}:`, error);
                        updatedViews[post.slug] = post.views ?? 0; // Fallback to default
                    }
                })
            );
            setBlogViews(updatedViews);
        };

        fetchViews();
    }, [posts]);

    const handleBlogClick = async (slug: string) => {
        try {
            await fetch(`https://api.ratn.tech/blogview/${slug}`, {
                method: 'POST',
            });

            // Optimistically update views count
            setBlogViews((prev) => ({
                ...prev,
                [slug]: (prev[slug] || 0) + 1,
            }));
        } catch (error) {
            console.error('Error updating blog views:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-2 sm:p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-teal-600 dark:text-gray-200">Blogs ✍️</h1>
            </div>

            {/* Blog Section */}
            <section id="blogs">
                {posts.length > 0 ? (
                    <div className="space-y-8">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition hover:scale-[1.02]"
                            >
                                <Link
                                    href={`/blogs/${post.slug}`}
                                    className="block space-y-4"
                                    onClick={() => handleBlogClick(post.slug)}
                                >
                                    {/* Blog Metadata */}
                                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-3">
                                        <div className="flex items-center gap-1">
                                            <CalendarDays className="h-4 w-4 text-teal-500 dark:text-orange-400" />
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span>{post.readTime}</span>

                                        {/* Views at 3/4 position */}
                                        <span className="ml-auto flex items-center gap-1">
                                            <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                            {blogViews[post.slug] ?? 0}
                                        </span>
                                    </div>

                                    {/* Blog Title */}
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm dark:text-gray-400 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More Button */}
                                    <div className="flex items-center gap-2 text-teal-600 dark:text-orange-500 font-medium mt-2">
                                        Read more
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 text-lg">No blogs found.</p>
                )}
            </section>
        </div>
    );
}