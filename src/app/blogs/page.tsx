import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs - Ratnesh Maurya',
    description:
        "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
    openGraph: {
        title: 'Blogs - Ratnesh Maurya',
        description:
            "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
        type: 'website',
        url: 'https://ratn.tech/blogs',
        images: [
            {
                url: 'https://ratn.tech/blogs.png',
                width: 1200,
                height: 630,
                alt: 'Ratnesh Maurya Portfolio Image',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        site: '@ratnesh_maurya_',
        title: 'Blogs - Ratnesh Maurya',
        description:
            "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
        creator: '@ratnesh_maurya_',
        images: [
            {
                url: 'https://ratn.tech/blogs.png',
                width: 1200,
                height: 630,
                alt: 'Ratnesh Maurya Portfolio Image',
            },
        ],
    },
};

interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}

// Fetch blog posts from the file system
const getBlogPosts = (): BlogPost[] => {
    const dirContent = fs.readdirSync('src/blogContent', 'utf-8');
    const posts = dirContent.map((fileName) => {
        const fileContent = fs.readFileSync(`src/blogContent/${fileName}`, 'utf-8');
        const { data } = matter(fileContent);
        return {
            title: data.title,
            excerpt: data.description,
            date: data.date,
            readTime: data.readTime || '5 min read', // Default read time if not provided
            slug: data.slug,
        };
    });

    // Sort posts by date
    return posts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });
};

export default function BlogsPage() {
    const posts = getBlogPosts();

    return (
        <div  className="max-w-3xl mx-auto min-h-screen px-2 font-sans">
            <div>
                <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Blogs ✍️</h1>
            </div>
            
        <section className="py-12 px-2" id="blogs">
            <div className=" ">
                <div className="space-y-8">
                    {posts.map((post, index) => (
                        <article key={index} className="group">
                            <Link href={`/blogs/${post.slug}`}>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <time dateTime={post.date}>{post.date}</time>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground">{post.excerpt}</p>
                                    <div className="flex items-center gap-2 text-teal-600 dark:text-orange-500 font-medium">
                                        Read more
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}