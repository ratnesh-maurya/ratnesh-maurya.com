import { Twitter, Instagram, Github, Linkedin, Mail, Heart, Coffee } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - 2020;

    const socialLinks = [
        {
            href: "https://x.com/ratnesh_maurya_",
            icon: Twitter,
            label: "Twitter",
            color: "hover:text-blue-500",
            description: "Latest thoughts & updates"
        },
        {
            href: "https://www.linkedin.com/in/ratnesh-maurya/",
            icon: Linkedin,
            label: "LinkedIn",
            color: "hover:text-blue-600",
            description: "Professional network"
        },
        {
            href: "https://github.com/ratnesh-maurya",
            icon: Github,
            label: "GitHub",
            color: "hover:text-gray-800 dark:hover:text-gray-200",
            description: "Code repositories"
        },
        {
            href: "https://www.instagram.com/ratnesh_maury/",
            icon: Instagram,
            label: "Instagram",
            color: "hover:text-pink-600",
            description: "Life in pixels"
        },
        {
            href: "https://leetcode.com/ratnesh_maurya/",
            icon: SiLeetcode,
            label: "LeetCode",
            color: "hover:text-orange-500",
            description: "Problem solving"
        },
        {
            href: "mailto:ratneshmaurya2311@gmail.com",
            icon: Mail,
            label: "Email",
            color: "hover:text-green-600",
            description: "Get in touch"
        }
    ];

    const quickLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blogs", label: "Blog" },
        { href: "/gallery", label: "Gallery" },
    ];

    return (
        <footer className="relative bg-white/50 dark:bg-black/20 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
                                Ratnesh Maurya
                            </div>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md leading-relaxed">
                            Software Development Engineer passionate about building scalable systems,
                            cloud-native architectures, and innovative developer tools.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <Coffee className="h-4 w-4" />
                            <span>{yearsOfExperience} years coding • {yearsOfExperience * 1000}+ cups of coffee</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group relative p-3 rounded-xl bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        <Icon className="h-5 w-5 transition-colors" />
                                        <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                                            {social.description}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>© {currentYear} Ratnesh Maurya.</span>
                        <span>Made with</span>
                        <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                        <span>and lots of</span>
                        <Coffee className="h-4 w-4 text-brown-600" />
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                        <span>Built with Next.js & Tailwind CSS</span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>

                {/* Fun Stats */}
                <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Projects Built</div>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">5+</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
                        </div>
                        <div className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">∞</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Learning</div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}