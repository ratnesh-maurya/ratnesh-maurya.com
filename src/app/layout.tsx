import type { Metadata } from "next";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Poppins, JetBrains_Mono, Baloo_Bhai_2 } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

const balooBhai2 = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-baloo-bhai-2",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Ratnesh Maurya - Software Development Engineer | Modern Portfolio",
    template: "%s | Ratnesh Maurya"
  },
  description:
    "Modern portfolio of Ratnesh Maurya, Software Development Engineer with expertise in Go, Elixir, TypeScript, and modern backend technologies.",
  authors: [{ name: "Ratnesh Maurya", url: "https://ratnesh-maurya.com" }],
  creator: "Ratnesh Maurya",
  keywords: ["Software Engineer", "Backend Developer", "Go", "Golang", "Elixir", "TypeScript", "Modern Portfolio", "Ratnesh Maurya"],
  openGraph: {
    title: "Ratnesh Maurya - Software Development Engineer | Modern Portfolio",
    description:
      "Modern portfolio showcasing backend development expertise in Go, Elixir, and modern cloud technologies.",
    url: "https://ratnesh-maurya.com",
    siteName: "Ratnesh Maurya",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://ratnesh-maurya.com"),
  alternates: {
    canonical: "https://ratnesh-maurya.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} ${balooBhai2.variable} font-baloo-bhai-2`}>
        <main className="w-full">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
