
import Link from 'next/link'
import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Ratnesh Maurya",
  description: "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
  openGraph: {
    title: "Blogs - Ratnesh Maurya",
    description: "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
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
        title: "Blogs - Ratnesh Maurya",
        description: "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
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


const dirContent = fs.readdirSync("src/blogContent","utf-8");
let posts = dirContent.map((fileName) => {
    const fileContent = fs.readFileSync(`src/blogContent/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return data;
}); 

posts = posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
        return dateB.getTime() - dateA.getTime();
    }
    return 0;
});

function page() {
    return (
        <div className="max-w-3xl mx-auto min-h-screen px-2 ">
            <h1 className="text-3xl font-bold">Blogs</h1>
            <section className="  dark:text-gray-300 text-gray-600 body-font font-sans overflow-hidden  ">
                <div className="container px-5 py-16 font-sans mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {posts.map((post) => (
                            <div key={post.slug} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font dark:text-gray-100 text-gray-700">{post.category || 'CATEGORY'}</span>
                                    <span className="mt-1 text-gray-500 dark:text-gray-300 text-sm">{post.date || '12 Jun 2019'}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="  text-xl text-gray-900  dark:text-gray-100 mb-2">{post.title}</h2>
                                    <p className="leading-relaxed">{post.description}</p>
                                    <Link href={`/blogs/${post.slug}`} className="text-teal-600 dark:text-teal-100 inline-flex items-center mt-4">
                                        Read More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
export default page