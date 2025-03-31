import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Coffee, Home } from "lucide-react";

export const metadata: Metadata = {
    title: '404 - Oops! Page Not Found | Ratnesh Maurya',
    description: 'Looks like you&apos;ve ventured into the void. Time to grab a coffee and head back!',
}

export default function NotFound() {
    const messages = [
        "Looks like you&apos;ve ventured into the void",
        "This page is as empty as my coffee cup",
        "404: Page not found (but we found your sense of adventure)",
        "This page is like my social life - non-existent",
        "You&apos;re lost, but at least you&apos;re not alone in this void",
        "404: The page you&apos;re looking for is on a coffee break",
        "This page is as missing as my will to live",
        "You&apos;ve reached the end of the internet (just kidding)",
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-8 max-w-2xl">
                <div className="space-y-2">
                    <h1 className="text-5xl font-bold text-emerald-700 dark:text-teal-300">
                        404
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Oops! Page Not Found
                    </p>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-full max-w-sm bg-white dark:bg-slate-800 px-4 py-2 rounded-full text-sm text-emerald-700 dark:text-teal-300 shadow-md">
                        <Coffee className="w-4 h-4 inline-block mr-1" />
                        {randomMessage}
                    </div>
                    <Image
                        src="/404_01-min.jpg"
                        alt="404"
                        className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        width={500}
                        height={500}
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <p className="text-muted-foreground text-lg">
                        Don&apos;t worry, even the best developers get lost sometimes.
                        <br />
                        <span className="text-sm">(And by sometimes, I mean all the time)</span>
                    </p>

                    <div className="flex justify-center">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors shadow-sm"
                        >
                            <Home className="w-5 h-5" />
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground/70">
                    P.S. If you&apos;re still here, you might want to check if your coffee is still hot
                </div>
            </div>
        </div>
    );
}