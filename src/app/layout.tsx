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
  title: "Ratnesh Maurya",
  description: "Ratnesh Maurya's Portfolio",
  openGraph:{
    title:'Ratnesh Maurya',
    description:'Ratnesh Maurya\'s Portfolio',
    url:'https://ratn.tech',
    siteName:'Ratnesh Maurya',
    images:['/favicon.ico'],
  },
  twitter:{
    
    title:'Ratnesh Maurya',
    description:'Ratnesh Maurya\'s Portfolio',
    images:['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`max-w-7xl mx-auto ${poppins.variable} ${assistant.variable} ${merriweather.variable}`}>
        <div className="fixed top-0 left-0 right-0 z-50 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Header />
          </div>
        </div>
        <main className="pt-[64px] px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}