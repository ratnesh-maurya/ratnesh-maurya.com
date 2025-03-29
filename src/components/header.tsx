"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Presentation, BookMarked, Images } from "lucide-react"
import { ModeToggle } from "./ui/theme-toggle"

export default function Header() {
    const [currentTime, setCurrentTime] = useState("")

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

    return (
        <>
            <header className="sticky top-0 z-50 font-sans hidden md:block   border-gray-200/20 dark:border-gray-700/20">
                <div className="max-w-7xl mx-auto">
                    <div className="mx-auto px-4 py-3 sm:px-6">
                        <div className="flex items-center justify-between">
                            <div className="text-sm font-medium bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-transparent bg-clip-text">
                                Asia/India
                            </div>

                            <nav className="flex items-center gap-2">
                                <div className="flex items-center bg-white/70 dark:bg-gray-800/70 rounded-full border border-[rgb(var(--primary))/20] dark:border-[rgb(var(--primary))/20] px-6 py-2.5 gap-6">
                                    <Link href="/" className="hover:text-[rgb(var(--primary))] flex items-center gap-2 transition-all duration-300">
                                        <Home size={18} />
                                        <span className="font-medium">Home</span>
                                    </Link>
                                    <Link href="/projects" className="hover:text-[rgb(var(--primary))] flex items-center gap-2 transition-all duration-300">
                                        <Presentation size={18} />
                                        <span className="font-medium">Projects</span>
                                    </Link>
                                    <Link href="/blogs" className="hover:text-[rgb(var(--primary))] flex items-center gap-2 transition-all duration-300">
                                        <BookMarked size={18} />
                                        <span className="font-medium">Blogs</span>
                                    </Link>
                                    <Link href="/gallery" className="hover:text-[rgb(var(--primary))] flex items-center gap-2 transition-all duration-300">
                                        <Images size={18} />
                                        <span className="font-medium">Gallery</span>
                                    </Link>
                                </div>
                            </nav>

                            <div className="flex items-center gap-6">
                                <div className="text-sm font-medium tabular-nums bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-transparent bg-clip-text">
                                    {currentTime}
                                </div>
                                <ModeToggle />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="md:hidden fixed top-4 right-4 z-50">
                <ModeToggle />
            </div>

            {/* Mobile Header */}
            <header className="fixed w-full z-50 md:hidden px-4 bottom-8">
                <nav className="flex items-center justify-center">
                    <div className="flex items-center bg-white/70 dark:bg-gray-800/70 rounded-full border border-[rgb(var(--primary))/20] dark:border-[rgb(var(--primary))/20] px-8 py-4 gap-10">
                        <Link href="/" className="hover:text-[rgb(var(--primary))] transition-all duration-300">
                            <Home size={22} />
                        </Link>
                        <Link href="/projects" className="hover:text-[rgb(var(--primary))] transition-all duration-300">
                            <Presentation size={22} />
                        </Link>
                        <Link href="/blogs" className="hover:text-[rgb(var(--primary))] transition-all duration-300">
                            <BookMarked size={22} />
                        </Link>
                        <Link href="/gallery" className="hover:text-[rgb(var(--primary))] transition-all duration-300">
                            <Images size={22} />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

