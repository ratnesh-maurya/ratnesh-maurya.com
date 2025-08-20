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
    category?: string;
    views?: number;
}

// Cache for blog posts to avoid repeated file system reads
let cachedPosts: BlogPost[] | null = null;

const getBlogPosts = (): BlogPost[] => {
    // Return cached posts if available (in production)
    if (cachedPosts && process.env.NODE_ENV === 'production') {
        return cachedPosts;
    }

    const blogDir = path.join(process.cwd(), 'src/blogContent');

    try {
        const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

        const posts = files.map((fileName) => {
            const filePath = path.join(blogDir, fileName);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            return {
                title: data.title || 'Untitled',
                excerpt: data.description || '',
                date: data.date || new Date().toISOString(),
                readTime: data.readTime || '5 min read',
                slug: data.slug || fileName.replace('.md', ''),
                category: data.category || 'Technology',
                views: Math.floor(Math.random() * 500) + 100,
            };
        });

        const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        // Cache the posts
        cachedPosts = sortedPosts;

        return sortedPosts;
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return [];
    }
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



    return (
        <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
            {/* Hero Section */}
            <section>
                <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900">
                    Blog
                </h1>
            </section>

            {/* All Articles */}
            <section>
                <ul className="space-y-1 divide-y divide-neutral-300">
                    {posts.map((post) => (
                        <li key={post.slug} className="py-1.5 transition-opacity hover:opacity-70 text-md">
                            <Link
                                className="no-underline text-current hover:no-underline font-normal"
                                href={`/blogs/${post.slug}`}
                            >
                                <div className="flex flex-col sm:flex-row py-2 sm:items-center">
                                    <div className="flex-1 mr-3 truncate">{post.title}</div>
                                    <span className="shrink-0">{post.date}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}