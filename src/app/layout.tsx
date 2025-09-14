import type { Metadata } from "next";
import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Baloo_Bhai_2 } from "next/font/google";

const balooBhai = Baloo_Bhai_2({
  subsets: ["latin"],
  variable: "--font-baloo-bhai",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Ratnesh Maurya - Software Development Engineer",
    template: "%s | Ratnesh Maurya"
  },
  description:
    "Software Development Engineer with expertise in Go, TypeScript, React, and modern web technologies.",
  authors: [{ name: "Ratnesh Maurya", url: "https://ratnesh-maurya.com" }],
  creator: "Ratnesh Maurya",
  openGraph: {
    title: "Ratnesh Maurya - Software Development Engineer",
    description:
      "Software Development Engineer with expertise in Go, TypeScript, React, and modern web technologies.",
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
        <div className="container">
          <main>
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
