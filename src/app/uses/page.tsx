import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    'The languages, frameworks, databases, cloud tools, and hardware Ratnesh Maurya uses for backend engineering and software development.',
  keywords: [
    'Ratnesh Maurya uses', 'ratnesh maurya tech stack', 'ratnesh maurya tools',
    'Go developer tools', 'Elixir developer stack', 'backend engineer tools India',
  ],
  alternates: { canonical: 'https://ratnesh-maurya.com/uses' },
  openGraph: {
    title: 'Tools & Stack — Ratnesh Maurya',
    description: 'The languages, frameworks, cloud tools, and gear Ratnesh Maurya uses daily.',
    url: 'https://ratnesh-maurya.com/uses',
  },
};

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Uses', item: 'https://ratnesh-maurya.com/uses' },
  ],
};

const STACKS: Array<{
  category: string;
  desc: string;
  items: Array<{ name: string; note: string; href?: string }>;
}> = [
  {
    category: 'Languages',
    desc: 'Primary languages I write production code in, day to day.',
    items: [
      { name: 'Go (Golang)',   note: 'Primary backend language — APIs, microservices, CLIs, Kubernetes controllers', href: 'https://go.dev' },
      { name: 'Elixir',        note: 'Concurrent, fault-tolerant services using OTP and the BEAM VM', href: 'https://elixir-lang.org' },
      { name: 'TypeScript',    note: 'Full-stack web — Next.js frontends and Node tooling', href: 'https://www.typescriptlang.org' },
      { name: 'Python',        note: 'Data pipelines, ML integrations, FastAPI & Flask services', href: 'https://www.python.org' },
      { name: 'SQL',           note: 'Complex query writing, schema design, and query optimisation' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    desc: 'The frameworks I reach for first when starting a new project.',
    items: [
      { name: 'Go-Gin',    note: 'Fast, minimalist HTTP framework for Go REST APIs', href: 'https://gin-gonic.com' },
      { name: 'Phoenix',   note: 'Elixir web framework with real-time capabilities via LiveView', href: 'https://www.phoenixframework.org' },
      { name: 'Next.js',   note: 'React framework for production frontends and full-stack apps', href: 'https://nextjs.org' },
      { name: 'FastAPI',   note: 'High-performance Python API framework with automatic OpenAPI docs', href: 'https://fastapi.tiangolo.com' },
      { name: 'Flask',     note: 'Lightweight Python micro-framework for quick RESTful APIs', href: 'https://flask.palletsprojects.com' },
    ],
  },
  {
    category: 'Databases',
    desc: 'Storage layers I use across different data patterns.',
    items: [
      { name: 'PostgreSQL', note: 'Primary relational database — 50+ entity schemas, complex joins, indexing', href: 'https://www.postgresql.org' },
      { name: 'Redis',      note: 'Caching, pub/sub, session storage, and distributed locks', href: 'https://redis.io' },
      { name: 'Qdrant DB',  note: 'Vector database for RAG pipelines and semantic search', href: 'https://qdrant.tech' },
      { name: 'MongoDB',    note: 'Document storage for flexible schema applications', href: 'https://www.mongodb.com' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    desc: 'Platforms and tools I use to ship and operate systems.',
    items: [
      { name: 'AWS',            note: 'EC2, S3, RDS, Lambda, IAM, CloudFront, Route 53 — AWS Certified Solutions Architect', href: 'https://aws.amazon.com' },
      { name: 'Kubernetes',     note: 'Container orchestration, custom controllers, secret management', href: 'https://kubernetes.io' },
      { name: 'Docker',         note: 'Containerising every service for consistent dev and prod environments', href: 'https://www.docker.com' },
      { name: 'Terraform',      note: 'Infrastructure as Code for reproducible cloud environments', href: 'https://www.terraform.io' },
      { name: 'GitHub Actions', note: 'CI/CD pipelines — test, build, and deploy on every push', href: 'https://github.com/features/actions' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    desc: 'Tools I use for building AI-powered backend features.',
    items: [
      { name: 'LLMs (OpenAI / Gemini)', note: 'Text-to-SQL chatbots, document Q&A, and AI assistant features' },
      { name: 'Qdrant + Embeddings',    note: 'RAG pipelines — extracting PDFs, generating embeddings, vector retrieval' },
      { name: 'LangChain / custom',     note: 'Orchestrating LLM calls, retrieval chains, and agent workflows' },
    ],
  },
  {
    category: 'Editor & Terminal',
    desc: 'Day-to-day development environment.',
    items: [
      { name: 'Cursor',          note: 'AI-powered code editor built on VS Code — daily driver', href: 'https://cursor.sh' },
      { name: 'VS Code',         note: 'Backup editor, great extension ecosystem', href: 'https://code.visualstudio.com' },
      { name: 'Zsh + Oh My Zsh', note: 'Shell with custom aliases and plugins for productivity' },
      { name: 'iTerm2',          note: 'Terminal emulator for macOS', href: 'https://iterm2.com' },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />

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
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">RM / Uses</span>
            <span className="text-xs text-[#334155]" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 pt-24 pb-24">
          {/* Header */}
          <div className="mb-14">
            <nav className="text-xs text-[#334155] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#14b8a6] transition-colors">ratnesh-maurya.com</Link>
              <span className="mx-2">›</span>
              <span className="text-[#2dd4bf]">Uses</span>
            </nav>
            <h1 className="text-4xl font-bold text-[#f0fdfa] mb-3 tracking-tight">Tools &amp; Stack</h1>
            <p className="text-[#64748b] leading-relaxed text-lg">
              The languages, frameworks, databases, and tools I use for backend engineering and software development.
              Inspired by{' '}
              <a href="https://uses.tech" target="_blank" rel="noreferrer"
                className="text-[#94a3b8] hover:text-[#2dd4bf] transition-colors underline decoration-[rgba(20,184,166,0.3)]">
                uses.tech
              </a>.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {STACKS.map((section) => (
              <div key={section.category}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6]">{section.category}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[rgba(20,184,166,0.3)] to-transparent" />
                </div>
                <p className="text-xs text-[#475569] mb-4">{section.desc}</p>
                <div className="space-y-2.5">
                  {section.items.map((item) => (
                    <div key={item.name}
                      className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(20,184,166,0.2)] transition-colors duration-200">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-semibold text-[#f0fdfa]">{item.name}</span>
                          {item.href && (
                            <a href={item.href} target="_blank" rel="noreferrer"
                              className="text-[#334155] hover:text-[#14b8a6] transition-colors">
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{item.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-xs text-[#334155]">
              This page is listed on{' '}
              <a href="https://uses.tech" target="_blank" rel="noreferrer" className="text-[#475569] hover:text-[#64748b] underline">uses.tech</a>.
              {' '}Last updated February 2026.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
