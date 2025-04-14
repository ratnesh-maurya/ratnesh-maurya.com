import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Metadata } from 'next';
import Link from 'next/link';


interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    view?: number;
}

const getBlogPosts = (): BlogPost[] => {
    const blogDir = path.join(process.cwd(), 'src/blogContent');
    const files = fs.readdirSync(blogDir);

    const posts = files.map((fileName) => {
        const filePath = path.join(blogDir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);

        return {
            title: data.title,
            excerpt: data.description,
            date: data.date,
            readTime: data.readTime || '5 min read',
            slug: data.slug,
            views: Math.floor(Math.random() * 500), // Simulated view count (Replace with actual logic)
        };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Blogs - Ratnesh Maurya',
        description: 'Explore the blogs written by Ratnesh Maurya - Software Engineer .',
        keywords: 'Blogs, Ratnesh Maurya, Web Development, JavaScript, React, Next.js, Tailwind CSS , Golang, Python, TypeScript, Technolgy Blogs, Software Engineering',
        openGraph: {
            title: 'Blogs - Ratnesh Maurya',
            description: 'Blogs written by Ratnesh Maurya',
            type: 'website',
            url: 'https://ratnesh-maurya.com/blogs',
            images: {
                url: 'https://ratnesh-maurya.com/blogs.jpg',
                width: 1200,
                height: 630,
                alt: 'Blogs - Ratnesh Maurya',
            },
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ratnesh_maurya_',
            title: 'Blogs - Ratnesh Maurya',
            description: 'Blogs written by Ratnesh Maurya',
            creator: '@ratnesh_maurya_',
            images: {
                url: 'https://ratnesh-maurya.com/blogs.jpg',
                width: 1200,
                height: 630,
                alt: 'Blogs - Ratnesh Maurya',
            },
        },
    };

}

export default function BlogsPage() {
    const posts = getBlogPosts();

    return (
        <div className="min-h-screen">
            {/* Enhanced Decorative background elements */}
            <div className="fixed inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:animate-blob dark:bg-teal-600 dark:opacity-5"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:animate-blob dark:animation-delay-2000 dark:bg-teal-400 dark:opacity-5"></div>
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:animate-blob dark:animation-delay-4000 dark:bg-teal-500 dark:opacity-5"></div>
                <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:animate-blob dark:animation-delay-3000 dark:bg-teal-400 dark:opacity-5"></div>
            </div>

            <div className="max-w-5xl mx-auto px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16 sm:p-6 sm:mx-auto">
                {/* Enhanced Header Section */}
                <div className="sticky top-0 z-10 py-8">
                    <div className="text-center relative">
                        <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 blur-3xl dark:from-teal-500/10 dark:to-teal-500/10"></div>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)]"></div>
                        </div>
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-300 bg-clip-text text-transparent mb-4 drop-shadow-sm dark:animate-pulse-slow">
                            Blogs
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
                            Sharing my thoughts, experiences, and knowledge through writing.
                        </p>
                    </div>
                </div>

                {/* Enhanced Blogs Section */}
                <section className="py-8">
                    <div className="grid gap-8 max-w-4xl mx-auto sm:grid-cols-1">
                        {posts.map((blog, index) => (
                            <Link
                                href={`/blogs/${blog.slug}`}
                                key={blog.slug}
                                className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-orange-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-teal-400/10"
                                style={{
                                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`
                                }}
                            >
                                {/* Enhanced Hover effect background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                <div className="relative p-6 sm:p-8">
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-teal-400 transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.excerpt}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        <span>{blog.date}</span>
                                        <span>•</span>
                                        <span>{blog.readTime}</span>
                                        {blog.view && (
                                            <>
                                                <span>•</span>
                                                <span>{blog.view} views</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}