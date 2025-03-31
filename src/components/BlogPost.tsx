'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ShareButtons from '@/components/ShareButtons';

interface BlogPostProps {
    title: string;
    description: string;
    author: string;
    date: string;
    slug: string;
    content: string;
}

export default function BlogPost({ title, description, author, date, slug, content }: BlogPostProps) {
    return (
        <div className="min-h-screen overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 mb-16 sm:mb-24 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/10] via-[rgb(var(--secondary))/5] to-[rgb(var(--primary))/10] rounded-3xl"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--primary))/10] rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--secondary))/10] rounded-full blur-3xl"></div>

                        <article className="relative">
                            {/* Breadcrumb */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-sm mb-8"
                            >
                                <Link
                                    href="/blogs"
                                    className="text-[rgb(var(--primary))] hover:text-[rgb(var(--secondary))] transition-colors font-medium"
                                >
                                    Blogs
                                </Link>
                                <span className="mx-2 text-gray-400 dark:text-gray-500">/</span>
                                <span className="text-gray-600 dark:text-gray-300">{slug}</span>
                            </motion.div>

                            {/* Header Section */}
                            <header className="mb-12">
                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))] mb-6"
                                >
                                    {title}
                                </motion.h1>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-xl text-gray-700 dark:text-gray-200 mb-8 border-l-4 border-[rgb(var(--primary))] pl-4"
                                >
                                    {description}
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                                >
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-gray-700 dark:text-gray-200">
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">By:</span>
                                            <span>{author}</span>
                                        </div>
                                        <span className="hidden sm:block text-gray-400 dark:text-gray-500">•</span>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">Published:</span>
                                            <span>{new Date(date).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <ShareButtons title={title} url={`https://ratn.tech/blogs/${slug}`} />
                                </motion.div>
                            </header>

                            {/* Blog Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="prose max-w-none prose-lg
                                    prose-headings:text-gray-900 dark:prose-headings:text-white
                                    prose-h1:text-3xl prose-h1:font-bold
                                    prose-h2:text-2xl prose-h2:font-semibold
                                    prose-p:text-gray-700 dark:prose-p:text-gray-200
                                    prose-strong:text-gray-900 dark:prose-strong:text-white
                                    prose-a:text-[rgb(var(--primary))] prose-a:no-underline hover:prose-a:text-[rgb(var(--secondary))]
                                    prose-code:text-[rgb(var(--secondary))] dark:prose-code:text-[rgb(var(--secondary))]
                                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
                                    prose-pre:border prose-pre:border-gray-200/20 dark:prose-pre:border-gray-700/20
                                    prose-pre:rounded-xl
                                    prose-img:rounded-xl prose-img:shadow-lg
                                    prose-blockquote:border-l-[rgb(var(--primary))] prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-200
                                    prose-ul:text-gray-700 dark:prose-ul:text-gray-200
                                    prose-ol:text-gray-700 dark:prose-ol:text-gray-200
                                    prose-li:text-gray-700 dark:prose-li:text-gray-200"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />
                        </article>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 