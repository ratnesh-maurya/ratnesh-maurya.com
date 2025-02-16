import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '404 - Ratnesh Maurya',
    description: '404 - Ratnesh Maurya',
}


export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            
            <Image src="/404_01-min.jpg" alt="404" className="w-1/2" width={500} height={500} />
            <Link href="/" className="mt-6 px-6 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-800 transition-colors">Go Home</Link>
        </div>
    );
}