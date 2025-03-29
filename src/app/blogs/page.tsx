import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from './BlogList';
import { Metadata } from 'next';

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
            url: 'https://ratn.tech/blogs',
            images: {
                url: 'https://ratn.tech/blogs.jpg',
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
                url: 'https://ratn.tech/blogs.jpg',
                width: 1200,
                height: 630,
                alt: 'Blogs - Ratnesh Maurya',
            },
        },
    };

}

export default function BlogsPage() {
    const posts = getBlogPosts(); // This runs server-side
    return <BlogList posts={posts} />;
}
