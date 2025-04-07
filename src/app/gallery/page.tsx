'use client';

import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa';
import { Share2 } from 'lucide-react';

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
    const newFileName = `You will love this ❤️ ${url.split('/').pop()}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = newFileName;
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
    <div className="max-w-5xl mx-auto px-2 font-sans shadow-lg bg-white/85 dark:bg-gray-950/70 shadow-black backdrop-blur-2xl rounded-xl mr-2 ml-2 p-2 mb-16 sm:p-6 sm:mx-auto">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob dark:bg-teal-600 dark:opacity-5"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000 dark:bg-teal-400 dark:opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000 dark:bg-teal-500 dark:opacity-5"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-teal-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000 dark:bg-teal-400 dark:opacity-5"></div>
      </div>

      {/* Header Section */}
      <div className="sticky top-0 z-10 py-8">
        <div className="text-center relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-100/20 via-transparent to-transparent dark:from-teal-500/5 blur-2xl"></div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 bg-clip-text text-transparent mb-4 drop-shadow-sm">
            Gallery 
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto font-medium">
            Capturing moments from tech conferences, community events, and coding adventures.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="group relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/30 shadow-lg dark:shadow-gray-900/20 backdrop-blur-xl border border-teal-100/50 dark:border-teal-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/10 p-6 sm:p-8">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent dark:from-teal-900/20 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-4"
          columnClassName="flex flex-col gap-4"
        >
          {mediaUrls.slice(0, visibleImages).map((url, index) => (
            <div key={index} className="relative w-full rounded-lg overflow-hidden group/item cursor-pointer transition-all duration-300 hover:scale-[1.02]">
              <Dialog>
                <DialogTrigger asChild>
                  <div onClick={() => setSelectedMedia(url)}>
                    {isVideo(url) ? (
                      <video
                        src={url}
                        className="rounded-lg w-full h-auto transition-transform duration-300"
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
                        className="rounded-lg transition-transform duration-300"
                        loading="lazy"
                      />
                    )}

                    <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover/item:opacity-100 transition-all duration-300">
                      <Button
                        size="sm"
                        className="bg-teal-500/90 text-white hover:bg-teal-600/90 transition-colors"
                        onClick={() => handleDownload(url)}
                      >
                        <FaDownload className="w-4 h-4" />
                      </Button>

                      <Button
                        size="sm"
                        className="bg-teal-600/90 text-white hover:bg-teal-700/90 transition-colors"
                        onClick={() => handleShare(url)}
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </DialogTrigger>

                {selectedMedia && (
                  <DialogContent className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-teal-100/20 dark:border-teal-500/20">
                    {isVideo(selectedMedia) ? (
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
                    )}
                  </DialogContent>
                )}
              </Dialog>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400 dark:from-teal-500 dark:via-teal-400 dark:to-teal-500 transform scale-x-0 group-hover/item:scale-x-100 transition-transform duration-500 ease-out opacity-80"></div>
            </div>
          ))}
        </Masonry>

        <div ref={observerRef} className="h-10"></div>
      </div>
    </div>
  );
}

export default GalleryPage;
