'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface Photo {
  src: string;
  alt: string;
  aspect: 'landscape' | 'portrait' | 'square';
}

export default function PhotosClient({ photos }: { photos: Photo[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open  = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = () => setLightbox((i) => (i !== null ? (i - 1 + photos.length) % photos.length : null));
  const next  = () => setLightbox((i) => (i !== null ? (i + 1) % photos.length : null));

  // Keyboard support
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   prev();
    if (e.key === 'ArrowRight')  next();
  };

  // Split photos into 3 columns for masonry (fill columns top-to-bottom)
  const cols: Photo[][] = [[], [], []];
  photos.forEach((p, i) => cols[i % 3].push(p));

  return (
    <>
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
          <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#94a3b8] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Link>
            <span className="text-sm font-semibold text-[#14b8a6] tracking-tight">Gallery</span>
            <span className="text-xs text-[#334155]">{photos.length} photos</span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-10 text-center"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-[#f1f5f9] mb-2">
              Moments captured in pictures
            </h1>
            <p className="text-sm text-[#475569]">
              Ratnesh Maurya · {photos.length} photos
            </p>
          </motion.div>

          {/* 3-column masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {cols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-3">
                {col.map((photo) => {
                  // Original index in the photos array for the lightbox
                  const idx = photos.indexOf(photo);
                  return (
                    <motion.button
                      key={photo.src}
                      onClick={() => open(idx)}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, ease, delay: ci * 0.05 }}
                      className="group relative w-full overflow-hidden rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.07)] cursor-pointer text-left"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        draggable={false}
                      />
                      {/* Hover veil */}
                      <div className="absolute inset-0 bg-[rgba(3,9,17,0)] group-hover:bg-[rgba(3,9,17,0.22)] transition-colors duration-300" />
                    </motion.button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.93)] backdrop-blur-md"
            onClick={close}
            onKeyDown={onKey}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              onClick={close}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.17)] text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)] text-white transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.16)] text-white transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22, ease }}
              className="max-w-[88vw] max-h-[88vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[lightbox].src}
                alt={photos[lightbox].alt}
                className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-[#64748b] bg-[rgba(0,0,0,0.5)] px-3 py-1.5 rounded-full backdrop-blur-sm tabular-nums">
              {lightbox + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
