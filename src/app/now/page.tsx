import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Now',
  description:
    "Ratnesh Maurya is currently focused on learning Go and Elixir — building backend systems, concurrency, and OTP. A living snapshot of work, learning, and writing.",
  alternates: { canonical: 'https://ratnesh-maurya.com/now' },
  openGraph: {
    title: 'Now — Ratnesh Maurya',
    description: "Focused on learning Go and Elixir. Backend, concurrency, OTP.",
    url: 'https://ratnesh-maurya.com/now',
  },
};

// ---------------------------------------------------------------------------
// Last updated — update this manually when you edit the page
// ---------------------------------------------------------------------------
const LAST_UPDATED = 'February 2026';

const NOW_SECTIONS = [
  {
    label: 'Learning',
    items: [
      {
        title: 'Go (Golang)',
        body: 'Going deeper on concurrency (goroutines, channels, sync primitives), standard library patterns, and writing production-grade APIs and CLI tools. Applying it daily in Kubernetes controllers and backend services.',
      },
      {
        title: 'Elixir & OTP',
        body: 'Learning the language and the OTP stack — GenServer, supervision trees, fault tolerance, and building resilient systems on the BEAM. Focusing on patterns that make distributed, concurrent backends a joy to reason about.',
      },
    ],
  },
  {
    label: 'Work',
    items: [
      {
        title: 'Backend at Initializ',
        body: 'Building scalable services in Go and Elixir: cloud-native tooling, custom Kubernetes controllers, and RAG-based platform features. Putting the learning into practice every day.',
        link: { href: 'https://www.initializ.ai', label: 'initializ.ai' },
      },
    ],
  },
  {
    label: 'Writing',
    items: [
      {
        title: 'Ratn Labs',
        body: 'Writing about systems design, backend architecture, and what I learn along the way — including Go, Elixir, and distributed systems.',
        link: { href: 'https://blog.ratnesh-maurya.com', label: 'blog.ratnesh-maurya.com' },
      },
    ],
  },
  {
    label: 'Elsewhere',
    items: [
      {
        title: 'Side projects & algorithms',
        body: 'Shipping small tools (JSONic, mdconverter, npm-compare) and solving problems on Codeforces and LeetCode to keep the fundamentals sharp.',
      },
    ],
  },
];

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Now', item: 'https://ratnesh-maurya.com/now' },
  ],
};

export default function NowPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[#030d0e]">
        <div className="orb orb-sky" />
        <div className="orb orb-indigo" />
      </div>

      <div
        className="relative z-10 min-h-screen"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        {/* Top bar */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[rgba(3,9,17,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]">
          <div className="max-w-3xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">RM / Now</span>
            <span className="text-xs text-[#334155]">{LAST_UPDATED}</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24">

          {/* Header */}
          <div className="mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.18)] text-[#2dd4bf] text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
              Updated {LAST_UPDATED}
            </div>
            <h1 className="text-4xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
              What I&apos;m doing now
            </h1>
            <p className="text-[#94a3b8] leading-relaxed text-lg mb-2">
              Right now I&apos;m focused on <span className="text-[#f1f5f9] font-medium">learning Go and Elixir</span> — building a strong foundation in both so I can ship better backend systems.
            </p>
            <p className="text-[#64748b] text-sm leading-relaxed">
              A living snapshot. Inspired by{' '}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#94a3b8] hover:text-[#2dd4bf] transition-colors underline decoration-[rgba(20,184,166,0.3)]"
              >
                nownownow.com
              </a>
              .
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {NOW_SECTIONS.map((section) => (
              <div key={section.label}>
                {/* Section label */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6]">
                    {section.label}
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[rgba(20,184,166,0.3)] to-transparent" />
                </div>

                {/* Items */}
                <div className="space-y-4">
                  {section.items.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] p-6 hover:border-[rgba(255,255,255,0.11)] transition-colors duration-200"
                    >
                      <h3 className="font-semibold text-[#f1f5f9] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{item.body}</p>
                      {'link' in item && item.link && (
                        <a
                          href={item.link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-[#14b8a6] hover:text-sky-300 transition-colors group"
                        >
                          {item.link.label}
                          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-xs text-[#334155] leading-relaxed">
              This is a{' '}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noreferrer"
                className="text-[#475569] hover:text-[#64748b] transition-colors underline"
              >
                /now page
              </a>
              . If you have one too, consider adding it to the{' '}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#475569] hover:text-[#64748b] transition-colors underline"
              >
                nownownow.com
              </a>{' '}
              directory.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
