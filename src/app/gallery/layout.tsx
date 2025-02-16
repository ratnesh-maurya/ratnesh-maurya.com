// src/app/gallery/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery - Ratnesh Maurya",
    description: "Explore the gallery of Ratnesh Maurya, including images and videos.",
    keywords: "Gallery, Ratnesh Maurya, Images, Videos, Photography",
    openGraph: {
        title: "Gallery - Ratnesh Maurya",
        description: "Explore the gallery of Ratnesh Maurya, including images and videos.",
        type: "website",
        url: "https://ratn.tech/gallery",
        images: [
            {
                url: "https://ratn.tech/gallery.jpg",
                width: 1200,
                height: 630,
                alt: "Gallery - Ratnesh Maurya",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ratnesh_maurya_",
        title: "Gallery - Ratnesh Maurya",
        description: "Explore the gallery of Ratnesh Maurya, including images and videos.",
        creator: "@ratnesh_maurya_",
        images: [
            {
                url: "https://ratn.tech/gallery.jpg",
                width: 1200,
                height: 630,
                alt: "Gallery - Ratnesh Maurya",
            },
        ],
    },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
