// "use client";
// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Header = () => {
//     const [isMenuActive, setIsMenuActive] = useState(false);
//     const pathname = usePathname();

//     // Toggle the hamburger menu
//     const toggleMenu = () => setIsMenuActive((prevState) => !prevState);

//     return (
//         <nav className="   top-0  flex justify-between items-center  py-2 z-10">
            
//             <div className="flex-shrink-0 font-merriweather hover:underline">
//                 <Link href="/" className="text-2xl  px-4">
//                     Ratnesh Maurya
//                 </Link>
//             </div>

//             {/* Hamburger Menu */}
//             <button
//                 onClick={toggleMenu}
//                 className="navbar-burger p-2 rounded-md lg:hidden"
//                 aria-label="menu"
//                 aria-expanded={isMenuActive ? 'true' : 'false'}
//             >
//                 <span 
//                     aria-hidden="true" 
//                     className={`block w-6 h-1 bg-black mb-1 transition-transform duration-300 ${
//                         isMenuActive ? 'transform rotate-45 translate-y-2' : ''
//                     }`}
//                 ></span>
//                 <span 
//                     aria-hidden="true" 
//                     className={`block w-6 h-1 bg-black mb-1 transition-opacity duration-300 ${
//                         isMenuActive ? 'opacity-0' : ''
//                     }`}
//                 ></span>
//                 <span 
//                     aria-hidden="true" 
//                     className={`block w-6 h-1 bg-black transition-transform duration-300 ${
//                         isMenuActive ? 'transform -rotate-45 -translate-y-2' : ''
//                     }`}
//                 ></span>
//             </button>

//             {/* Navbar Menu */}
//             <div className={`navbar-menu ${isMenuActive ? 'block' : 'hidden'} lg:flex lg:items-center absolute lg:static top-full 
//                                               right-0 w-auto bg-emerald-800  lg:bg-transparent lg:w-auto
//                                                h-auto lg:h-auto border-l border-black-200 shadow-lg lg:shadow-none lg:border-0`}>
//                 <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 p-4 lg:p-0">
//                     <Link
//                         href="/blogs"
//                         className={`navbar-item text-base  px-4 py-3 rounded-md transition-all duration-200 font-assistant  font-bold   
//                             hover:bg-black-200 hover:underline ${pathname === '/blogs' ? 'bg-black-200' : ''
//                             }`}
//                     >
//                         Blogs
//                     </Link>
//                     <Link
//                         href="/projects"
//                         className={`navbar-item text-base px-4 font-bold  py-3 rounded-md transition-all duration-200 font-assistant    
//                             hover:bg-black-200 hover:underline ${pathname === '/projects' ? 'bg-black-200' : ''
//                             }`}
//                     >
//                         Projects
//                     </Link>
//                     <Link
//                         href="/github-summary"
//                         className={`navbar-item text-base px-4 font-bold py-3 rounded-md transition-all duration-200 font-assistant
//                             hover:bg-black-200 hover:underline ${pathname === '/github-summary' ? 'bg-black-200' : ''
//                             }`}
//                     >
//                         Github Summary
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Header;


"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, User, Briefcase, BookOpen, Image } from "lucide-react"

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
            {/* Desktop Header */}
            <header className=" sticky top-0 z-50 hidden md:block text-black  mt-2">
                <div className=" ">
                    <div className=" mx-auto px-4 sm:px-6 ">
                        <div className="flex items-center justify-between h-16">
                            <div className=" text-sm">Asia/India</div>

                            <nav className="flex items-center  gap-2">
                                <div className="flex items-center bg-teal-400/15 backdrop-blur-md rounded-full border-2 border-teal-700 px-4 py-2 gap-4">
                                    <Link href="/" className="text-black-300 hover:text-emerald-800 flex items-center gap-2 transition-colors">
                                        <Home size={18} />
                                    </Link>
                                    <Link
                                        href="/about"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <User size={18} />
                                        <span>About</span>
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <Briefcase size={18} />
                                        <span>Work</span>
                                    </Link>
                                    <Link
                                        href="/blogs"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <BookOpen size={18} />
                                        <span>Blog</span>
                                    </Link>
                                    <Link
                                        href="/gallery"
                                        className="text-black-300 hover:text-emerald-800  flex items-center gap-2 transition-colors"
                                    >
                                        <Image size={18} />
                                        <span>Gallery</span>
                                    </Link>
                                </div>
                            </nav>

                            <div className="text-black-300 text-sm tabular-nums">{currentTime}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className="fixed w-full z-50 md:hidden px-4 bottom-8">
                <nav className="flex items-center justify-center">
                    <div className="flex items-center  bg-teal-400/15 backdrop-blur-md rounded-full border-2 border-teal-700 px-6 py-3 gap-8">
                        <Link href="/" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Home size={20} />
                        </Link>
                        <Link href="/about" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <User size={20} />
                        </Link>
                        <Link href="/work" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Briefcase size={20} />
                        </Link>
                        <Link href="/blog" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <BookOpen size={20} />
                        </Link>
                        <Link href="/gallery" className="text-black-300 hover:text-emerald-800  transition-colors">
                            <Image size={20} />
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

