import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Meme',
  description: 'One good GIF. That’s it.',
  alternates: { canonical: 'https://ratnesh-maurya.com/meme' },
  robots: { index: false, follow: true },
};

// Classic "This is fine" — timeless dev mood
const GIF_SRC = 'https://media.giphy.com/media/13GIgrGdslD9o0/giphy.gif';

export default function MemePage() {
  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[#030d0e]">
        <div className="orb orb-sky" />
        <div className="orb orb-indigo" />
      </div>

      <div
        className="relative z-10 min-h-screen flex flex-col"
        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
      >
        {/* Top bar */}
        <div className="fixed top-0 left-0 right-0 z-40 bg-[rgba(3,9,17,0.88)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.07)]">
          <div className="max-w-4xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">/meme</span>
          </div>
        </div>

        {/* Centered GIF + caption */}
        <main className="flex-1 flex flex-col items-center justify-center px-5 pt-24 pb-16">
          <div className="w-full max-w-2xl flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden border border-[rgba(20,184,166,0.2)] shadow-[0_0_60px_rgba(20,184,166,0.08)] bg-[rgba(255,255,255,0.02)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={GIF_SRC}
                alt="This is fine"
                className="w-full h-auto block"
                width={480}
                height={270}
              />
            </div>
            <p className="mt-6 text-[#64748b] text-sm text-center max-w-md">
              This is fine.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
