'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonicalUrl: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  publishedTime?: string;
  modifiedTime?: string;
  articleSection?: string;
  articleTags?: string[];
  locale?: string;
  alternateLanguages?: { [key: string]: string };
  noindex?: boolean;
  nofollow?: boolean;
}

export function SEOHead({
  title,
  description,
  keywords,
  author = 'Ratnesh Maurya',
  canonicalUrl,
  ogImage = 'https://ratnesh-maurya.com/ratn.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  publishedTime,
  modifiedTime,
  articleSection,
  articleTags,
  locale = 'en_US',
  alternateLanguages,
  noindex = false,
  nofollow = false
}: SEOHeadProps) {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content={locale.replace('_', '-')} />
      <meta name="language" content={locale.replace('_', '-')} />
      
      {/* Alternate Languages */}
      {alternateLanguages && Object.entries(alternateLanguages).map(([lang, url]) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Ratnesh Maurya Portfolio" />
      <meta property="og:locale" content={locale} />
      
      {/* Article-specific Open Graph tags */}
      {ogType === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {articleSection && <meta property="article:section" content={articleSection} />}
          {articleTags && articleTags.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@ratnesh_maurya_" />
      <meta name="twitter:creator" content="@ratnesh_maurya_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0d9488" />
      <meta name="msapplication-TileColor" content="#0d9488" />
      <meta name="application-name" content="Ratnesh Maurya Portfolio" />
      <meta name="apple-mobile-web-app-title" content="Ratnesh Maurya" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://images.credly.com" />
      <link rel="preconnect" href="https://avatars.githubusercontent.com" />
      <link rel="preconnect" href="https://res.cloudinary.com" />
      
      {/* DNS Prefetch for better performance */}
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      
      {/* Structured Data will be added separately via StructuredData components */}
    </Head>
  );
}

// Utility function to generate meta tags for Next.js Metadata API
export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://ratnesh-maurya.com/ratn.jpg',
  ogType = 'website',
  noindex = false,
  nofollow = false
}: Omit<SEOHeadProps, 'author' | 'twitterCard' | 'locale' | 'alternateLanguages' | 'publishedTime' | 'modifiedTime' | 'articleSection' | 'articleTags'>) {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-snippet:-1',
    'max-image-preview:large',
    'max-video-preview:-1'
  ].join(', ');

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Ratnesh Maurya', url: 'https://ratnesh-maurya.com' }],
    creator: 'Ratnesh Maurya',
    publisher: 'Ratnesh Maurya',
    robots: robotsContent,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'x-default': canonicalUrl
      }
    },
    openGraph: {
      title,
      description,
      type: ogType,
      url: canonicalUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      siteName: 'Ratnesh Maurya Portfolio',
      locale: 'en_US'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@ratnesh_maurya_',
      creator: '@ratnesh_maurya_',
      title,
      description,
      images: [ogImage]
    },
    other: {
      'theme-color': '#0d9488',
      'msapplication-TileColor': '#0d9488',
      'application-name': 'Ratnesh Maurya Portfolio',
      'apple-mobile-web-app-title': 'Ratnesh Maurya',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'mobile-web-app-capable': 'yes'
    }
  };
}
