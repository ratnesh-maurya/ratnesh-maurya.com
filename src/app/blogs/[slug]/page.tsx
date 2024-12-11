import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const filePath = path.join(blogContentPath, `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    return {
        title: `${data.title} - Ratnesh Maurya`,
        description: data.description,
    };
}

// Define the path for blog content
const blogContentPath = path.join(process.cwd(), 'src', 'blogContent');

// The page component that handles slug-based routing
export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const filePath = path.join(blogContentPath, `${slug}.md`);

    // Ensure the file exists, otherwise handle errors
    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(fileContent);

    // Process the content using unified (remark/rehype)
    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: 'one-dark-pro',
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .process(content)
        .then((file) => file.toString());

    // Return the page with the fetched content
    return (
        <article className="mx-auto px-4 py-8 mb font-assistant">
            <div className="text-s text-gray-600 mb-6">
                <Link href="/blogs" className="text-teal-600 hover:text-teal-800">
                    blogs
                </Link>
                <span className="mx-2">/</span>
                <span>{slug}</span>
            </div>
            <header className="mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 font-merriweather text-teal-700">{data.title}</h1>

                <div className="text-lg text-gray-700 mb-6 font-assistant border-l-4 border-gray-200 pl-4">
                    &quot;{data.description}&quot;
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                    <div className="mr-4">
                        <span className="font-medium font-assistant">By: </span>
                        {data.author}
                    </div>
                    <div>
                        <span className="font-medium font-assistant mb">Published: </span>
                        {new Date(data.date).toLocaleDateString()}
                    </div>
                </div>
            </header>

            <div
                className="prose max-w-none font-assistant"
                dangerouslySetInnerHTML={{ __html: file }}
            />
        </article>
    );
}
