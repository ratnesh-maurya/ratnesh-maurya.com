"use client"

import Link from "next/link"
export default function Header() {

    return (
        <header className="flex justify-between items-center -mx-3">
            {/* Navigation */}
            <nav className="flex items-center space-x-2">
                <Link
                    href="/"
                    className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline"
                >
                    /
                </Link>
                <Link
                    href="/blogs"
                    className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline"
                >
                    /blog
                </Link>
                <Link
                    href="/projects"
                    className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline"
                >
                    /projects
                </Link>
                <Link
                    href="/gallery"
                    className="font-mono underline px-3 py-1 transition hover:opacity-80 hover:no-underline"
                >
                    /gallery
                </Link>
            </nav>

            {/* Right side - Social Links */}
            <div className="flex items-center space-x-3">
                <a
                    aria-label="My GitHub profile"
                    href="https://github.com/ratnesh-maurya"
                    target="_blank"
                    rel="noopener"
                    className="block transition opacity-70 hover:opacity-90"
                >
                    <svg
                        className="w-7 h-7 inline-block shrink-0 text-current align-middle"
                        fill="none"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill="currentColor"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                        />
                    </svg>
                </a>
                <a
                    aria-label="My Twitter profile"
                    href="https://x.com/ratnesh_maurya_"
                    target="_blank"
                    rel="noopener"
                    className="block transition opacity-70 hover:opacity-90"
                >
                    <svg
                        className="w-7 h-7 inline-block shrink-0 text-current align-middle"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>
        </header>
    )
}