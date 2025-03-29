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
import { notFound } from 'next/navigation';
import { Metadata } from "next";
import BlogPost from '@/components/BlogPost';

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

    const file = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeDocument, { title: '👋🌍' })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .use(rehypePrettyCode, {
            theme: 'ayu-dark',
            transformers: [
                transformerCopyButton({
                    visibility: 'always',
                    feedbackDuration: 3_000,
                }),
            ],
        })
        .process(content)
        .then((file) => file.toString());

    return (
        <BlogPost
            title={data.title}
            description={data.description}
            author={data.author}
            date={data.date}
            slug={slug}
            content={file}
        />
    );
}
