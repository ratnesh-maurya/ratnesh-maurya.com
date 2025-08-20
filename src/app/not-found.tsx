import Link from "next/link";
import { Home } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: '404 - Page Not Found | Ratnesh Maurya',
    description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
    return (
        <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-12 mt-4 sm:mt-8 md:mt-14">
            <section>
                <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-semibold text-gray-900">
                    404 - Page Not Found
                </h1>
                <p className="opacity-90 leading-relaxed text-gray-600 mt-4">
                    The page you are looking for could not be found.
                </p>
                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                    >
                        <Home className="w-5 h-5" />
                        Return Home
                    </Link>
                </div>
            </section>
        </div>
    );
}