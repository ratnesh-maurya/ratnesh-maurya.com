import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#030d0e',
};

const BASE_URL = 'https://ratnesh-maurya.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Ratnesh Maurya — Backend Engineer | Go & Elixir Developer',
    template: '%s | Ratnesh Maurya',
  },
  description:
    'Ratnesh Maurya is a Software Development Engineer from India, specialising in Go, Elixir, PostgreSQL, Kubernetes, and cloud-native backend systems. Currently building at Initializ.',

  keywords: [
    'Ratnesh Maurya',
    'Ratnesh',
    'ratnesh maurya',
    'ratnesh maurya sutanpur',
    'ratnesh maurya developer',
    'ratnesh maurya software engineer',
    'ratnesh maurya backend engineer',
    'ratnesh maurya go developer',
    'ratnesh maurya initializ',
    'ratnesh maurya india',
    'Ratnesh Maurya portfolio',
    'Backend Engineer India',
    'Go developer India',
    'Elixir developer',
    'Golang developer',
    'Cloud Native engineer',
    'Kubernetes engineer India',
    'Software Engineer Sutanpur',
  ],

  authors: [{ name: 'Ratnesh Maurya', url: BASE_URL }],
  creator: 'Ratnesh Maurya',
  publisher: 'Ratnesh Maurya',

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },

  openGraph: {
    type: 'profile',
    firstName: 'Ratnesh',
    lastName: 'Maurya',
    username: 'ratnesh_maurya_',
    title: 'Ratnesh Maurya — Backend Engineer | Go & Elixir',
    description:
      'Portfolio of Ratnesh Maurya — Software Development Engineer specialising in Go, Elixir, distributed systems, and cloud-native applications.',
    url: BASE_URL,
    siteName: 'Ratnesh Maurya',
    locale: 'en_IN',
    images: [
      {
        url: `${BASE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Ratnesh Maurya — Backend Engineer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ratnesh Maurya — Backend Engineer',
    description:
      'Go & Elixir developer building scalable distributed systems and cloud-native apps. Currently at Initializ.',
    site: '@ratnesh_maurya_',
    creator: '@ratnesh_maurya_',
    images: [`${BASE_URL}/opengraph-image`],
  },

  alternates: {
    canonical: BASE_URL,
    types: { 'application/rss+xml': 'https://blog.ratnesh-maurya.com/feed.xml' },
  },

  category: 'technology',
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Ratnesh Maurya',
      givenName: 'Ratnesh',
      familyName: 'Maurya',
      alternateName: [
        'ratnesh maurya',
        'Ratnesh Maurya Sutanpur',
        'ratnesh maurya developer',
        'ratnesh maurya software engineer',
        'ratnesh maurya backend engineer',
      ],
      description:
        'Software Development Engineer specialising in Go, Elixir, PostgreSQL, Kubernetes, and cloud-native backend systems. Building at Initializ.',
      jobTitle: 'Software Development Engineer',
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      email: 'ratneshmaurya2311@gmail.com',
      nationality: { '@type': 'Country', name: 'India' },
      homeLocation: { '@type': 'Place', name: 'India' },
      sameAs: [
        'https://www.linkedin.com/in/ratnesh-maurya',
        'https://github.com/ratnesh-maurya',
        'https://x.com/ratnesh_maurya_',
        'https://blog.ratnesh-maurya.com',
        'https://leetcode.com/u/ratnesh_maurya/',
        'https://codeforces.com/profile/ratnesh_',
      ],
      knowsAbout: [
        'Go programming language',
        'Golang',
        'Elixir',
        'Backend Development',
        'Distributed Systems',
        'Microservices Architecture',
        'Cloud Native Applications',
        'Kubernetes',
        'PostgreSQL',
        'Redis',
        'AWS',
        'Apache Kafka',
        'Docker',
        'Software Architecture',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Initializ',
        url: 'https://www.initializ.ai',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: 'Ratnesh Maurya',
      url: BASE_URL,
      description:
        'Personal portfolio and blog of Ratnesh Maurya — Backend Engineer from India.',
      inLanguage: 'en-IN',
      author: { '@id': `${BASE_URL}/#person` },
    },
    {
      '@type': 'ProfilePage',
      '@id': `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: 'Ratnesh Maurya — Backend Engineer | Go & Elixir Developer',
      isPartOf: { '@id': `${BASE_URL}/#website` },
      about: { '@id': `${BASE_URL}/#person` },
      description:
        'Portfolio of Ratnesh Maurya showcasing experience, projects, and technical writing on backend engineering.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://blog.ratnesh-maurya.com" />
        <link rel="preconnect" href="https://api.microlink.io" />
      </head>
      <body className="antialiased">
        <main>{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
