'use client';

import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const mediaUrls = [
  '/gallery/1 (1).heic',
  '/gallery/1 (2).heic',
  '/gallery/1.jpg',
  '/gallery/1 (1).jpg',
  '/gallery/1.gif',
  '/gallery/1 (2).jpg',
  '/gallery/1 (3).jpg',
  '/gallery/1 (4).jpg',
  '/gallery/1 (5).jpg',
  '/gallery/girl.jpg',
  '/gallery/1 (6).jpg',
  '/gallery/1 (8).jpg',
  '/gallery/1 (9).jpg',
  '/gallery/1.mp4',
  '/gallery/1 (10).jpg',
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

function GalleryPage() {
  const [visibleImages, setVisibleImages] = useState(8); // Default to 8
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const isVideo = (url: string) => url.endsWith('.mp4');

  // Set initial image count based on screen size
  useEffect(() => {
    const updateImageCount = () => {
      if (window.innerWidth <= 768) {
        setVisibleImages(3); // Start with 3 images on mobile
      } else {
        setVisibleImages(8); // Start with 8 images on larger screens
      }
    };

    updateImageCount(); // Set on first render
    window.addEventListener('resize', updateImageCount); // Update on resize

    return () => window.removeEventListener('resize', updateImageCount);
  }, []);

  // Intersection Observer to load more images automatically
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          setVisibleImages((prev) => Math.min(prev + 3, mediaUrls.length)); // Load 3 more images
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-2 font-sans shadow-2xl dark:bg-gray-950/70 shadow-black p-4 backdrop-blur-xl rounded-xl mr-2 ml-2  sm:mx-auto">


      <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Gallery 📸</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 px-2 py-12"
        columnClassName="flex flex-col gap-4"
      >
        {mediaUrls.slice(0, visibleImages).map((url, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div
                className="relative w-full rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedMedia(url)}
              >
                {isVideo(url) ? (
                  <video
                    src={url}
                    className="rounded-lg w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    controls
                  />
                ) : (
                  <Image
                    src={url}
                    alt={`Gallery item ${index + 1}`}
                    width={1200}
                    height={800}
                    layout="responsive"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${url}`);
                      e.currentTarget.src = '/fallback-image.png';
                    }}
                  />
                )}
              </div>
            </DialogTrigger>

            {/* Dialog Content */}
            <DialogContent>
              {selectedMedia &&
                (isVideo(selectedMedia) ? (
                  <video src={selectedMedia} className="rounded-lg w-full" controls autoPlay />
                ) : (
                  <Image
                    src={selectedMedia}
                    alt="Selected media"
                    width={200}
                    height={300}
                    layout="responsive"
                    objectFit="fill"
                    className="rounded-lg p-4"
                  />
                ))}
            </DialogContent>
          </Dialog>
        ))}
      </Masonry>

      {/* Invisible div to trigger auto-loading */}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
}

export default GalleryPage;
