import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { type ComponentPropsWithoutRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from "next";

import { ArticleSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(blogContentPath, `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
        title: `${data.title} - Ratnesh Maurya`,
        description: data.description,
        keywords: data.keywords,
        authors: [{ name: data.author || 'Ratnesh Maurya', url: 'https://ratnesh-maurya.com' }],
        creator: data.author || 'Ratnesh Maurya',
        publisher: 'Ratnesh Maurya',
        category: data.category,
        alternates: {
            canonical: `https://ratnesh-maurya.com/blogs/${params.slug}`,
        },
        openGraph: {
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            type: 'article',
            url: `https://ratnesh-maurya.com/blogs/${params.slug}`,
            images: [
                {
                    url: data.image,
                    width: 1200,
                    height: 630,
                    alt: `${data.title} - Ratnesh Maurya`,
                }
            ],
            publishedTime: data.date,
            modifiedTime: data.modifiedDate || data.date,
            authors: [data.author || 'Ratnesh Maurya'],
            section: data.category,
            tags: data.keywords?.split(', ') || [],
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ratnesh_maurya_',
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            creator: '@ratnesh_maurya_',
            images: [data.image],
        },
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

const blogContentPath = path.join(process.cwd(), 'src', 'blogContent');

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = path.join(blogContentPath, `${slug}.md`);

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    return (
        <div className="w-full max-w-none overflow-x-hidden">
            {/* Enhanced Structured Data for Article */}
            <ArticleSchema
                title={data.title}
                description={data.description}
                author={data.author}
                datePublished={data.date}
                dateModified={data.modifiedDate || data.date}
                image={data.image || `https://ratnesh-maurya.com/blogs/${slug}.jpg`}
                url={`https://ratnesh-maurya.com/blogs/${slug}`}
                keywords={data.keywords}
                category={data.category}
                readTime={data.readTime}
            />

            {/* Breadcrumb Schema */}
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://ratnesh-maurya.com" },
                    { name: "Blogs", url: "https://ratnesh-maurya.com/blogs" },
                    { name: data.title, url: `https://ratnesh-maurya.com/blogs/${slug}` }
                ]}
            />

            <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
                {/* Header Section */}
                <header>
                    <div className="text-sm text-gray-600 mb-4">
                        <Link href="/blogs" className="hover:underline">
                            ← Back to Blog
                        </Link>
                    </div>

                    <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900 mb-4">
                        {data.title}
                    </h1>

                    <div className="text-gray-600 mb-6">
                        {new Date(data.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </header>

                {/* Blog Content Section */}
                <article className="prose prose-gray prose-sm sm:prose-base lg:prose-lg max-w-none overflow-hidden">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) => {
                                const match = /language-(\w+)/.exec(className || '');
                                const isInline = !match;
                                return !isInline ? (
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter
                                            // @ts-expect-error -- oneLight theme is correctly typed internally
                                            style={oneLight}
                                            language={match?.[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: 0,
                                                borderRadius: '0.375rem',
                                                fontSize: '0.875rem',
                                                lineHeight: '1.25rem'
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono text-sm break-words" {...props}>
                                        {children}
                                    </code>
                                );
                            },
                            pre: ({ children }: ComponentPropsWithoutRef<'pre'>) => (
                                <div className="overflow-x-auto">
                                    {children}
                                </div>
                            ),
                            table: ({ children, ...props }: ComponentPropsWithoutRef<'table'>) => (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full" {...props}>
                                        {children}
                                    </table>
                                </div>
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    );
}