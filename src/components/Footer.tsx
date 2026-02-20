'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SiX, SiGithub, SiLinkedin, SiLeetcode } from 'react-icons/si';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const FOOTER_NAV = [
  { label: 'About',      href: '/#about'      },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects',   href: '/projects'    },
  { label: 'Blog',       href: '/blog'        },
  { label: 'GitHub',     href: '/github'      },
  { label: 'Social',     href: '/social'      },
  { label: 'Uses',       href: '/uses'        },
  { label: 'Now',        href: '/now'         },
  { label: 'Photos',     href: '/photos'      },
];

const FOOTER_SOCIALS = [
  { label: 'GitHub',     href: 'https://github.com/ratnesh-maurya',           icon: SiGithub     },
  { label: 'LinkedIn',   href: 'https://www.linkedin.com/in/ratnesh-maurya',  icon: SiLinkedin   },
  { label: 'X',          href: 'https://x.com/ratnesh_maurya_',               icon: SiX          },
  { label: 'LeetCode',   href: 'https://leetcode.com/u/ratnesh_maurya/',       icon: SiLeetcode   },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease }}
      className="relative z-10 mt-16 mb-0"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10">
      {/* Quote card */}
      <div className="bento-card p-6 md:p-7 mb-12">
        <blockquote className="border-l-2 border-[#14b8a6] pl-4 space-y-1.5">
          <p className="text-sm text-yellow-200/90 leading-relaxed font-medium">
            &ldquo;मैं कोड नहीं लिखता, मैं वही करता हूँ जो पिता करते थे — बस ज़मीन बदली है, जज़्बा नहीं।&rdquo;
          </p>
          <p className="text-xs text-[#64748b] leading-relaxed">
            I don&apos;t just write code; I do what my father did — only the soil has changed, not the spirit.
          </p>
        </blockquote>
      </div>

      {/* Main footer grid */}
      <div className="border-t border-[rgba(255,255,255,0.06)] pt-10 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-block text-xl font-bold text-[#14b8a6] tracking-tight mb-3 hover:text-[#2dd4bf] transition-colors">
              Ratnesh Maurya
            </Link>
            <p className="text-xs text-[#475569] leading-relaxed max-w-[200px]">
              Backend Engineer building scalable systems with Go &amp; Elixir. Currently at Initializ.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {FOOTER_SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  title={label}
                  className="text-[#334155] hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#334155] mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {FOOTER_NAV.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#334155] mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:ratneshmaurya2311@gmail.com"
                  className="text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  ratneshmaurya2311@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors duration-200 group"
                >
                  Résumé
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <Link
                  href="/now"
                  className="text-sm text-[#475569] hover:text-[#2dd4bf] transition-colors duration-200"
                >
                  What I&apos;m doing now →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 border-t border-[rgba(255,255,255,0.04)]">
          <p className="text-xs text-[#475569]">
            © {new Date().getFullYear()} Ratnesh Maurya · All rights reserved
          </p>
          <p className="text-xs text-[#475569]">
            Built with Next.js · Tailwind v4 · Framer Motion
          </p>
        </div>
      </div>
      </div>
    </motion.footer>
  );
}
