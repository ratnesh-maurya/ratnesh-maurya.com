import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Open-source projects and web applications built by Ratnesh Maurya — Personal Tracker, Rehabify, JSONic, mdconverter, npm-compare, and more.',
  keywords: [
    'Ratnesh Maurya projects', 'ratnesh maurya open source', 'Go projects',
    'Elixir projects', 'Next.js apps', 'ratnesh maurya github',
  ],
  alternates: { canonical: 'https://ratnesh-maurya.com/projects' },
  openGraph: {
    title: 'Projects — Ratnesh Maurya',
    description: 'Open-source tools, web apps & backend systems built by Ratnesh Maurya.',
    url: 'https://ratnesh-maurya.com/projects',
  },
};

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://ratnesh-maurya.com/projects' },
  ],
};

const PROJECTS = [
  {
    title: 'Personal Tracker',
    href: 'https://tracker.ratnesh-maurya.com/',
    github: 'https://github.com/ratnesh-maurya/personal-tracker',
    img: '/tracker.png',
    desc: 'A comprehensive personal tracker to build better habits. Tracks habits, expenses, sleep, and study time with interactive analytics dashboards powered by MUI X Charts. Built as a PWA so it works offline.',
    tech: ['Next.js', 'TypeScript', 'PWA', 'MUI X Charts'],
    status: 'Live',
  },
  {
    title: 'Rehabify',
    href: 'https://rehabify.ratnesh-maurya.com/',
    github: 'https://github.com/ratnesh-maurya/rehabify',
    img: '/rehabify.png',
    desc: 'A centralised management platform for de-addiction centres (Nasha Mukti Kendras) in India. Features patient registration, treatment tracking, resource directory, and dynamic React frontend with advanced search.',
    tech: ['Golang', 'TypeScript', 'MongoDB', 'React.js', 'Docker'],
    status: 'Live',
  },
  {
    title: 'JSONic',
    href: 'https://jsonic.ratnesh-maurya.com',
    github: 'https://github.com/ratnesh-maurya/jsonic',
    img: '/jsonic.png',
    desc: 'A lightweight, powerful utility for parsing, formatting, validating, and manipulating JSON data directly in the browser. Built for developer productivity with a clean minimal UI.',
    tech: ['Next.js', 'TypeScript', 'React'],
    status: 'Live',
  },
  {
    title: 'mdconverter',
    href: 'https://mdconverter.ratnesh-maurya.com',
    github: 'https://github.com/ratnesh-maurya/mdconverter',
    img: '/mdconverter.png',
    desc: 'Real-time text to Markdown converter with live split-pane preview. Paste your content and watch it transform instantly with formatting options for common Markdown patterns.',
    tech: ['Next.js', 'TypeScript', 'Markdown'],
    status: 'Live',
  },
  {
    title: 'npm-compare',
    href: 'https://npm-compare.ratnesh-maurya.com/',
    github: 'https://github.com/ratnesh-maurya/npm-compare',
    img: '/npm-compare.png',
    desc: 'Side-by-side npm package comparison tool with intelligent recommendations, download trend charts, bundle size comparisons, and detailed dependency analysis to help developers choose the right package.',
    tech: ['Next.js', 'TypeScript', 'npm API'],
    status: 'Live',
  },
  {
    title: 'Unzip N Open',
    href: 'https://github.com/ratnesh-maurya/unzip-n-open',
    github: 'https://github.com/ratnesh-maurya/unzip-n-open',
    img: null,
    desc: 'A cross-platform CLI tool built with Golang and Go Cobra to simplify file extraction. Supports seamless unzipping and direct integration with IntelliJ IDEA and Visual Studio Code across Linux, Windows, and macOS.',
    tech: ['Golang', 'Go Cobra', 'CLI', 'Cross-platform'],
    status: 'Open Source',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Projects by Ratnesh Maurya',
            itemListElement: PROJECTS.map((p, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: p.title,
              url: p.href,
              description: p.desc,
            })),
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
          <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">RM / Projects</span>
            <span className="text-xs text-[#334155]">{PROJECTS.length} projects</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-24 pb-24">
          {/* Header */}
          <div className="mb-12">
            <nav className="text-xs text-[#334155] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#14b8a6] transition-colors">ratnesh-maurya.com</Link>
              <span className="mx-2">›</span>
              <span className="text-[#2dd4bf]">Projects</span>
            </nav>
            <h1 className="text-4xl font-bold text-[#f0fdfa] mb-3 tracking-tight">Projects</h1>
            <p className="text-[#64748b] leading-relaxed text-lg">
              Open-source tools, web applications, and backend systems I&apos;ve built.
              All source code is available on{' '}
              <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noreferrer"
                className="text-[#94a3b8] hover:text-[#2dd4bf] transition-colors underline decoration-[rgba(20,184,166,0.3)]">
                GitHub
              </a>.
            </p>
          </div>

          {/* Projects grid */}
          <div className="flex flex-col gap-5">
            {PROJECTS.map((p) => (
              <div key={p.title}
                className="group rounded-2xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] hover:border-[rgba(20,184,166,0.25)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 p-6 md:p-7">
                <div className="flex flex-col md:flex-row gap-5 items-start">
                  {/* Image */}
                  {p.img && (
                    <div className="shrink-0 w-full md:w-48 rounded-xl overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] aspect-video">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.img} alt={p.title} className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h2 className="text-base font-semibold text-[#f0fdfa] group-hover:text-white transition-colors">
                          {p.title}
                        </h2>
                        <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.15)] text-[#2dd4bf]">
                          {p.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noreferrer" title="Source code"
                            className="p-1.5 text-[#334155] hover:text-[#94a3b8] transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        )}
                        <a href={p.href} target="_blank" rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#2dd4bf] border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.06)] px-3 py-1.5 rounded-lg hover:bg-[rgba(20,184,166,0.12)] transition-colors">
                          Visit <ArrowUpRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed mb-3">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-[rgba(20,184,166,0.07)] border border-[rgba(20,184,166,0.15)] text-[#99f6e4] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#14b8a6] transition-colors">
              More on GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
