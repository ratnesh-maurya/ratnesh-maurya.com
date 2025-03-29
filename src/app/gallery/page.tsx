'use client';

import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa';
import { Share2 } from 'lucide-react'; // Single share icon
import { motion } from 'framer-motion';

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
  '/gallery/car1.jpg',
  '/gallery/car2.jpg',
  '/gallery/car3.jpg',
  '/gallery/car4.jpg',
  '/gallery/car5.jpg',
  '/gallery/car6.jpg',
  '/gallery/girl.jpg',
  '/gallery/1 (6).jpg',
  '/gallery/1 (8).jpg',
  '/gallery/1 (9).jpg',
  '/gallery/1.mp4',
  '/gallery/1 (10).jpg',
  '/gallery/2 (2).mp4',
  '/gallery/2 (1).jpg',
  '/gallery/2 (5).jpg',
  '/gallery/2 (2).jpg',
  '/gallery/2 (3).jpg',
  '/gallery/2 (1).mp4',
  '/gallery/2 (4).jpg',
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

function GalleryPage() {
  const [visibleImages, setVisibleImages] = useState(8);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const isVideo = (url: string) => url.endsWith('.mp4');

  const handleDownload = (url: string) => {
    // Predefined name for the download file
    const newFileName = `You will love this ❤️ ${url.split('/').pop()}`;

    const link = document.createElement('a');
    link.href = url;
    link.download = newFileName; // Use the predefined file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (url: string) => {
    const mediaUrl = `${window.location.origin}${url}`;
    const title = encodeURIComponent("Check out this amazing capture by Ratnesh!");
    const description = encodeURIComponent("Explore stunning visuals captured by Ratnesh. Click the link to view more.");

    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: mediaUrl,
      }).catch((error) => {
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${mediaUrl}&quote=${description}`;
      window.open(shareUrl, '_blank');
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting) {
          setVisibleImages((prev) => Math.min(prev + 3, mediaUrls.length));
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
    <div className="min-h-screen overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative bg-white/50 dark:bg-black/50 backdrop-blur-xl rounded-3xl p-8 sm:p-16 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 mb-16 sm:mb-24 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--primary))/20] via-[rgb(var(--secondary))/10] to-[rgb(var(--primary))/20] rounded-3xl"></div>
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--primary))/20] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[rgb(var(--secondary))/20] rounded-full blur-3xl"></div>

            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--primary))] via-[rgb(var(--secondary))] to-[rgb(var(--primary))] mb-12 text-center"
              >
                Gallery 📸
              </motion.h1>

              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
              >
                {mediaUrls.slice(0, visibleImages).map((url, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="relative w-full rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div onClick={() => setSelectedMedia(url)}>
                          {isVideo(url) ? (
                            <video
                              src={url}
                              className="rounded-2xl w-full h-auto"
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
                              className="rounded-2xl"
                              loading="lazy"
                            />
                          )}

                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300"
                          >
                            <div className="absolute bottom-4 right-4 flex gap-3">
                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  size="sm"
                                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/20"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownload(url);
                                  }}
                                >
                                  <FaDownload className="w-4 h-4" />
                                </Button>
                              </motion.div>

                              <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  size="sm"
                                  className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/20"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShare(url);
                                  }}
                                >
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </DialogTrigger>

                      {selectedMedia && (
                        <DialogContent className="max-w-4xl w-[90vw] p-2 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
                          {isVideo(selectedMedia) ? (
                            <video src={selectedMedia} className="rounded-xl w-full" controls autoPlay />
                          ) : (
                            <Image
                              src={selectedMedia}
                              alt="Selected media"
                              width={1200}
                              height={800}
                              layout="responsive"
                              objectFit="contain"
                              className="rounded-xl"
                            />
                          )}
                        </DialogContent>
                      )}
                    </Dialog>
                  </motion.div>
                ))}
              </Masonry>

              <div ref={observerRef} className="h-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
