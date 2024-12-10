import type { Metadata } from "next";
import { Poppins, Assistant, Merriweather} from 'next/font/google'; // Add this import
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Define your fonts
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});
const assistant = Assistant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-assistant',
});
const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-merriweather',
});



export const metadata: Metadata = {
  title: "Ratnesh Maurya - Software Engineer | Portfolio",
  description: "Ratnesh Maurya's Portfolio showcasing his skills, projects, education, and experience in software engineering.",
  openGraph: {
    title: 'Ratnesh Maurya - Software Engineer',
    description: 'Explore the portfolio of Ratnesh Maurya, a Software Engineer with expertise in Golang, TypeScript, AWS, Kubernetes, Docker, and more.',
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
    description: 'Explore the portfolio of Ratnesh Maurya, Software Engineer with experience in backend development, cloud solutions, and web technologies.',
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
  keywords: [
    'Ratnesh Maurya', 'Software Engineer', 'Portfolio', 'Golang Developer', 'AWS Certified', 'Kubernetes', 'Docker',
    'Backend Development', 'Full-stack Developer', 'React.js', 'Next.js', 'RESTful API', 'Python', 'Leetcode',
    'Competitive Coding', 'Cloud Solutions', 'DevOps', 'Project Management'
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
      <body className={`max-w-7xl mx-auto  ${poppins.variable} ${assistant.variable} ${merriweather.variable}`}>
        
            <Header />
     
        <main className="pt-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer  />
    
      </body>
    </html>
  );
}