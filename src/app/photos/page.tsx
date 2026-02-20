import type { Metadata } from 'next';
import PhotosClient from '@/components/PhotosClient';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Photos',
  description: 'A collection of moments captured by Ratnesh Maurya — travel, cars, and life.',
  openGraph: {
    title: 'Photos — Ratnesh Maurya',
    description: 'A collection of moments captured by Ratnesh Maurya — travel, cars, and life.',
    url: 'https://ratnesh-maurya.com/photos',
  },
  alternates: { canonical: 'https://ratnesh-maurya.com/photos' },
};

// Photos live in /public/photo/ — paths with spaces are URL-encoded
const PHOTOS: Array<{ src: string; alt: string; aspect: 'landscape' | 'portrait' | 'square' }> = [
  { src: '/photo/1.jpg',        alt: 'Ratnesh Maurya',    aspect: 'portrait'  },
  { src: '/photo/car1.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/car2.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/1%20(1).jpg',  alt: 'Moment',            aspect: 'portrait'  },
  { src: '/photo/1%20(2).jpg',  alt: 'Moment',            aspect: 'square'    },
  { src: '/photo/car3.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/1%20(3).jpg',  alt: 'Moment',            aspect: 'portrait'  },
  { src: '/photo/car4.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/1%20(4).jpg',  alt: 'Moment',            aspect: 'square'    },
  { src: '/photo/1%20(5).jpg',  alt: 'Moment',            aspect: 'portrait'  },
  { src: '/photo/car5.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/1%20(6).jpg',  alt: 'Moment',            aspect: 'square'    },
  { src: '/photo/car6.jpg',     alt: 'Car',               aspect: 'landscape' },
  { src: '/photo/1%20(8).jpg',  alt: 'Moment',            aspect: 'portrait'  },
  { src: '/photo/girl.jpg',     alt: 'Photo',             aspect: 'portrait'  },
  { src: '/photo/1%20(9).jpg',  alt: 'Moment',            aspect: 'square'    },
  { src: '/photo/1%20(10).jpg', alt: 'Moment',            aspect: 'landscape' },
];

const BREADCRUMB_LD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Ratnesh Maurya', item: 'https://ratnesh-maurya.com' },
    { '@type': 'ListItem', position: 2, name: 'Gallery', item: 'https://ratnesh-maurya.com/photos' },
  ],
};

export default function PhotosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_LD) }} />
      <PhotosClient photos={PHOTOS} />
      <Footer />
    </>
  );
}
