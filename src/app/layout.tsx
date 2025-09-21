import type { Metadata } from "next";
import "./globals.css";
import "../styles/terminal.css";
import "../styles/terminal-portfolio.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Baloo_Bhai_2 } from "next/font/google";
import PhysicsBackground from "@/components/PhysicsBackground";

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-baloo-bhai",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Ratnesh Maurya - Software Development Engineer | Terminal Portfolio",
    template: "%s | Ratnesh Maurya"
  },
  description:
    "Interactive terminal-style portfolio of Ratnesh Maurya, Software Development Engineer with expertise in Go, Elixir, TypeScript, and modern backend technologies.",
  authors: [{ name: "Ratnesh Maurya", url: "https://ratnesh-maurya.com" }],
  creator: "Ratnesh Maurya",
  keywords: ["Software Engineer", "Backend Developer", "Go", "Golang", "Elixir", "TypeScript", "Terminal Portfolio", "Ratnesh Maurya"],
  openGraph: {
    title: "Ratnesh Maurya - Software Development Engineer | Terminal Portfolio",
    description:
      "Interactive terminal-style portfolio showcasing backend development expertise in Go, Elixir, and modern cloud technologies.",
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
      <body className={balooBhai.variable}>
        <PhysicsBackground />
        <main className="w-full">
          {children}
        </main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
