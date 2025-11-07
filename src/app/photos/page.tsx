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
        <div className="min-h-screen bg-[#0a192f] text-[#8892b0]">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#1e293b]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[#ccd6f6] hover:text-[#64ffda] transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-lg font-medium">Back to Portfolio</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-[#ccd6f6]">Photos</h1>
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
                                className="group relative w-full cursor-pointer rounded-lg overflow-hidden hover:ring-2 hover:ring-[#64ffda] transition-all duration-300 bg-[#1e293b]"
                                onClick={() => openLightbox(photo, index)}
                            >
                                <img
                                    src={imageSrc}
                                    alt={`Photo ${index + 1}`}
                                    className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02] block"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none rounded-lg" />
                            </div>
                        );
                    })}
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white hover:text-[#64ffda] transition-colors z-10 p-2"
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
                        className="absolute left-4 text-white hover:text-[#64ffda] transition-colors z-10 p-2 bg-black/50 rounded-full"
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
                        className="absolute right-4 text-white hover:text-[#64ffda] transition-colors z-10 p-2 bg-black/50 rounded-full"
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

                    {/* Photo Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                        {currentIndex + 1} / {photos.length}
                    </div>
                </div>
            )}
        </div>
    );
}
