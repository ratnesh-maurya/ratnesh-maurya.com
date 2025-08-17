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

    const navItems = [
        { path: "/", label: "Home", icon: Home },
        { path: "/projects", label: "Projects", icon: Presentation },
        { path: "/blogs", label: "Blogs", icon: BookMarked },
        { path: "/gallery", label: "Gallery", icon: Images },
    ]

    return (
        <>
            {/* Desktop Header */}
            <header className="sticky top-0 z-50 font-sans hidden md:block backdrop-blur-xl">
                <div className="mx-auto px-6 py-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo/Brand */}
                        <Link href="/" className="flex items-center group">
                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                                RM
                            </div>
                        </Link>

                        {/* Navigation */}
                        <nav className="flex items-center">
                            <div className="flex items-center bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 px-2 py-2 gap-1 shadow-lg shadow-gray-200/20 dark:shadow-black/20">
                                {navItems.map((item) => {
                                    const Icon = item.icon
                                    const active = isActive(item.path)

                                    return (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            className={`flex items-center gap-2 transition-all duration-300 rounded-full px-4 py-2.5 text-sm font-medium ${active
                                                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:text-blue-600 dark:hover:text-blue-400"
                                                }`}
                                        >
                                            <Icon size={16} />
                                            <span className="hidden lg:inline">{item.label}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </nav>

                        {/* Right side */}
                        <div className="flex items-center gap-4">
                            <div className="hidden xl:flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="tabular-nums font-mono">{currentTime}</span>
                            </div>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Theme Toggle */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <ModeToggle />
            </div>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
                <div className="flex items-center bg-white/90 dark:bg-black/80 backdrop-blur-xl rounded-full border border-gray-200/50 dark:border-gray-700/50 px-3 py-3 gap-2 shadow-2xl shadow-gray-900/20">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        const active = isActive(item.path)

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`transition-all duration-300 p-3 rounded-full ${active
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-110"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
                                    }`}
                            >
                                <Icon size={20} />
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </>
    )
}