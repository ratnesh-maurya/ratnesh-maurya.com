'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, Share2, Camera, Video, Images, ArrowRight } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { GridPattern } from '@/components/ui/grid-pattern';
import { Spotlight } from '@/components/ui/spotlight';

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
  default: 4,
  1536: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1,
};

const categories = [
  { name: 'All', icon: Images, count: mediaUrls.length },
  { name: 'Photos', icon: Camera, count: mediaUrls.filter(url => !url.endsWith('.mp4')).length },
  { name: 'Videos', icon: Video, count: mediaUrls.filter(url => url.endsWith('.mp4')).length },
];

function GalleryPage() {
  const [visibleImages, setVisibleImages] = useState(12);
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  const isVideo = (url: string) => url.endsWith('.mp4');
  const isGif = (url: string) => url.endsWith('.gif');

  const filteredMedia = mediaUrls.filter(url => {
    if (activeCategory === 'Photos') return !isVideo(url);
    if (activeCategory === 'Videos') return isVideo(url);
    return true;
  });

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const newFileName = `ratnesh-gallery-${url.split('/').pop()}`;

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = newFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async (url: string) => {
    const mediaUrl = `${window.location.origin}${url}`;
    const shareData = {
      title: "Check out this capture by Ratnesh!",
      text: "Explore stunning visuals from my gallery. Moments from tech conferences, community events, and life adventures.",
      url: mediaUrl,
    };

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(mediaUrl);
        // Could add a toast notification here
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const loadMore = useCallback(() => {
    setLoading(true);
    // Simulate network delay for better UX
    setTimeout(() => {
      setVisibleImages(prev => Math.min(prev + 8, filteredMedia.length));
      setLoading(false);
    }, 300);
  }, [filteredMedia.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const lastEntry = entries[0];
        if (lastEntry.isIntersecting && visibleImages < filteredMedia.length) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [visibleImages, filteredMedia.length, loadMore]);

  useEffect(() => {
    setVisibleImages(12);
  }, [activeCategory]);

  return (
    <AuroraBackground>
      <div className="relative z-10 w-full">
        {/* Grid Pattern Background */}
        <GridPattern className="absolute inset-0 opacity-20" />

        {/* Spotlight Effects */}
        <Spotlight className="top-20 left-0 md:left-60 md:-top-20" fill="blue" />

        {/* Hero Section */}
        <section className="relative py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Capturing moments from tech conferences, community events, and life adventures.
              A visual journey through my experiences and creativity.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Images className="h-4 w-4" />
                <span>{mediaUrls.length} Items</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4" />
                <span>{mediaUrls.filter(url => !isVideo(url)).length} Photos</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                <span>{mediaUrls.filter(url => isVideo(url)).length} Videos</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/50 dark:bg-black/20 text-gray-700 dark:text-gray-300 hover:bg-white/70 dark:hover:bg-black/30'
                      } backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400'
                      }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {filteredMedia.length > 0 ? (
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-4"
                columnClassName="flex flex-col gap-4"
              >
                {filteredMedia.slice(0, visibleImages).map((url, index) => (
                  <div
                    key={index}
                    className="relative group/item cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <Dialog>
                      <DialogTrigger asChild>
                        <div
                          className="relative overflow-hidden rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:border-blue-300/50 dark:hover:border-blue-600/50 transition-all duration-300"
                          onClick={() => setSelectedMedia(url)}
                        >
                          {isVideo(url) ? (
                            <div className="relative">
                              <video
                                src={url}
                                className="w-full h-auto rounded-xl"
                                muted
                                preload="metadata"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl">
                                <div className="p-3 bg-white/90 dark:bg-black/90 rounded-full backdrop-blur-sm">
                                  <Video className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="relative">
                              <Image
                                src={url}
                                alt={`Gallery item ${index + 1} - ${url.includes('car') ? 'Car photography' : url.includes('girl') ? 'Portrait photography' : 'Event photography'} by Ratnesh Maurya`}
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-xl transition-transform duration-500 group-hover/item:scale-105"
                                loading="lazy"
                                style={{ objectFit: 'contain' }}
                              />
                              {isGif(url) && (
                                <div className="absolute top-3 left-3 px-2 py-1 bg-blue-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                                  GIF
                                </div>
                              )}
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/item:translate-y-0">
                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(url);
                              }}
                              className="p-2 bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors backdrop-blur-sm border-0"
                            >
                              <Download className="h-4 w-4" />
                            </Button>

                            <Button
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleShare(url);
                              }}
                              className="p-2 bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors backdrop-blur-sm border-0"
                            >
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>

                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                        </div>
                      </DialogTrigger>

                      {selectedMedia === url && (
                        <DialogContent className="max-w-4xl bg-white/95 dark:bg-black/95 backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20">
                          <div className="relative">
                            {isVideo(selectedMedia) ? (
                              <video
                                src={selectedMedia}
                                className="w-full rounded-xl"
                                controls
                                autoPlay
                              />
                            ) : (
                              <Image
                                src={selectedMedia}
                                alt="Selected media"
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-xl"
                                priority
                              />
                            )}

                            {/* Modal Actions */}
                            <div className="absolute top-4 right-4 flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleDownload(selectedMedia)}
                                className="bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors backdrop-blur-sm"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>

                              <Button
                                size="sm"
                                onClick={() => handleShare(selectedMedia)}
                                className="bg-white/90 dark:bg-black/90 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-600 dark:hover:text-green-400 transition-colors backdrop-blur-sm"
                              >
                                <Share2 className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      )}
                    </Dialog>
                  </div>
                ))}
              </Masonry>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/20 dark:border-gray-700/20">
                  <Images className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No items found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    No {activeCategory.toLowerCase()} available in the selected category.
                  </p>
                </div>
              </div>
            )}

            {/* Load More Button */}
            {visibleImages < filteredMedia.length && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:bg-white/70 dark:hover:bg-black/30 transition-all duration-300 text-lg group disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      Loading...
                    </>
                  ) : (
                    <>
                      Load More
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Infinite Scroll Trigger */}
            <div ref={observerRef} className="h-10"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white/50 dark:bg-black/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/20 dark:border-gray-700/20">
              <Camera className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Captured a Moment?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Have photos or videos from events we&apos;ve attended together? I&apos;d love to include them in the gallery!
              </p>
              <a href="mailto:ratneshmaurya2311@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg group">
                Share Your Photos
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </AuroraBackground>
  );
}

export default GalleryPage;