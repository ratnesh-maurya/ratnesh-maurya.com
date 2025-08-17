'use client';

import Head from 'next/head';

interface MetaTagsProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
}

export function MetaTags({
    title = "Ratnesh Maurya | Software Development Engineer",
    description = "Experienced Software Development Engineer specializing in Golang, TypeScript, AWS, and modern web technologies. Explore my portfolio of innovative projects.",
    keywords = "Ratnesh Maurya, Software Engineer, Golang, TypeScript, AWS, Kubernetes, Full Stack Developer, Web Development",
    image = "https://ratnesh-maurya.com/ratn.jpg",
    url = "https://ratnesh-maurya.com/",
    type = "website",
    author = "Ratnesh Maurya",
    publishedTime,
    modifiedTime,
    section,
    tags = []
}: MetaTagsProps) {
    const fullTitle = title.includes("Ratnesh Maurya") ? title : `${title} | Ratnesh Maurya`;

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Canonical URL */}
            <link rel="canonical" href={url} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content="Ratnesh Maurya" />
            <meta property="og:locale" content="en_US" />

            {/* Article specific OG tags */}
            {type === 'article' && (
                <>
                    <meta property="article:author" content={author} />
                    {publishedTime && <meta property="article:published_time" content={publishedTime} />}
                    {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
                    {section && <meta property="article:section" content={section} />}
                    {tags.map((tag, index) => (
                        <meta key={index} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ratnesh_maurya_" />
            <meta name="twitter:creator" content="@ratnesh_maurya_" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#f97316" />
            <meta name="msapplication-TileColor" content="#f97316" />
            <meta name="format-detection" content="telephone=no" />

            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="//github.com" />
            <link rel="dns-prefetch" href="//linkedin.com" />
            <link rel="dns-prefetch" href="//x.com" />

            {/* Favicon and Icons */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Alternative links */}
            <link rel="alternate" type="application/rss+xml" title="Ratnesh Maurya Blog" href="/rss.xml" />

            {/* Geo tags */}
            <meta name="geo.region" content="IN" />
            <meta name="geo.country" content="India" />

            {/* Language */}
            <meta httpEquiv="content-language" content="en-US" />

            {/* Security headers */}
            <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
            <meta httpEquiv="X-Frame-Options" content="DENY" />
            <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

            {/* Performance hints */}
            <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
        </Head>
    );
}
