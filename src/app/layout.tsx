import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "./client-layout";

import PageTransition from "@/components/PageTransition";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ratnesh Maurya - Software Engineer",
  description:
    "Ratnesh Maurya is  a Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.",
  openGraph: {
    title: "Ratnesh Maurya - Software Engineer",
    description:
      "Ratnesh Maurya is  Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.",
    url: "https://ratnesh-maurya.com",
    siteName: "Ratnesh Maurya Portfolio",
    images: [
      {
        url: "https://ratnesh-maurya.com/ratn.jpg",
        width: 1200,
        height: 630,
        alt: "Ratnesh Maurya Portfolio Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnesh Maurya - Software Engineer",
    description:
      "Ratnesh Maurya is a Software Engineer with experience in backend development, cloud solutions, and web technologies.",
    creator: "@RatneshMaurya",
    images: ["https://ratnesh-maurya.com/ratn.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://ratnesh-maurya.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto font-sans bg-[url('/wee.jpg')] dark:bg-gray-950 dark:bg-[url('/bg.gif')] bg-fixed bg-cover bg-center ${GeistSans.variable} ${spaceGrotesk.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />


          <main className="pt-auto ">
            <PageTransition>
              {children}
            </PageTransition>

            <SpeedInsights />
            <Analytics />
          </main>
          <Footer />  
        </ThemeProvider>

        {/* ✅ Move Client Scripts to a Separate Component */}
        <ClientLayout />
      </body>
    </html>
  );
}
