import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Ratnesh Maurya',
  description: 'A visual collection of moments from tech conferences, community events, and life adventures captured by Ratnesh Maurya.',
  keywords: 'Ratnesh Maurya, gallery, photography, tech events, conferences, community, portfolio',
  authors: [{ name: 'Ratnesh Maurya', url: 'https://ratnesh-maurya.com' }],
  creator: 'Ratnesh Maurya',
  publisher: 'Ratnesh Maurya',
  alternates: {
    canonical: 'https://ratnesh-maurya.com/gallery',
  },
  openGraph: {
    title: 'Gallery - Ratnesh Maurya',
    description: 'A visual collection of moments from tech conferences, community events, and life adventures.',
    type: 'website',
    url: 'https://ratnesh-maurya.com/gallery',
    images: [
      {
        url: 'https://ratnesh-maurya.com/gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Gallery - Ratnesh Maurya',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gallery - Ratnesh Maurya',
    description: 'A visual collection of moments from tech conferences, community events, and life adventures.',
    images: ['https://ratnesh-maurya.com/gallery.jpg'],
  },
};


// Gallery images - only showing JPG images for simplicity
const galleryImages = [
  { src: '/gallery/1.jpg', alt: 'Photo 1' },
  { src: '/gallery/1 (1).jpg', alt: 'Photo 2' },
  { src: '/gallery/1 (2).jpg', alt: 'Photo 3' },
  { src: '/gallery/1 (3).jpg', alt: 'Photo 4' },
  { src: '/gallery/1 (4).jpg', alt: 'Photo 5' },
  { src: '/gallery/1 (5).jpg', alt: 'Photo 6' },
  { src: '/gallery/car1.jpg', alt: 'Car 1' },
  { src: '/gallery/car2.jpg', alt: 'Car 2' },
  { src: '/gallery/car3.jpg', alt: 'Car 3' },
  { src: '/gallery/car4.jpg', alt: 'Car 4' },
  { src: '/gallery/car5.jpg', alt: 'Car 5' },
  { src: '/gallery/car6.jpg', alt: 'Car 6' },
  { src: '/gallery/girl.jpg', alt: 'Portrait' },
  { src: '/gallery/1 (6).jpg', alt: 'Photo 7' },
  { src: '/gallery/1 (8).jpg', alt: 'Photo 8' },
  { src: '/gallery/1 (9).jpg', alt: 'Photo 9' },
  { src: '/gallery/1 (10).jpg', alt: 'Photo 10' },
  { src: '/gallery/2 (1).jpg', alt: 'Photo 11' },
  { src: '/gallery/2 (2).jpg', alt: 'Photo 12' },
  { src: '/gallery/2 (3).jpg', alt: 'Photo 13' },
  { src: '/gallery/2 (4).jpg', alt: 'Photo 14' },
  { src: '/gallery/2 (5).jpg', alt: 'Photo 15' },
  { src: '/gallery/dump1.jpg', alt: 'Photo 16' },
  { src: '/gallery/dump2.jpg', alt: 'Photo 17' },
  { src: '/gallery/dump3.jpg', alt: 'Photo 18' },
  { src: '/gallery/dump4.jpg', alt: 'Photo 19' },
  { src: '/gallery/dump5.jpg', alt: 'Photo 20' }
];

export default function GalleryPage() {
  return (
    <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
      {/* Hero Section */}
      <section>
        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900">
          Gallery
        </h1>
      </section>

      {/* Gallery Grid */}
      <section>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2">
          {galleryImages.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-2">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:opacity-80 transition-opacity cursor-pointer rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}