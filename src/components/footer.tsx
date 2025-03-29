import { Twitter, InstagramIcon, Github, LinkedinIcon } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="py-8 mt-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="font-medium text-base bg-gradient-to-r from-[rgb(var(--primary))] to-[rgb(var(--secondary))] text-transparent bg-clip-text">
                            © 2025 Ratnesh Maurya. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        <a
                            href="https://twitter.com/ratnesh_maurya_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-all duration-300"
                        >
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://www.instagram.com/ratnesh_maury/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-all duration-300"
                        >
                            <InstagramIcon size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ratnesh-maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-all duration-300"
                        >
                            <LinkedinIcon size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/ratnesh-maurya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-all duration-300"
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://leetcode.com/ratnesh_maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-[rgb(var(--primary))] dark:hover:text-[rgb(var(--primary))] transition-all duration-300"
                        >
                            <SiLeetcode size={20} />
                            <span className="sr-only">LeetCode</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
