import Link from 'next/link'
import React from 'react'
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs - Ratnesh Maurya",
  description: "Explore Ratnesh Maurya's blog posts on software engineering, technology, and personal development.",
};


const dirContent = fs.readdirSync("src/blogContent","utf-8");
const posts = dirContent.map((fileName) => {
    const fileContent = fs.readFileSync(`src/blogContent/${fileName}`, 'utf-8');
    const { data } = matter(fileContent);
    return data;
}); 


function page() {
    return (
        <div>
            <section className=" min-h-screen text-gray-600 body-font font-assistant overflow-hidden  ">
                <div className="container px-5 py-16 font-assistant mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        {posts.map((post) => (
                            <div key={post.slug} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">{post.category || 'CATEGORY'}</span>
                                    <span className="mt-1 text-gray-500 text-sm">{post.date || '12 Jun 2019'}</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{post.title}</h2>
                                    <p className="leading-relaxed">{post.description}</p>
                                    <Link href={`/blogs/${post.slug}`} className="text-teal-600 inline-flex items-center mt-4">
                                        Learn More
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