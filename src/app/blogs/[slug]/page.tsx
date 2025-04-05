import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { type ComponentPropsWithoutRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from "next";
import ShareButtons from '@/components/ShareButtons';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(blogContentPath, `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
        title: `${data.title} - Ratnesh Maurya`,
        description: data.description,
        keywords: data.keywords,
        openGraph: {
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            type: 'article',
            url: `https://ratn.tech/blogs/${params.slug}`,
            images: {
                url: `${data.image}`,
                width: 1200,
                height: 630,
                alt: `${data.title} - Ratnesh Maurya`,
            },
        },
        twitter: {
            card: 'summary_large_image',
            site: '@ratnesh_maurya_',
            title: `${data.title} - Ratnesh Maurya`,
            description: data.description,
            creator: '@ratnesh_maurya_',
            images: {
                url: `${data.image}`,
                width: 1200,
                height: 630,
                alt: `${data.title} - Ratnesh Maurya`,
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
        <article className="max-w-3xl mx-auto px-4 py-8 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16 sm:p-6 sm:mx-auto">
            {/* Breadcrumb and Navigation */}
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                <Link href="/blogs" className="text-teal-600 dark:text-orange-500 hover:text-teal-800 dark:hover:text-orange-600">
                    Blogs
                </Link>
                <span className="mx-2">/</span>
                <span className="text-gray-500">{slug}</span>
            </div>

            {/* Header Section */}
            <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-semibold text-teal-700 dark:text-teal-500 leading-tight mb-4 font-merriweather">
                    {data.title}
                </h1>

                <div className="text-lg text-gray-600 dark:text-gray-400 mb-6 font-serif italic border-l-4 border-teal-500 pl-4">
                    &ldquo;{data.description}&rdquo;
                </div>

                <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between text-gray-600 dark:text-gray-300 text-sm mb-6 space-y-2 sm:space-y-0">
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                        <div className="flex items-center gap-1">
                            <span className="font-medium">By:</span> {data.author}
                        </div>
                        <span className="hidden sm:block">&#183;</span>
                        <div className="flex items-center gap-1">
                            <span className="font-medium">Published:</span> {new Date(data.date).toLocaleDateString()}
                        </div>
                    </div>
                    <div>
                        <ShareButtons title={data.title} url={`https://ratn.tech/blogs/${slug}`} />
                    </div>
                </div>
            </header>

            {/* Blog Content Section */}
            <div className="prose max-w-none font-sans dark:text-gray-300">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'>) => {
                            const match = /language-(\w+)/.exec(className || '');
                            const isInline = !match;
                            return !isInline ? (
                                <SyntaxHighlighter
                                    // @ts-expect-error -- oneDark theme is correctly typed internally
                                    style={oneDark}
                                    language={match?.[1]}
                                    PreTag="div"
                                    {...props}
                                >
                                    {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                            ) : (
                                <code className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-1.5 py-0.5 rounded-md font-mono text-sm" {...props}>
                                    {children}
                                </code>
                            );
                        },
                        // Customize heading styles
                        h1: ({ children, ...props }: ComponentPropsWithoutRef<'h1'>) => (
                            <h1 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h1>
                        ),
                        h2: ({ children, ...props }: ComponentPropsWithoutRef<'h2'>) => (
                            <h2 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h2>
                        ),
                        h3: ({ children, ...props }: ComponentPropsWithoutRef<'h3'>) => (
                            <h3 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h3>
                        ),
                        h4: ({ children, ...props }: ComponentPropsWithoutRef<'h4'>) => (
                            <h4 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h4>
                        ),
                        h5: ({ children, ...props }: ComponentPropsWithoutRef<'h5'>) => (
                            <h5 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h5>
                        ),
                        h6: ({ children, ...props }: ComponentPropsWithoutRef<'h6'>) => (
                            <h6 className="text-teal-700 dark:text-teal-500" {...props}>{children}</h6>
                        ),
                        // Customize link styles
                        a: ({ children, ...props }: ComponentPropsWithoutRef<'a'>) => (
                            <a className="text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-orange-600" {...props}>{children}</a>
                        ),
                        // Customize paragraph styles
                        p: ({ children, ...props }: ComponentPropsWithoutRef<'p'>) => (
                            <p className="text-gray-800 dark:text-gray-300" {...props}>{children}</p>
                        ),
                        // Add strong element styling
                        strong: ({ children, ...props }: ComponentPropsWithoutRef<'strong'>) => (
                            <strong className="text-black dark:text-white font-bold" {...props}>{children}</strong>
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </article>
    );
}