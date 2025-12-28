'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

// List of photos from the public/photo folder
// Only including supported image formats (jpg, jpeg, png, gif)
const photos = [
    '1 (1).jpg',
    '1 (10).jpg',
    '1 (2).jpg',
    '1 (3).jpg',
    '1 (4).jpg',
    '1 (5).jpg',
    '1 (6).jpg',
    '1 (8).jpg',
    '1 (9).jpg',
    '1.gif',
    '1.jpg',
    'car1.jpg',
    'car2.jpg',
    'car3.jpg',
    'car4.jpg',
    'car5.jpg',
    'car6.jpg',
    'girl.jpg',
];

export default function PhotosPage() {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (photo: string, index: number) => {
        setSelectedPhoto(photo);
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setSelectedPhoto(null);
    };

    const navigatePhoto = (direction: 'prev' | 'next') => {
        if (selectedPhoto) {
            let newIndex = currentIndex;
            if (direction === 'prev') {
                newIndex = (currentIndex - 1 + photos.length) % photos.length;
            } else {
                newIndex = (currentIndex + 1) % photos.length;
            }
            setCurrentIndex(newIndex);
            setSelectedPhoto(photos[newIndex]);
        }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!selectedPhoto) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                const newIndex = (currentIndex - 1 + photos.length) % photos.length;
                setCurrentIndex(newIndex);
                setSelectedPhoto(photos[newIndex]);
            } else if (e.key === 'ArrowRight') {
                const newIndex = (currentIndex + 1) % photos.length;
                setCurrentIndex(newIndex);
                setSelectedPhoto(photos[newIndex]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedPhoto, currentIndex]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#151520] text-[#8892b0]">
            {/* Modern Header with Glassmorphism */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border-b border-[rgba(255,255,255,0.1)]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-white hover:text-[#6366f1] transition-all duration-300 hover:translate-x-[-4px]"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-lg font-medium">Back to Portfolio</span>
                    </Link>
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#b4bcd0] bg-clip-text text-transparent">Photos</h1>
                    <div className="w-32"></div> {/* Spacer for centering */}
                </div>
            </header>

            {/* Photo List - Single Column */}
            <main className="max-w-4xl mx-auto px-6 py-12">
                <div className="mb-8">
                    <p className="text-[#8892b0] text-lg">
                        A collection of {photos.length} photos
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {photos.map((photo, index) => {
                        const imageSrc = `/photo/${photo}`;
                        return (
                            <div
                                key={photo}
                                className="group relative w-full cursor-pointer rounded-xl overflow-hidden backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-300"
                                onClick={() => openLightbox(photo, index)}
                            >
                                <img
                                    src={imageSrc}
                                    alt={`Photo ${index + 1}`}
                                    className="w-full h-auto object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02] block"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(99,102,241,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Modern Lightbox Modal with Glassmorphism */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-[#6366f1] transition-all duration-300 z-10 p-2 backdrop-blur-xl bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:scale-110"
                        aria-label="Close"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigatePhoto('prev');
                        }}
                        className="absolute left-4 text-white hover:text-[#6366f1] transition-all duration-300 z-10 p-2 backdrop-blur-xl bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:scale-110"
                        aria-label="Previous photo"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigatePhoto('next');
                        }}
                        className="absolute right-4 text-white hover:text-[#6366f1] transition-all duration-300 z-10 p-2 backdrop-blur-xl bg-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(255,255,255,0.2)] hover:scale-110"
                        aria-label="Next photo"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Photo */}
                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={`/photo/${selectedPhoto}`}
                            alt={`Photo ${currentIndex + 1}`}
                            fill
                            className="object-contain"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Modern Photo Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white backdrop-blur-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] px-4 py-2 rounded-full">
                        {currentIndex + 1} / {photos.length}
                    </div>
                </div>
            )}
        </div>
    );
}
