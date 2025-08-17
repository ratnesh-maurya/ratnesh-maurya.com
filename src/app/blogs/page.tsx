import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, BookOpen, ArrowRight } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Spotlight } from '@/components/ui/spotlight';

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    category?: string;
    views?: number;
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
            category: data.category || 'Technology',
            views: Math.floor(Math.random() * 500) + 100,
        };
    });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'Technical Blog - Ratnesh Maurya | Software Engineering Insights',
        description: 'Explore in-depth technical articles on software engineering, cloud computing, web development, and modern technologies by Ratnesh Maurya.',
        keywords: 'Technical Blog, Ratnesh Maurya, Software Engineering, Web Development, JavaScript, React, Next.js, Tailwind CSS, Golang, Python, TypeScript, Cloud Computing, AWS, DevOps, Programming Tutorials',
        openGraph: {
            title: 'Technical Blog - Ratnesh Maurya | Software Engineering Insights',
            description: 'In-depth technical articles on software engineering and modern web development',
            type: 'website',
            url: 'https://ratnesh-maurya.com/blogs',
            images: {
                url: 'https://ratnesh-maurya.com/blogs.jpg',
                width: 1200,
                height: 630,
                alt: 'Ratnesh Maurya Technical Blog',
            },
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ratnesh_maurya_',
            title: 'Technical Blog - Ratnesh Maurya',
            description: 'In-depth technical articles on software engineering and modern web development',
            creator: '@ratnesh_maurya_',
            images: ['https://ratnesh-maurya.com/blogs.jpg'],
        },
        alternates: {
            canonical: 'https://ratnesh-maurya.com/blogs',
        },
    };
}

export default function BlogsPage() {
    const posts = getBlogPosts();
    const featuredPost = posts[0];


    return (
        <AuroraBackground>
            <div className="relative z-10 w-full">
                {/* Grid Pattern Background */}
                <GridPattern className="absolute inset-0 opacity-20" />

                {/* Spotlight Effects */}
                <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="blue" />

                {/* Hero Section */}
                <section className="relative py-32 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
                            Technical Blog
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                            Exploring software engineering, cloud technologies, and modern development practices.
                            Sharing insights from my journey building scalable systems.
                        </p>

                        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4" />
                                <span>{posts.length} Articles</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CalendarDays className="h-4 w-4" />
                                <span>Updated Weekly</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Article */}
                {featuredPost && (
                    <section className="py-12 px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                                Featured Article
                            </h2>

                            <Link href={`/blogs/${featuredPost.slug}`}
                                className="block bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-500 group">
                                <div className="grid md:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 text-sm bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                                                {featuredPost.category}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Featured</span>
                                        </div>

                                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {featuredPost.title}
                                        </h3>

                                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                            {featuredPost.excerpt}
                                        </p>

                                        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                                            <div className="flex items-center gap-2">
                                                <CalendarDays className="h-4 w-4" />
                                                <span>{featuredPost.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                <span>{featuredPost.readTime}</span>
                                            </div>
                                        </div>

                                        <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group/btn">
                                            Read Full Article
                                            <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-2xl flex items-center justify-center">
                                            <BookOpen className="h-16 w-16 text-purple-600 dark:text-purple-400" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </section>
                )}

                {/* All Articles */}
                <section className="py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                            All Articles
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map((post, index) => (
                                <Link key={post.slug} href={`/blogs/${post.slug}`}
                                    className="block bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-300 group"
                                    style={{
                                        animationDelay: `${index * 100}ms`
                                    }}>

                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-2 py-1 text-xs bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-3 w-3" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-3 w-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {post.views} views
                                            </span>
                                            <div className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-medium group/btn">
                                                Read
                                                <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-20 px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/20 dark:border-gray-700/20">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                Stay Updated
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                                Get notified when I publish new articles about software engineering and technology.
                            </p>
                            <Link href="https://x.com/ratnesh_maurya_" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg group">
                                Follow on Twitter
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </AuroraBackground>
    );
}