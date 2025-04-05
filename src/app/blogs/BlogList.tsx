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
        <div className="min-h-screen">
            {/* Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:bg-teal-600 dark:opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:bg-teal-400 dark:opacity-5"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 dark:bg-teal-500 dark:opacity-5"></div>
                <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000 dark:bg-teal-400 dark:opacity-5"></div>
                <div className="absolute bottom-1/3 right-1/2 w-64 h-64 bg-teal-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-5000 dark:bg-teal-300 dark:opacity-5"></div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 relative">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 bg-clip-text text-transparent mb-4 drop-shadow-sm">
                        Blogs ✍️
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
                        Exploring ideas, sharing insights, and documenting my journey through technology and development.
                    </p>
                </div>

                {/* Blog Section */}
                <section id="blogs" className="space-y-8">
                    {posts.length > 0 ? (
                        <div className="grid gap-8 sm:grid-cols-1">
                            {posts.map((post, index) => (
                                <article
                                    key={post.slug}
                                    className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10"
                                    style={{
                                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
                                    }}
                                >
                                    {/* Hover effect background */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <Link
                                        href={`/blogs/${post.slug}`}
                                        className="block p-6 sm:p-8 relative"
                                        onClick={() => handleBlogClick(post.slug)}
                                    >
                                        {/* Blog Title */}
                                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                                            {post.title}
                                        </h3>

                                        {/* Blog Metadata */}
                                        <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-4 mb-4">
                                            <div className="flex items-center gap-2 bg-teal-50/50 dark:bg-teal-900/20 px-3 py-1 rounded-full">
                                                <CalendarDays className="h-4 w-4 text-teal-500 dark:text-teal-400" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-teal-50/50 dark:bg-teal-900/20 px-3 py-1 rounded-full">
                                                <Eye className="h-4 w-4 text-teal-500 dark:text-teal-400" />
                                                <span>{blogViews[post.slug] ?? 0} views</span>
                                            </div>
                                            <span className="px-3 py-1 text-sm rounded-full bg-teal-100/50 dark:bg-teal-700/20 text-teal-600 dark:text-teal-300 font-medium border border-teal-200/50 dark:border-teal-500/20">
                                                {post.readTime}
                                            </span>
                                        </div>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium group/button bg-teal-50/50 dark:bg-teal-900/20 px-4 py-2 rounded-full transition-all duration-300 hover:bg-teal-100/50 dark:hover:bg-teal-800/20">
                                            Read more
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/button:translate-x-1" />
                                        </div>
                                    </Link>

                                    {/* Decorative gradient line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="bg-white/70 dark:bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-teal-100/50 dark:border-teal-500/10 shadow-lg">
                                <p className="text-gray-500 dark:text-gray-400 text-lg mb-4">No blogs found.</p>
                                <div className="w-24 h-1 mx-auto bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 rounded-full opacity-80"></div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}