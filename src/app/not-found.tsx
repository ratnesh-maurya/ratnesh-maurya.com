import Link from 'next/link';
import { ArrowRight, Home, User, Camera, Briefcase, BookOpen, Coffee, Github, Share2 } from 'lucide-react';
import Footer from '@/components/Footer';

const BACKLINKS = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/#about', label: 'About', icon: User },
  { href: '/now', label: 'Now', icon: Coffee },
  { href: '/photos', label: 'Photos', icon: Camera },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/blog', label: 'Blog', icon: BookOpen },
  { href: '/github', label: 'GitHub', icon: Github },
  { href: '/social', label: 'Social', icon: Share2 },
];

export default function NotFound() {
  return (
    <>
      <div className="fixed inset-0 z-0 bg-[#030d0e]">
        <div className="orb orb-sky" />
        <div className="orb orb-indigo" />
      </div>

      <div
        className="relative z-10 min-h-screen flex flex-col"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        <main className="flex-1 flex flex-col items-center justify-center px-5 py-20">
          <div className="text-center max-w-lg mx-auto">
            <p className="text-[#14b8a6] font-mono text-sm font-semibold tracking-wider mb-4">
              404
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#f0fdfa] mb-3 tracking-tight">
              Page not found
            </h1>
            <p className="text-[#94a3b8] text-base mb-10">
              This page doesn’t exist. Head back somewhere that does.
            </p>

            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              {BACKLINKS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#94a3b8] text-sm font-medium hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(20,184,166,0.25)] hover:text-[#2dd4bf] transition-all duration-200"
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                  <ArrowRight className="w-3.5 h-3.5 opacity-70" />
                </Link>
              ))}
            </nav>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
