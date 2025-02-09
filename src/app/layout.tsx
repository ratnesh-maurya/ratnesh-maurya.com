
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from 'geist/font/sans'
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  openGraph: {
    title: 'Ratnesh Maurya',
    description: 'Ratnesh Maurya, a Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.',
    url: 'https://ratn.tech',
    siteName: 'Ratnesh Maurya Portfolio',
    images: [
      {
        url: 'https://ratn.tech/ratn.png',
        width: 1200,
        height: 630,
        alt: 'Ratnesh Maurya Portfolio Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Ratnesh Maurya - Software Engineer',
    description: 'Ratnesh Maurya, Software Engineer with experience in backend development, cloud solutions, and web technologies.',
    images: [
      {
        url: 'https://ratn.tech/ratn.png',
        width: 1200,
        height: 630,
        alt: 'Ratnesh Maurya Portfolio Image',
      },
    ],
    card: 'summary_large_image',
    creator: '@RatneshMaurya',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  generator: 'Next.js',
  applicationName: 'Ratnesh Portfolio',
keywords : [
    'Ratnesh Maurya', 
    'Software Engineer', 
    'Portfolio', 
    'Golang Developer', 
    'AWS Certified', 
    'Kubernetes', 
    'Docker', 
    'Backend Development', 
    'Full-stack Developer', 
    'React.js', 
    'Next.js', 
    'RESTful API', 
    'Python', 
    'Leetcode', 
    'Competitive Coding', 
    'Cloud Solutions', 
    'DevOps', 
    'Project Management',
    'Software Engineers', 
    'Software Developer', 
    'Software Company', 
    'Business Software', 
    'Programming Software', 
    'Software Development Company', 
    'Application Development', 
    'Coding Software', 
    'Software Design', 
    'Custom Software Development Company', 
    'App Development Software', 
    'Mobile Development', 
    'Software Companies Near Me', 
    'Web Design Software', 
    'Game Development Software', 
    'Software Application Developer', 
    'Software Development Methodologies', 
    'Software Programmer', 
    'Website Design Software', 
    'Cloud-Based Software', 
    'Cloud Software', 
    'Top Software Companies',
    'Software Engineer',
    'Software Developer',
    'Software Engineer',
    'Software Developer',
    'Blog',
    'Blogs',
    'Blog Post',

],

  authors: [{ name: 'Ratnesh Maurya', url: 'https://ratn.tech' }],
  creator: 'Ratnesh Maurya',
  publisher: 'Ratnesh Maurya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ratn.tech'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <head>
        <meta name="google-adsense-account" content="ca-pub-4886849425326339" />
          <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-T13RLYDHMR"
        />
        
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T13RLYDHMR');
          `}
        </Script>

        <Script id="crisp-chat" strategy="afterInteractive">
          {`
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "c30f5b1d-7b09-4708-8b51-fda5cfb19206";
            (function() {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </head>
    
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`mx-auto font-sans dark:bg-gray-950 dark:bg-[url('/bg.gif')] bg-fixed bg-cover bg-center ${GeistSans.variable}`}
        >
          
            <Header />
     
        <main className="pt-auto">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Footer  />
    
      </body>
      </ThemeProvider>
    </html>
  );
}