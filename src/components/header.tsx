"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const pathname = usePathname();

    // Toggle the hamburger menu
    const toggleMenu = () => setIsMenuActive((prevState) => !prevState);

    return (
        <nav className="navbar container is-fixed-top border-b border-gray-400 flex justify-between items-center  py-2 g">
            {/* Logo/Name side */}
            <div className="flex-shrink-0 font-merriweather">
                <Link href="/" className="text-2xl text-black  px-4">
                    Ratnesh Maurya
                </Link>
            </div>

            {/* Hamburger Menu - moved outside navbar-brand */}
            <button
                onClick={toggleMenu}
                className="navbar-burger p-2 rounded-md lg:hidden"
                aria-label="menu"
                aria-expanded={isMenuActive ? 'true' : 'false'}
            >
                <span aria-hidden="true" className="block  h-1 bg-black mb-1"></span>
                <span aria-hidden="true" className="block w-6 h-1 bg-black mb-1"></span>
                <span aria-hidden="true" className="block w-6 h-1 bg-black"></span>
            </button>

            {/* Navbar Menu */}
            <div className={`navbar-menu ${isMenuActive ? 'block' : 'hidden'} lg:flex lg:items-center absolute lg:static top-full 
                                              right-0 w-auto bg-white lg:bg-transparent lg:w-auto
                                               h-auto lg:h-auto border-l border-gray-200 shadow-lg lg:shadow-none lg:border-0`}>
                <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0 p-4 lg:p-0">
                    <Link
                        href="/blogs"
                        className={`navbar-item text-base  px-4 py-3 rounded-md transition-all duration-200 font-assistant  font-bold   
                            hover:bg-gray-200 hover:underline ${pathname === '/home' ? 'bg-gray-200' : ''
                            }`}
                    >
                        Blogs
                    </Link>
                    <Link
                        href="/projects"
                        className={`navbar-item text-base px-4 font-bold  py-3 rounded-md transition-all duration-200 font-assistant    
                            hover:bg-gray-200 hover:underline ${pathname === '/first' ? 'bg-gray-200' : ''
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        href="/github-summary"
                        className={`navbar-item text-base px-4 font-bold py-3 rounded-md transition-all duration-200 font-assistant
                            hover:bg-gray-200 hover:underline ${pathname === '/papershelf' ? 'bg-gray-200' : ''
                            }`}
                    >
                        Github Summary
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
