import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";

import ClientLayout from "./client-layout";
import { PersonSchema, WebSiteSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { PerformanceOptimizer, ResourceHints, WebVitalsMonitor, CriticalCSS } from "@/components/seo/PerformanceOptimizer";

import PageTransition from "@/components/PageTransition";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ratnesh Maurya - Software Development Engineer | Full Stack Developer",
    template: "%s | Ratnesh Maurya"
  },
  description:
    "Ratnesh Maurya is a Software Development Engineer with expertise in Golang, TypeScript, React, Next.js, AWS, Kubernetes, Docker, and modern web technologies. Explore my portfolio, projects, and technical blog.",
  authors: [{ name: "Ratnesh Maurya", url: "https://ratnesh-maurya.com" }],
  creator: "Ratnesh Maurya",
  publisher: "Ratnesh Maurya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Ratnesh Maurya - Software Development Engineer | Full Stack Developer",
    description:
      "Ratnesh Maurya is a Software Development Engineer with expertise in Golang, TypeScript, React, Next.js, AWS, Kubernetes, Docker, and modern web technologies.",
    url: "https://ratnesh-maurya.com",
    siteName: "Ratnesh Maurya Portfolio",
    images: [
      {
        url: "https://ratnesh-maurya.com/ratn.jpg",
        width: 1200,
        height: 630,
        alt: "Ratnesh Maurya - Software Development Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Ratnesh Maurya",
    "रत्नेश मौर्य",
    "Software Engineer",
    "Indian Software Engineer",
    "Full Stack Developer",
    "Portfolio",
    "Cloud Engineer",
    "Open Source",
    "Tech Blog",
    "Engineering Blog",
    "AI",
    "Machine Learning",
    "DevOps",
    "Microservices",
    "REST API",
    "GraphQL",
    "React",
    "Next.js",
    "TypeScript",
    "Golang",
    "Python",
    "Elixir",
    "Postgres",
    "MongoDB",
    "Redis",
    "AWS",
    "Kubernetes",
    "Docker",
    "Terraform",
    "initializ.ai",
    "Loannetwork",
    "EMSEC",
    "GitHub",
    "LinkedIn",
    "Twitter",
    "Backend",
    "Frontend",
    "Web Developer",
    "India",
    "Software Projects",
    "Professional Experience",
    "Certifications",
    "Achievements",
    "Contact Ratnesh Maurya"
  ],
  twitter: {
    card: "summary_large_image",
    title: "Ratnesh Maurya - Software Development Engineer",
    description:
      "Software Development Engineer specializing in Golang, TypeScript, React, AWS, and cloud-native technologies. Explore my portfolio and technical insights.",
    creator: "@ratnesh_maurya_",
    site: "@ratnesh_maurya_",
    images: ["https://ratnesh-maurya.com/ratn.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    yandex: "your-yandex-verification-code", // Replace with actual verification code
    yahoo: "your-yahoo-verification-code", // Replace with actual verification code
  },
  metadataBase: new URL("https://ratnesh-maurya.com"),
  alternates: {
    canonical: "https://ratnesh-maurya.com",
    languages: {
      "en-US": "https://ratnesh-maurya.com",
      "x-default": "https://ratnesh-maurya.com",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Ratnesh Maurya" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ratnesh Maurya" />
        <meta name="description" content="Software Development Engineer specializing in Golang, TypeScript, React, AWS, and cloud-native technologies." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3b82f6" />

        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#3b82f6" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://ratnesh-maurya.com" />
        <meta name="twitter:title" content="Ratnesh Maurya" />
        <meta name="twitter:description" content="Software Development Engineer specializing in Golang, TypeScript, React, AWS, and cloud-native technologies." />
        <meta name="twitter:image" content="https://ratnesh-maurya.com/icons/icon-192x192.png" />
        <meta name="twitter:creator" content="@ratnesh_maurya_" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ratnesh Maurya" />
        <meta property="og:description" content="Software Development Engineer specializing in Golang, TypeScript, React, AWS, and cloud-native technologies." />
        <meta property="og:site_name" content="Ratnesh Maurya" />
        <meta property="og:url" content="https://ratnesh-maurya.com" />
        <meta property="og:image" content="https://ratnesh-maurya.com/icons/icon-192x192.png" />

        {/* Resource Hints for Performance */}
        <ResourceHints />
        {/* Critical CSS */}
        <CriticalCSS />
      </head>
      <body
        className={`mx-auto font-sans bg-white min-h-screen ${GeistSans.variable} ${spaceGrotesk.variable}`}
      >
        {/* Enhanced Structured Data */}
        <PersonSchema />
        <WebSiteSchema />
        <OrganizationSchema />

        {/* Performance Optimization Components */}
        <PerformanceOptimizer />
        <WebVitalsMonitor />

        <div className="px-4 mx-auto max-w-[75ch] my-4 sm:my-8 md:my-14">
          <Header />

          <main>
            <PageTransition>
              {children}
            </PageTransition>

            <SpeedInsights />
            <Analytics />
          </main>
        </div>

        {/* ✅ Move Client Scripts to a Separate Component */}
        <ClientLayout />
      </body>
    </html>
  );
}
