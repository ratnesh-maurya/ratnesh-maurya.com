import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { fetchBlogPosts } from '@/lib/blog';
import Footer from '@/components/Footer';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog — Ratn Labs',
  description:
    'Technical articles on systems thinking, backend architecture, Go, Elixir, distributed systems, AWS and AI engineering by Ratnesh Maurya.',
  keywords: [
    'Ratnesh Maurya blog', 'ratnesh maurya articles', 'Ratn Labs',
    'Go backend blog', 'Elixir blog', 'distributed systems blog India',
    'backend engineering articles', 'systems design blog',
  ],
  alternates: {
    canonical: 'https://blog.ratnesh-maurya.com',
    types: { 'application/rss+xml': 'https://blog.ratnesh-maurya.com/feed.xml' },
  },
  openGraph: {
    title: 'Ratn Labs — Technical Writing by Ratnesh Maurya',
    description: 'Systems thinking, backend architecture, and AI engineering articles.',
    url: 'https://blog.ratnesh-maurya.com',
  },
};

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://ratnesh-maurya.com/blog' },
  ],
};

const CATEGORIES = [
  { name: 'System Design',       color: '#2dd4bf' },
  { name: 'Golang',              color: '#99f6e4' },
  { name: 'AWS',                 color: '#fb923c' },
  { name: 'Computer Science',    color: '#a78bfa' },
  { name: 'Web Development',     color: '#60a5fa' },
  { name: 'Software Architecture', color: '#34d399' },
];

function categoryColor(cat: string): string {
  return CATEGORIES.find((c) => c.name === cat)?.color ?? '#64748b';
}

export default async function BlogPage() {
  const posts = await fetchBlogPosts(20);

  const blogListLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ratn Labs',
    url: 'https://blog.ratnesh-maurya.com',
    description: 'Systems thinking, backend architecture, and AI engineering by Ratnesh Maurya.',
    author: { '@type': 'Person', name: 'Ratnesh Maurya', url: 'https://ratnesh-maurya.com' },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      description: p.desc,
      url: p.href,
      datePublished: p.date,
      author: { '@type': 'Person', name: 'Ratnesh Maurya' },
      keywords: p.category,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListLd) }} />

      <div className="fixed inset-0 z-0 bg-[#030d0e]">
        <div className="orb orb-sky" />
        <div className="orb orb-indigo" />
      </div>

      <div className="relative z-10 min-h-screen" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {/* Top bar */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[rgba(3,13,14,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]">
          <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">Ratn Labs</span>
            <a href="https://blog.ratnesh-maurya.com/feed.xml" target="_blank" rel="noreferrer"
              className="text-xs text-[#334155] hover:text-[#14b8a6] transition-colors">
              RSS ↗
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24">
          {/* Header */}
          <div className="mb-12">
            <nav className="text-xs text-[#334155] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#14b8a6] transition-colors">ratnesh-maurya.com</Link>
              <span className="mx-2">›</span>
              <span className="text-[#2dd4bf]">Blog</span>
            </nav>
            <h1 className="text-4xl font-bold text-[#f0fdfa] mb-3 tracking-tight">Ratn Labs</h1>
            <p className="text-[#64748b] leading-relaxed text-lg mb-5">
              Systems thinking, backend architecture, and AI engineering. Writing about Go, Elixir, distributed systems, AWS, and the craft of building reliable software.
            </p>
            <a href="https://blog.ratnesh-maurya.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#2dd4bf] border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.07)] px-4 py-2 rounded-full hover:bg-[rgba(20,184,166,0.13)] transition-colors">
              Visit blog.ratnesh-maurya.com <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((c) => (
              <span key={c.name}
                className="text-[11px] font-medium px-3 py-1 rounded-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]"
                style={{ color: c.color }}>
                {c.name}
              </span>
            ))}
          </div>

          {/* Posts list */}
          <div className="flex flex-col gap-3">
            {posts.map((post) => (
              <a key={post.href} href={post.href} target="_blank" rel="noreferrer"
                className="group flex gap-5 items-start p-5 rounded-2xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(20,184,166,0.22)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 cursor-pointer">
                <div className="shrink-0 text-left w-12">
                  <span className="text-xs font-bold uppercase tracking-widest mt-0.5 block"
                    style={{ color: categoryColor(post.category) }}>
                    {post.year}
                  </span>
                  {post.category && (
                    <span className="text-[9px] text-[#334155] leading-tight block mt-0.5">{post.category}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-sm font-semibold text-[#e2e8f0] mb-1 group-hover:text-white transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">{post.desc}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#475569] group-hover:text-[#14b8a6] shrink-0 mt-0.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://blog.ratnesh-maurya.com" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#14b8a6] transition-colors group">
              Read all articles at Ratn Labs <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
