'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

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
                        updatedViews[post.slug] = post.views ?? 0;
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
            setBlogViews((prev) => ({
                ...prev,
                [slug]: (prev[slug] || 0) + 1,
            }));
        } catch (error) {
            console.error('Error updating blog views:', error);
        }
    };

    return (
        <div className="min-h-screen overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
                <div className="relative">
                    <div className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 mb-16 sm:mb-24 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/20] via-[rgb(var(--secondary))/10] to-[rgb(var(--primary))/20] rounded-3xl"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--primary))/20] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--secondary))/20] rounded-full blur-3xl"></div>

                        <div className="relative">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="relative inline-block mb-8"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--primary))/30] via-[rgb(var(--secondary))/20] to-[rgb(var(--primary))/30] blur-3xl rounded-full"></div>
                                <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))]">
                                    Latest Blogs
                                </h1>
                            </motion.div>

                            <div className="space-y-8">
                                {posts.length > 0 ? (
                                    posts.map((post, index) => (
                                        <motion.article
                                            key={post.slug}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="relative p-6 sm:p-8 rounded-2xl bg-white/60 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/50 transition-all duration-300"
                                        >
                                            <Link
                                                href={`/blogs/${post.slug}`}
                                                onClick={() => handleBlogClick(post.slug)}
                                                className="block space-y-4"
                                            >
                                                <div className="flex flex-wrap items-center text-sm gap-4">
                                                    <div className="flex items-center gap-2 text-[rgb(var(--primary))]">
                                                        <CalendarDays className="h-4 w-4" />
                                                        <span>{post.date}</span>
                                                    </div>
                                                    <span className="text-gray-400">•</span>
                                                    <span className="text-[rgb(var(--secondary))]">{post.readTime}</span>
                                                    <div className="ml-auto flex items-center gap-2 text-[rgb(var(--primary))]">
                                                        <Eye className="h-4 w-4" />
                                                        <span>{blogViews[post.slug] ?? 0} views</span>
                                                    </div>
                                                </div>

                                                <h2 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))]">
                                                    {post.title}
                                                </h2>

                                                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex items-center gap-2 text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors group">
                                                    <span className="font-medium">Read article</span>
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </Link>
                                        </motion.article>
                                    ))
                                ) : (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center text-lg text-gray-500 dark:text-gray-400"
                                    >
                                        No blogs found.
                                    </motion.p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
