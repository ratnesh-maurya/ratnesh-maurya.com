'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, FileText, ExternalLink } from 'lucide-react';
import { SiX, SiCodeforces, SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import type { BlogPost } from '@/lib/blog';
import Footer from './Footer';

// ---------------------------------------------------------------------------
// Easing tuple (TypeScript requires this to avoid number[] ≠ Easing[] error)
// ---------------------------------------------------------------------------
const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const SECTIONS = ['about', 'experience', 'projects', 'writing'] as const;
type SectionId = (typeof SECTIONS)[number];

const NAV_LINKS: Array<{ id: string; label: string; href?: string }> = [
  { id: 'about',      label: 'About'      },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects'   },
  { id: 'writing',    label: 'Writing'    },
  { id: 'photos',     label: 'Photos',    href: '/photos' },
];

const TECH_STACK = ['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Kubernetes', 'AWS', 'Kafka', 'Docker'];

const SOCIALS = [
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/ratnesh-maurya',  icon: SiLinkedin,   hoverColor: '#0a66c2' },
  { label: 'GitHub',     href: 'https://github.com/ratnesh-maurya',           icon: SiGithub,     hoverColor: '#e2e8f0' },
  { label: 'X',          href: 'https://x.com/ratnesh_maurya_',               icon: SiX,          hoverColor: '#e2e8f0' },
  { label: 'LeetCode',   href: 'https://leetcode.com/u/ratnesh_maurya/',       icon: SiLeetcode,   hoverColor: '#ffa116' },
  { label: 'Codeforces', href: 'https://codeforces.com/profile/ratnesh_',      icon: SiCodeforces, hoverColor: '#1f8acb' },
];

interface Project {
  title: string;
  href: string;
  img: string;
  desc: string;
  tech: string[];
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    title: 'Personal Tracker',
    href: 'https://tracker.ratnesh-maurya.com/',
    img: '/tracker.png',
    desc: 'Comprehensive habit, expense, sleep, and study tracker with interactive analytics dashboards powered by MUI X Charts.',
    tech: ['Next.js', 'TypeScript', 'PWA', 'MUI X Charts'],
    featured: true,
  },
  {
    title: 'JSONic',
    href: 'https://jsonic.ratnesh-maurya.com',
    img: '/jsonic.png',
    desc: 'Lightweight utility for parsing, formatting, validating and manipulating JSON data. Built for developer productivity.',
    tech: ['Next.js', 'TypeScript', 'React'],
    featured: false,
  },
  {
    title: 'mdconverter',
    href: 'https://mdconverter.ratnesh-maurya.com',
    img: '/mdconverter.png',
    desc: 'Real-time text to Markdown converter with live preview and formatting options. Paste and watch the magic happen.',
    tech: ['Next.js', 'TypeScript', 'Markdown'],
    featured: false,
  },
  {
    title: 'npm-compare',
    href: 'https://npm-compare.ratnesh-maurya.com/',
    img: '/npm-compare.png',
    desc: 'Side-by-side npm package comparison with intelligent recommendations and detailed dependency analysis.',
    tech: ['Next.js', 'TypeScript', 'npm API'],
    featured: false,
  },
  {
    title: 'Rehabify',
    href: 'https://rehabify.ratnesh-maurya.com/',
    img: '/rehabify.png',
    desc: 'Management platform for de-addiction centres. Streamlines patient records, treatment tracking, and operations.',
    tech: ['Next.js', 'Golang', 'PostgreSQL', 'Docker'],
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// Utility helpers
// ---------------------------------------------------------------------------
function calcExp() {
  const start = new Date('2024-08-01');
  const now   = new Date();
  let y = now.getFullYear() - start.getFullYear();
  let m = now.getMonth()    - start.getMonth();
  if (m < 0) { y--; m += 12; }
  if (now.getDate() < start.getDate()) { m--; if (m < 0) { y--; m += 12; } }
  return `${y}y ${m}m`;
}

// Render either a Next.js optimised Image (local) or plain img (external URL)
function ProjectImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  if (src.startsWith('/')) {
    return (
      <Image
        src={src}
        alt={alt}
        width={800}
        height={450}
        className={className}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}

// ---------------------------------------------------------------------------
// Floating Navigation
// ---------------------------------------------------------------------------
function FloatingNav({
  active,
  onNav,
  scrolled,
}: {
  active: string;
  onNav: (id: string) => void;
  scrolled: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop floating nav — pill style */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(3,9,17,0.90)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-[0_4px_24px_rgba(0,0,0,0.45)]'
            : 'bg-[rgba(3,9,17,0.55)] backdrop-blur-md border border-[rgba(255,255,255,0.07)]'
        }`}
      >
        <a
          href="/"
          className="px-3 py-1.5 text-sm font-bold tracking-tight text-[#14b8a6] mr-1 hover:text-teal-300 transition-colors"
        >
          RM
        </a>
        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-1" />
        {NAV_LINKS.map((item) =>
          item.href ? (
            <Link
              key={item.id}
              href={item.href}
              className="relative px-3 py-1.5 text-sm font-medium rounded-full text-[#64748b] hover:text-[#94a3b8] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ) : (
            <button
              key={item.id}
              onClick={() => onNav(item.id)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                active === item.id
                  ? 'text-[#f0fdfa] bg-[rgba(255,255,255,0.07)]'
                  : 'text-[#64748b] hover:text-[#94a3b8]'
              }`}
            >
              {active === item.id && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-[rgba(20,184,166,0.1)] border border-[rgba(20,184,166,0.2)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </button>
          )
        )}
        <div className="w-px h-4 bg-[rgba(255,255,255,0.1)] mx-1" />
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-1.5 text-sm font-medium rounded-full bg-[rgba(20,184,166,0.1)] border border-[rgba(20,184,166,0.2)] text-[#2dd4bf] hover:bg-[rgba(20,184,166,0.18)] hover:border-[rgba(20,184,166,0.35)] transition-all duration-200 flex items-center gap-1"
        >
          Résumé <ExternalLink className="w-3 h-3" />
        </a>
      </motion.nav>

      {/* Mobile nav — always-visible bar at top */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Bar: always show solid background so it's visible from the start */}
        <div
          className="flex items-center justify-between px-5 py-3.5 bg-[rgba(3,9,17,0.92)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]"
        >
          <a href="/" className="text-base font-bold text-[#14b8a6] tracking-tight">RM</a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className="p-1.5 text-[#64748b] hover:text-[#94a3b8] transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease }}
              className="bg-[rgba(3,9,17,0.97)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)] px-5 pb-5 pt-2"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((item) =>
                  item.href ? (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors py-2 px-3 rounded-lg hover:bg-[rgba(255,255,255,0.04)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.id}
                      onClick={() => { onNav(item.id); setMobileOpen(false); }}
                      className={`text-sm text-left py-2 px-3 rounded-lg transition-colors ${
                        active === item.id
                          ? 'text-[#14b8a6] bg-[rgba(20,184,166,0.06)]'
                          : 'text-[#64748b] hover:text-[#94a3b8] hover:bg-[rgba(255,255,255,0.04)]'
                      }`}
                    >
                      {item.label}
                    </button>
                  )
                )}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-sm text-[#2dd4bf] border border-[rgba(20,184,166,0.2)] bg-[rgba(20,184,166,0.06)] py-2 px-3 rounded-lg flex items-center gap-2 hover:bg-[rgba(20,184,166,0.12)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <FileText className="w-3.5 h-3.5" /> View Résumé
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
function HeroSection({ expText }: { expText: string }) {
  return (
    // pt-16 on mobile accounts for the fixed nav bar height; lg:pt-0 resets it
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 lg:pt-0 px-6 pb-20 overflow-hidden">
      {/* Dot grid */}
      <div className="hero-grid absolute inset-0 opacity-100" />

      {/* Centre radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.07)_0%,transparent_65%)]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {/* Status badge */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(20,184,166,0.08)] border border-[rgba(20,184,166,0.18)] text-[#2dd4bf] text-xs font-semibold tracking-wide mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
          Go · Elixir · Cloud Native · {expText}
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } } }}
          className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] mb-4"
        >
          <span className="gradient-text">Ratnesh Maurya</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
          className="text-xl sm:text-2xl font-medium text-[#94a3b8] mb-5"
        >
          Backend Engineer
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
          className="text-[#64748b] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8"
        >
          I build scalable backend systems and cloud-native applications.
          Specialising in distributed systems, microservices, and secure APIs with{' '}
          <span className="text-[#94a3b8] font-medium">Go</span> &{' '}
          <span className="text-[#94a3b8] font-medium">Elixir</span>.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
          className="flex items-center justify-center gap-3 flex-wrap mb-10"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(20,184,166,0.12)] border border-[rgba(20,184,166,0.28)] text-[#2dd4bf] text-sm font-semibold hover:bg-[rgba(20,184,166,0.2)] hover:border-[rgba(20,184,166,0.45)] transition-all duration-200"
          >
            <FileText className="w-4 h-4" /> View Résumé
          </a>
          <a
            href="https://github.com/ratnesh-maurya"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] text-[#94a3b8] text-sm font-semibold hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)] transition-all duration-200"
          >
            <SiGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href="mailto:ratneshmaurya2311@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] text-[#94a3b8] text-sm font-semibold hover:bg-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)] transition-all duration-200"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.04 } } }}
          className="flex items-center justify-center flex-wrap gap-2"
        >
          {TECH_STACK.map((t) => (
            <motion.span
              key={t}
              variants={{ hidden: { opacity: 0, scale: 0.85 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease } } }}
              className="tech-pill"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase text-[#475569]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-[#14b8a6] to-transparent"
        />
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section wrapper with divider
// ---------------------------------------------------------------------------
function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 mb-24 md:mb-32">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.4, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6]">{label}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-[rgba(20,184,166,0.3)] to-transparent" />
      </motion.div>
      {children}
    </section>
  );
}

// ---------------------------------------------------------------------------
// About Section
// ---------------------------------------------------------------------------
function AboutSection({ expText }: { expText: string }) {
  return (
    <Section id="about" label="About">
      <div className="grid md:grid-cols-3 gap-5">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease }}
          className="bento-card md:col-span-2 p-7"
        >
          <p className="text-[#94a3b8] leading-relaxed mb-4">
            I&apos;m a passionate Software Development Engineer at{' '}
            <a className="text-[#f0fdfa] font-medium hover:text-[#2dd4bf] transition-colors underline decoration-[rgba(20,184,166,0.3)]" href="https://www.linkedin.com/company/initializ/about/" target="_blank" rel="noreferrer">
              Initializ
            </a>
            {' '}with <span className="text-[#f0fdfa] font-medium">{expText}</span> of professional experience building scalable backend systems and cloud-native applications.
          </p>
          <p className="text-[#94a3b8] leading-relaxed mb-4">
            I specialise in distributed systems, microservices architecture, and secure APIs. My work spans high-traffic lending platforms, RAG-based AI assistants, and custom Kubernetes controllers.
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            When I&apos;m not shipping production code, I&apos;m{' '}
            <a href="https://blog.ratnesh-maurya.com/blog/" target="_blank" rel="noreferrer" className="text-[#f0fdfa] font-medium hover:text-[#2dd4bf] transition-colors underline decoration-[rgba(20,184,166,0.3)]">
              writing about backend engineering
            </a>
            , contributing to open-source, or exploring new technologies.
          </p>

          {/* Socials row */}
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            {SOCIALS.map(({ label, href, icon: Icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                title={label}
                className="text-[#475569] hover:scale-110 transition-all duration-200"
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = hoverColor; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ''; }}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="flex flex-col gap-4"
        >
          {[
            { label: 'Experience', value: expText, sub: 'at Initializ' },
            { label: 'Location',   value: 'India',  sub: 'Open to remote' },
            { label: 'Projects',   value: '5+',     sub: 'deployed & live' },
            { label: 'Blog posts', value: '10+',    sub: 'on backend topics' },
          ].map(({ label, value, sub }) => (
            <div key={label} className="bento-card p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-1">{label}</p>
              <p className="text-xl font-bold text-[#f0fdfa]">{value}</p>
              <p className="text-xs text-[#64748b] mt-0.5">{sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Experience Section — full resume data
// ---------------------------------------------------------------------------
function ExperienceSection() {
  const dot = <span className="w-1 h-1 rounded-full bg-[#14b8a6] mt-[7px] shrink-0 opacity-70" />;

  return (
    <Section id="experience" label="Experience">
      <div className="flex flex-col gap-4">

        {/* Initializ — SDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, ease }}
          className="bento-card p-7 md:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-base font-semibold text-[#f0fdfa]">Software Development Engineer</h3>
              <a href="https://www.initializ.ai" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-[#14b8a6] hover:text-[#2dd4bf] transition-colors mt-0.5 font-medium">
                Initializ <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="tag-pill self-start shrink-0">Aug 2023 — Present · Gurugram</span>
          </div>
          <div className="space-y-2.5 mb-6">
            {([
              <>Designed <span className="text-[#f0fdfa] font-medium">RAG systems for document intelligence</span> — PDF extraction, embedding generation, and Qdrant DB for efficient vector search and retrieval.</>,
              <>Pioneered a digital lending platform with NSDL, Aadhaar &amp; PAN integrations, cutting user onboarding time by <span className="text-[#f0fdfa] font-medium">57%</span> and boosting approvals by <span className="text-[#f0fdfa] font-medium">9%</span>.</>,
              <>Designed PostgreSQL schemas supporting <span className="text-[#f0fdfa] font-medium">50+ complex entities</span> with high-performance data retrieval patterns.</>,
              <>Built a <span className="text-[#f0fdfa] font-medium">Secret Management Platform</span> with client-side encryption and RBAC for fine-grained access to sensitive information.</>,
              <>Developed a <span className="text-[#f0fdfa] font-medium">Kubernetes Controller</span> managing 50+ secrets dynamically, achieving a <span className="text-[#f0fdfa] font-medium">67% reduction</span> in update latency using Go concurrency patterns.</>,
            ] as React.ReactNode[]).map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                {dot}
                <p className="text-sm text-[#94a3b8] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['Go', 'Elixir', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'LLMs', 'Qdrant DB', 'Kafka'].map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* EMSEC — Intern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: 0.08, ease }}
          className="bento-card p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-base font-semibold text-[#f0fdfa]">Software Developer Intern</h3>
              <span className="text-sm text-[#14b8a6] font-medium">EMSEC Pvt. Ltd.</span>
            </div>
            <span className="tag-pill self-start shrink-0">Mar 2023 — Aug 2023 · Remote</span>
          </div>
          <div className="space-y-2.5 mb-5">
            {([
              <>Developed scalable RESTful APIs using Python &amp; Flask handling <span className="text-[#f0fdfa] font-medium">1,000+ requests/minute</span>, significantly improving backend performance.</>,
              <>Built an automated web scraping solution collecting SSL certificate data from <span className="text-[#f0fdfa] font-medium">300+ domains</span>.</>,
            ] as React.ReactNode[]).map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                {dot}
                <p className="text-sm text-[#94a3b8] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Flask', 'REST APIs', 'Web Scraping', 'SSL'].map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Education + Certifications */}
        <div className="grid sm:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.1, ease }}
            className="bento-card p-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-3">Education</p>
            <p className="text-sm font-semibold text-[#f0fdfa]">B.Tech — Computer Science &amp; Engineering</p>
            <p className="text-xs text-[#94a3b8] mt-0.5">Dr. APJ Abdul Kalam Technical University</p>
            <p className="text-xs text-[#475569] mt-1">Nov 2020 — Jun 2024 · Kanpur, India</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: 0.15, ease }}
            className="bento-card p-5"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#475569] mb-3">Certifications</p>
            <ul className="space-y-2">
              {[
                { name: 'AWS Certified Solutions Architect — Associate', date: 'Oct 2023' },
                { name: 'LFD121: Developing Secure Software', date: 'Linux Foundation' },
                { name: 'GitHub Copilot', date: 'GitHub' },
              ].map(({ name, date }) => (
                <li key={name} className="flex items-start gap-2">
                  {dot}
                  <div>
                    <p className="text-xs text-[#94a3b8] leading-snug">{name}</p>
                    <p className="text-[10px] text-[#475569]">{date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <a href="/resume.pdf" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#14b8a6] transition-colors group">
          View full résumé
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
        <Link href="/uses"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#14b8a6] transition-colors group">
          My stack &amp; tools
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Projects Section — bento grid
// ---------------------------------------------------------------------------
function ProjectsSection({ projectImages }: { projectImages: Record<string, string | null> }) {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest      = PROJECTS.filter((p) => !p.featured);

  const getImg = (p: Project) => projectImages[p.href] || p.img;

  return (
    <Section id="projects" label="Projects">
      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
      >
        {/* Featured projects */}
        {featured.map((p) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            className="bento-card group relative p-6 md:col-span-1 flex flex-col gap-4 cursor-pointer"
          >
            <div className="absolute top-5 right-5 text-[#475569] group-hover:text-[#14b8a6] transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            <div className="w-full rounded-xl overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] aspect-[16/7]">
              <ProjectImage
                src={getImg(p)}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div>
              <h3 className="font-semibold text-[#f0fdfa] mb-1.5 group-hover:text-white transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#64748b] leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>
          </motion.a>
        ))}

        {/* Regular projects */}
        {rest.map((p) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            className="bento-card group relative p-6 flex gap-5 items-start cursor-pointer"
          >
            <div className="absolute top-5 right-5 text-[#475569] group-hover:text-[#14b8a6] transition-colors">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            {/* Thumbnail */}
            <div className="shrink-0 w-[80px] rounded-lg overflow-hidden bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] aspect-[3/2]">
              <ProjectImage
                src={getImg(p)}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            <div className="flex-1 min-w-0 pr-6">
              <h3 className="font-semibold text-[#f0fdfa] mb-1 group-hover:text-white transition-colors text-sm">
                {p.title}
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed mb-2.5 line-clamp-2">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-6">
        <a
          href="https://github.com/ratnesh-maurya"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#14b8a6] transition-colors group"
        >
          View all projects on GitHub
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Writing Section — dynamic from RSS
// ---------------------------------------------------------------------------
function WritingSection({ posts }: { posts: BlogPost[] }) {
  return (
    <Section id="writing" label="Writing">
      <motion.div
        className="flex flex-col gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        {posts.map((post) => (
          <motion.a
            key={post.href}
            href={post.href}
            target="_blank"
            rel="noreferrer"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="bento-card group flex gap-5 items-start p-5 cursor-pointer"
          >
            <div className="shrink-0 text-left w-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#14b8a6] mt-0.5 block">{post.year}</span>
              {post.category && (
                <span className="text-[10px] text-[#334155] mt-0.5 block leading-tight">{post.category}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-[#e2e8f0] mb-1 group-hover:text-white transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">{post.desc}</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#475569] group-hover:text-[#14b8a6] shrink-0 mt-0.5 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        ))}
      </motion.div>

      <div className="mt-6">
        <a
          href="https://blog.ratnesh-maurya.com/blog"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#14b8a6] transition-colors group"
        >
          View all articles on Ratn Labs
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Footer — rich multi-column
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Props for the root Portfolio component
// ---------------------------------------------------------------------------
export interface PortfolioProps {
  posts: BlogPost[];
  projectImages: Record<string, string | null>;
}

// ---------------------------------------------------------------------------
// Root component
// ---------------------------------------------------------------------------
export default function Portfolio({ posts, projectImages }: PortfolioProps) {
  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [scrolled, setScrolled] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const expText = calcExp();

  // While a programmatic scroll is in flight, block the scroll handler from
  // overriding the active section that the user explicitly chose.
  const lockedSection = useRef<SectionId | null>(null);
  const lockTimer     = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll tracking — forward iteration keeps the last matched section active
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Skip auto-detection while a nav-click scroll is still animating
      if (lockedSection.current) return;
      const offset = window.scrollY + 100;
      let current: SectionId = 'about';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= offset) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mouse spotlight
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => {
    if (!(SECTIONS as readonly string[]).includes(id)) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const target = id as SectionId;
    // Lock the pill to the clicked section for the duration of the smooth scroll
    lockedSection.current = target;
    setActiveSection(target);
    if (lockTimer.current) clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      lockedSection.current = null;
    }, 1200); // smooth scroll takes ~800-1000 ms; give it some headroom
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Fixed background + ambient orbs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#030d0e]" />
        <div className="orb orb-sky" />
        <div className="orb orb-indigo" />
      </div>

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-all duration-700"
        style={{
          background: `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, rgba(20,184,166,0.06), transparent 55%)`,
        }}
      />

      {/* Floating nav */}
      <FloatingNav active={activeSection} onNav={scrollTo} scrolled={scrolled} />

      {/* Page */}
      <div className="relative z-10" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>

        {/* Hero */}
        <HeroSection expText={expText} />

        {/* Content container */}
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <AboutSection     expText={expText} />
          <ExperienceSection />
          <ProjectsSection  projectImages={projectImages} />
          <WritingSection   posts={posts} />
          <Footer />
        </div>
      </div>
    </>
  );
}
