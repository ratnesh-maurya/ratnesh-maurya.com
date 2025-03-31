import { Twitter, InstagramIcon, Github, LinkedinIcon } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020; // Assuming you started coding in 2020

    return (
        <footer className="p-10 dark:bg-gray-950  bg-slate-50 ">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="font-sans text-sm text-muted-foreground">
                            © {currentYear} Ratnesh Maurya. All rights reserved.
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-1">
                            {yearsOfExperience} years of coding, {yearsOfExperience * 1000} cups of coffee later...
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        <a
                            href="https://twitter.com/ratnesh_maurya_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-full transition-all duration-200 hover:bg-emerald-500/10 dark:hover:bg-teal-400/10"
                        >
                            <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors" />
                            <span className="sr-only">Twitter</span>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                                Where I tweet about bugs and coffee
                            </span>
                        </a>
                        <a
                            href="https://www.instagram.com/ratnesh_maury/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-full transition-all duration-200 hover:bg-emerald-500/10 dark:hover:bg-teal-400/10"
                        >
                            <InstagramIcon className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors" />
                            <span className="sr-only">Instagram</span>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                                My life in pixels
                            </span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ratnesh-maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-full transition-all duration-200 hover:bg-emerald-500/10 dark:hover:bg-teal-400/10"
                        >
                            <LinkedinIcon className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors" />
                            <span className="sr-only">LinkedIn</span>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                                Where I pretend to be professional
                            </span>
                        </a>
                        <a
                            href="https://github.com/ratnesh-maurya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-full transition-all duration-200 hover:bg-emerald-500/10 dark:hover:bg-teal-400/10"
                        >
                            <Github className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors" />
                            <span className="sr-only">GitHub</span>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                                Where my code lives (and dies)
                            </span>
                        </a>
                        <a
                            href="https://leetcode.com/ratnesh_maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative p-2 rounded-full transition-all duration-200 hover:bg-emerald-500/10 dark:hover:bg-teal-400/10"
                        >
                            <SiLeetcode className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 dark:group-hover:text-teal-300 transition-colors" />
                            <span className="sr-only">LeetCode</span>
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-slate-800 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                                Where I solve imaginary problems
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
