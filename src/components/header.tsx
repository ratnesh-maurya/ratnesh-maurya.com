"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Presentation, BookMarked, Images } from "lucide-react"
import { ModeToggle } from "./ui/theme-toggle"

export default function Header() {
    const [currentTime, setCurrentTime] = useState("")
    const pathname = usePathname()

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const hours = now.getHours().toString().padStart(2, "0")
            const minutes = now.getMinutes().toString().padStart(2, "0")
            const seconds = now.getSeconds().toString().padStart(2, "0")
            setCurrentTime(`${hours}:${minutes}:${seconds}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)

        return () => clearInterval(interval)
    }, [])

    const isActive = (path: string) => pathname === path

    return (
        <>

            <header className="sticky top-0 z-50 font-sans hidden md:block ">
                <div className="mx-auto px-4 py-2 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        <div className="text-sm font-medium text-gray-700">Asia/India</div>

                        <nav className="flex items-center gap-2">
                            <div className="flex items-center bg-gray-100 dark:bg-slate-200/10 backdrop-blur-md rounded-full border border-gray-300 dark:border-teal-400/30 px-4 py-2 gap-4 shadow-lg shadow-gray-200/50 dark:shadow-teal-400/5">
                                <Link
                                    href="/"
                                    className={`flex items-center gap-2 transition-all duration-200 rounded-full px-3 py-1.5 ${isActive("/")
                                        ? "bg-emerald-100 dark:bg-teal-400/20 text-emerald-700 dark:text-teal-300"
                                        : "hover:bg-emerald-50 dark:hover:bg-teal-400/10 hover:text-emerald-700 dark:hover:text-teal-300"
                                        }`}
                                >
                                    <Home size={18} />
                                    <span>Home</span>
                                </Link>
                                <Link
                                    href="/projects"
                                    className={`flex items-center gap-2 transition-all duration-200 rounded-full px-3 py-1.5 ${isActive("/projects")
                                        ? "bg-emerald-100 dark:bg-teal-400/20 text-emerald-700 dark:text-teal-300"
                                        : "hover:bg-emerald-50 dark:hover:bg-teal-400/10 hover:text-emerald-700 dark:hover:text-teal-300"
                                        }`}
                                >
                                    <Presentation size={18} />
                                    <span>Projects</span>
                                </Link>
                                <Link
                                    href="/blogs"
                                    className={`flex items-center gap-2 transition-all duration-200 rounded-full px-3 py-1.5 ${isActive("/blogs")
                                        ? "bg-emerald-100 dark:bg-teal-400/20 text-emerald-700 dark:text-teal-300"
                                        : "hover:bg-emerald-50 dark:hover:bg-teal-400/10 hover:text-emerald-700 dark:hover:text-teal-300"
                                        }`}
                                >
                                    <BookMarked size={18} />
                                    <span>Blogs</span>
                                </Link>
                                <Link
                                    href="/gallery"
                                    className={`flex items-center gap-2 transition-all duration-200 rounded-full px-3 py-1.5 ${isActive("/gallery")
                                        ? "bg-emerald-100 dark:bg-teal-400/20 text-emerald-700 dark:text-teal-300"
                                        : "hover:bg-emerald-50 dark:hover:bg-teal-400/10 hover:text-emerald-700 dark:hover:text-teal-300"
                                        }`}
                                >
                                    <Images size={18} />
                                    <span>Gallery</span>
                                </Link>
                            </div>
                        </nav>
                        <div className="flex items-center gap-4">
                            <div className="text-sm tabular-nums font-mono animate-pulse text-emerald-700 dark:text-teal-300">
                                {currentTime}
                            </div>
                            <ModeToggle />

                        </div>
                    </div>
                </div>
            </header>


            <div className="md:hidden text-right px-4 py-2">

                <ModeToggle />
            </div>

            {/* Mobile Header */}
            <header className="fixed w-full z-50 md:hidden px-4 bottom-8 z-40">
                <nav className="flex items-center justify-center">

                    <div className="flex items-center  dark:bg-teal-400/10 backdrop-blur-md rounded-full border border-gray-300 dark:border-teal-400/30 px-6 py-3 gap-8 shadow-lg shadow-gray-200/50 dark:shadow-teal-400/10">
                        <Link
                            href="/"
                            className={`transition-all duration-200 p-2 rounded-full ${isActive("/")
                                ? " text-teal-700 dark:text-teal-300"
                                : "hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300"
                                }`}
                        >
                            <Home size={20} />
                        </Link>
                        <Link
                            href="/projects"
                            className={`transition-all duration-200 p-2 rounded-full ${isActive("/projects")
                                ? "text-teal-700 dark:text-teal-300"
                                : "hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300"
                                }`}
                        >
                            <Presentation size={20} />
                        </Link>
                        <Link
                            href="/blogs"
                            className={`transition-all duration-200 p-2 rounded-full ${isActive("/blogs")
                                ? " text-teal-700 dark:text-teal-300"
                                : "hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300"
                                }`}
                        >
                            <BookMarked size={20} />
                        </Link>
                        <Link
                            href="/gallery"
                            className={`transition-all duration-200 p-2 rounded-full ${isActive("/gallery")
                                ? " text-teal-700 dark:text-teal-300"
                                : "hover:bg-teal-50 hover:text-teal-700 dark:hover:text-teal-300"
                                }`}
                        >
                            <Images size={20} />

                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

