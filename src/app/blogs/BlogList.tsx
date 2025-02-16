'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className='flex flex-row  justify-between'>
                <div>
            <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Blogs ✍️</h1>
                </div>
                <div>
            <input
                type="text"
                placeholder="Search blogs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-36 p-2 border rounded-lg focus:outline-none ring-slate-300 focus:ring-1 bg-transparent focus:ring-teal-600 dark:focus:ring-orange-400"
            />
                </div>
            </div>

            <section className="py-12 px-2" id="blogs">
                <div className="space-y-8">
                    {filteredPosts.length > 0 ? (
                        filteredPosts.map((post, index) => (
                            <article key={index} className="group">
                                <Link href={`/blogs/${post.slug}`}>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <time dateTime={post.date}>{post.date}</time>
                                            <span>•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold">{post.title}</h3>
                                        <div className="flex items-center gap-2 text-teal-600 dark:text-orange-500 font-medium">
                                            Read more
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No blogs found.</p>
                    )}
                </div>
            </section>
        </div>
    );
}
