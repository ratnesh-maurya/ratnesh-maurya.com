'use client';

import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FaDownload } from 'react-icons/fa';
import { Share2 } from 'lucide-react'; // Single share icon

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
    <div className="max-w-3xl mx-auto px-4 font-sans shadow-lg dark:bg-gray-900/80 shadow-black p-6 backdrop-blur-xl rounded-xl">
      <h1 className="text-center sm:text-start text-4xl font-bold text-teal-500 dark:text-gray-200 mb-6">
        Gallery 📸
      </h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {mediaUrls.slice(0, visibleImages).map((url, index) => (
          <div key={index} className="relative w-full rounded-lg overflow-hidden group cursor-pointer">
            <Dialog>
              <DialogTrigger asChild>
                <div
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
                    />
                  )}

                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 p-2 rounded-lg">
                    <Button
                      size="sm"
                      className="bg-gray-800 text-white hover:bg-gray-700"
                      onClick={() => handleDownload(url)}
                    >
                      <FaDownload className="w-4 h-4" />
                    </Button>

                    <Button
                      size="sm"
                      className="bg-gray-600 text-white hover:bg-gray-500"
                      onClick={() => handleShare(url)}
                    >
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </DialogTrigger>

              {selectedMedia && (
                <DialogContent>
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
          </div>
        ))}
      </Masonry>

      <div ref={observerRef} className="h-10"></div>
    </div>
  );
}

export default GalleryPage;
