'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Eye } from 'lucide-react';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    views?: number;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-2  sm:p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-teal-600 dark:text-gray-200">Blogs ✍️</h1>
                <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="mt-3 sm:mt-0 w-64 p-2 border rounded-lg focus:outline-none ring-1 ring-gray-300 focus:ring-teal-600 dark:focus:ring-orange-400 bg-transparent"
                />
            </div>

            {/* Blog Section */}
            <section id="blogs">
                {filteredPosts.length > 0 ? (
                    <div className="space-y-8">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.slug}
                                className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg bg-white dark:bg-gray-900 transition hover:scale-[1.02]"
                            >
                                <Link href={`/blogs/${post.slug}`} className="block space-y-4">
                                    {/* Blog Metadata */}
                                    <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 gap-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4 text-teal-500 dark:text-orange-400" />
                                            <span>{post.date}</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span>{post.readTime}</span>

                                        {/* Views at 3/4 position */}
                                        <span className="ml-auto flex items-center gap-1">
                                            <Eye className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                                            {post.views ?? 0}
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
