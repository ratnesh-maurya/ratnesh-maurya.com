import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { SiX, SiLinkedin } from 'react-icons/si';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Social — X & LinkedIn',
  description:
    'Find Ratnesh Maurya on X (Twitter) and LinkedIn. Posts on backend engineering, Go, Elixir, distributed systems, and career updates. Connect and follow for updates.',
  keywords: [
    'Ratnesh Maurya Twitter',
    'Ratnesh Maurya X',
    'Ratnesh Maurya LinkedIn',
    'ratnesh_maurya_ twitter',
    'ratnesh maurya social',
    'ratnesh maurya posts',
  ],
  alternates: { canonical: 'https://ratnesh-maurya.com/social' },
  openGraph: {
    title: 'Social — Ratnesh Maurya on X & LinkedIn',
    description: 'Posts, updates, and professional profile. Backend engineering, Go, Elixir.',
    url: 'https://ratnesh-maurya.com/social',
  },
};

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Social', item: 'https://ratnesh-maurya.com/social' },
  ],
};

/** FAQ schema so search/voice can answer "Where is Ratnesh Maurya on Twitter?" etc. */
const SOCIAL_FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Ratnesh Maurya on Twitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is on X (Twitter) at @ratnesh_maurya_. You can find his profile and tweets at https://x.com/ratnesh_maurya_.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Ratnesh Maurya\'s Twitter handle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya\'s Twitter (X) handle is @ratnesh_maurya_.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find Ratnesh Maurya on LinkedIn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya is on LinkedIn at https://www.linkedin.com/in/ratnesh-maurya. You can connect with him there for professional updates and posts on backend engineering.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I connect with Ratnesh Maurya on social media?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can follow Ratnesh Maurya on X (Twitter) at @ratnesh_maurya_ and connect on LinkedIn at linkedin.com/in/ratnesh-maurya. His social page with links is at https://ratnesh-maurya.com/social.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Ratnesh Maurya\'s X (Twitter) profile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ratnesh Maurya\'s X profile is https://x.com/ratnesh_maurya_. He posts about backend engineering, Go, Elixir, and distributed systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ratnesh Maurya post on Twitter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ratnesh Maurya posts on X (Twitter) at @ratnesh_maurya_ about backend engineering, Go, Elixir, and what he\'s building. You can see his latest tweets on his social page at ratnesh-maurya.com/social.',
      },
    },
  ],
};

const SOCIAL_LINKS = [
  {
    label: 'X (Twitter)',
    handle: '@ratnesh_maurya_',
    href: 'https://x.com/ratnesh_maurya_',
    icon: SiX,
    desc: 'I share thoughts on backend engineering, Go, Elixir, distributed systems, and what I\'m building. Follow for updates, learnings, and the occasional hot take.',
    cta: 'Follow on X',
  },
  {
    label: 'LinkedIn',
    handle: 'Ratnesh Maurya',
    href: 'https://www.linkedin.com/in/ratnesh-maurya',
    icon: SiLinkedin,
    desc: 'Professional profile, experience, and longer-form posts on software engineering, career, and building systems at scale. Connect for collabs and conversations.',
    cta: 'Connect on LinkedIn',
  },
];

export default function SocialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOCIAL_FAQ_LD) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Ratnesh Maurya',
            url: 'https://ratnesh-maurya.com',
            sameAs: [
              'https://x.com/ratnesh_maurya_',
              'https://www.linkedin.com/in/ratnesh-maurya',
            ],
          }),
        }}
      />

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
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">RM / Social</span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24">
          {/* Header */}
          <div className="mb-12">
            <nav className="text-xs text-[#334155] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#14b8a6] transition-colors">ratnesh-maurya.com</Link>
              <span className="mx-2">›</span>
              <span className="text-[#2dd4bf]">Social</span>
            </nav>
            <h1 className="text-4xl font-bold text-[#f0fdfa] mb-3 tracking-tight">Social</h1>
            <p className="text-[#64748b] leading-relaxed text-lg">
              Find me on X (Twitter) and LinkedIn — posts on backend engineering, Go, Elixir, and what I&apos;m building. Connect or follow for updates.
            </p>
          </div>

          {/* Latest on X — link only (embed often 429s) */}
          <a
            href="https://x.com/ratnesh_maurya_"
            target="_blank"
            rel="noreferrer"
            className="mb-8 flex items-center gap-4 rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(20,184,166,0.25)] p-4 transition-all duration-200 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#94a3b8] group-hover:text-[#2dd4bf]">
              <SiX className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#f0fdfa] group-hover:text-white">Latest posts on X</p>
              <p className="text-xs text-[#64748b]">Click to see my recent tweets at @ratnesh_maurya_</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#334155] group-hover:text-[#14b8a6] shrink-0" />
          </a>

          {/* Social cards */}
          <div className="space-y-6">
            {SOCIAL_LINKS.map(({ label, handle, href, icon: Icon, desc, cta }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(20,184,166,0.25)] hover:bg-[rgba(255,255,255,0.04)] p-6 md:p-7 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#94a3b8] group-hover:text-[#2dd4bf] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-[#f0fdfa] group-hover:text-white transition-colors">
                        {label}
                      </h2>
                      <p className="text-sm text-[#64748b]">{handle}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#334155] group-hover:text-[#14b8a6] shrink-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-4 text-sm text-[#94a3b8] leading-relaxed">{desc}</p>
                <span className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[#14b8a6] group-hover:text-[#2dd4bf] transition-colors">
                  {cta}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>

          <p className="mt-10 text-xs text-[#334155] leading-relaxed">
            You can also find me on{' '}
            <Link href="/github" className="text-[#475569] hover:text-[#14b8a6] transition-colors">GitHub</Link>
            {' '}and{' '}
            <Link href="/blog" className="text-[#475569] hover:text-[#14b8a6] transition-colors">Ratn Labs</Link>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
