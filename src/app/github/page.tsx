import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Star, GitFork, Calendar } from 'lucide-react';
import { fetchGitHubStats, fetchTopRepos } from '@/lib/github';
import Footer from '@/components/Footer';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'GitHub — Ratnesh Maurya',
  description:
    'GitHub profile, repositories, and open-source contributions by Ratnesh Maurya. 36+ public repositories in Go, Elixir, TypeScript, and more.',
  keywords: [
    'Ratnesh Maurya GitHub', 'ratnesh maurya repositories', 'ratnesh maurya open source',
    'Go projects GitHub', 'Elixir projects GitHub', 'ratnesh-maurya github',
  ],
  alternates: { canonical: 'https://ratnesh-maurya.com/github' },
  openGraph: {
    title: 'GitHub — Ratnesh Maurya',
    description: 'Open-source contributions & repositories by Ratnesh Maurya.',
    url: 'https://ratnesh-maurya.com/github',
  },
};

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'GitHub', item: 'https://ratnesh-maurya.com/github' },
  ],
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default async function GitHubPage() {
  const [stats, repos] = await Promise.all([fetchGitHubStats(), fetchTopRepos(12)]);

  const statsLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ratnesh Maurya',
    url: 'https://github.com/ratnesh-maurya',
    sameAs: ['https://github.com/ratnesh-maurya'],
    description: stats.bio,
    knowsAbout: repos.filter((r) => r.language).map((r) => r.language),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(statsLd) }} />

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
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">RM / GitHub</span>
            <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noreferrer"
              className="text-xs text-[#334155] hover:text-[#14b8a6] transition-colors">
              @ratnesh-maurya ↗
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-24 pb-24">
          {/* Header */}
          <div className="mb-12">
            <nav className="text-xs text-[#334155] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#14b8a6] transition-colors">ratnesh-maurya.com</Link>
              <span className="mx-2">›</span>
              <span className="text-[#2dd4bf]">GitHub</span>
            </nav>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-4xl font-bold text-[#f0fdfa] mb-2 tracking-tight">GitHub</h1>
                {stats.bio && <p className="text-[#64748b] leading-relaxed">{stats.bio}</p>}
              </div>
              <a href="https://github.com/ratnesh-maurya" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2dd4bf] border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.07)] px-4 py-2 rounded-full hover:bg-[rgba(20,184,166,0.13)] transition-colors shrink-0">
                View Profile <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Repositories', value: stats.publicRepos, icon: '📦' },
              { label: 'Followers', value: stats.followers, icon: '👥' },
              { label: 'Following', value: stats.following, icon: '🔗' },
              { label: 'Gists', value: stats.publicGists, icon: '📝' },
            ].map(({ label, value, icon }) => (
              <div key={label} className="bento-card p-5 text-center">
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-2xl font-bold text-[#f0fdfa]">{value}</p>
                <p className="text-xs text-[#475569] mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Repositories */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6]">Repositories</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[rgba(20,184,166,0.3)] to-transparent" />
            </div>
            <div className="flex flex-col gap-3">
              {repos.map((repo) => (
                <a key={repo.name} href={repo.url} target="_blank" rel="noreferrer"
                  className="group flex gap-5 items-start p-5 rounded-2xl bg-[rgba(255,255,255,0.025)] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(20,184,166,0.22)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-200 cursor-pointer">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="text-sm font-semibold text-[#f0fdfa] group-hover:text-white transition-colors">
                        {repo.name}
                        {repo.isFork && <span className="ml-2 text-[10px] text-[#475569]">(fork)</span>}
                      </h3>
                      <div className="flex items-center gap-3 shrink-0">
                        {repo.language && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.15)] text-[#99f6e4]">
                            {repo.language}
                          </span>
                        )}
                        <div className="flex items-center gap-1.5 text-[10px] text-[#475569]">
                          <Star className="w-3 h-3" />
                          {repo.stargazersCount}
                        </div>
                      </div>
                    </div>
                    {repo.description && (
                      <p className="text-xs text-[#64748b] leading-relaxed mb-2 line-clamp-2">{repo.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-[10px] text-[#334155]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Updated {formatDate(repo.updatedAt)}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#475569] group-hover:text-[#14b8a6] shrink-0 mt-0.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a href="https://github.com/ratnesh-maurya?tab=repositories" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#14b8a6] transition-colors">
              View all repositories <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
