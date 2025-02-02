'use client';
import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Image from 'next/image';

const imageUrls = [
  'https://res.cloudinary.com/daosik5yi/image/upload/v1738486969/portfolio%20images/nyk4jp220mfufi7h5vha.jpg',
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/b3a349xqmcsnz371lddv.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486969/portfolio%20images/acmrbhdxivrkyrfftw3p.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486969/portfolio%20images/htgfzeav9jcbhcpswz65.jpg",
"https://res.cloudinary.com/daosik5yi/image/upload/v1738486969/portfolio%20images/g6aenvhfqoeklottlk4j.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/mw96bfu1uwk9lenyzizo.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738487806/portfolio%20images/lteu8kztlnhjarq6uqqp.jpg",
"https://res.cloudinary.com/daosik5yi/image/upload/v1738487965/portfolio%20images/v74fvujof1lwfnunpknb.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/d1jluoa1aph8wdvyen9u.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/nvzvjb7gitbav7ybz6hc.jpg",
"https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/knjgjtoynlvu6lgrgrln.jpg",
  "https://res.cloudinary.com/daosik5yi/image/upload/v1738486968/portfolio%20images/z4uucmyz82oyfllq7t9o.jpg",
 




];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-3xl mx-auto min-h-screen px-2">
      <h1 className="text-3xl font-bold text-teal-600 dark:text-gray-200">Gallery 📸</h1>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 px-2 py-12"
        columnClassName="flex flex-col gap-4"
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="relative w-full rounded-lg overflow-hidden group cursor-pointer"
            onClick={() => handleImageClick(url)}
          >
            <Image
              src={url}
              alt={`Gallery item ${index + 1}`}
              width={1200}
              height={800}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                console.error(`Failed to load image: ${url}`);
                e.currentTarget.src = '/fallback-image.png';
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0  transition-opacity duration-300 text-lg font-semibold">
                
              </span>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Pop-up Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage}
              alt="Selected image"
              width={500}
              height={600}
              layout="intrinsic"
              objectFit="contain"
              className="rounded-lg"
            />
            <button
              className="absolute top-2 right-2  text-black"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;