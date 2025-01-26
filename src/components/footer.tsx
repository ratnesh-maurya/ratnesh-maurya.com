
import { Twitter, InstagramIcon, Github , LinkedinIcon} from "lucide-react"; // Use the updated name
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
    return (
        <footer className="py-3 mt-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="font-sans text-gray-800 dark:text-gray-50">© 2025 Ratnesh Maurya. All rights reserved.</p>
                    </div>
                    
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://twitter.com/ratnesh_maurya_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-gray-800 dark:hover:text-teal-400 dark:text-gray-50 hover:text-teal-800 transition-colors"
                        >
                            <Twitter size={20} />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a
                            href="https://www.instagram.com/ratnesh_maury/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:hover:text-teal-400 dark:text-gray-50 hover:text-teal-800 transition-colors"
                        >
                            <InstagramIcon size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ratnesh-maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:hover:text-teal-400 dark:text-gray-50 hover:text-teal-800 transition-colors"
                        >
                            <LinkedinIcon size={20} />
                            <span className="sr-only">GitHub</span>
                            </a>
                        <a
                            href="https://github.com/ratnesh-maurya"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:hover:text-teal-400 dark:text-gray-50 hover:text-teal-800 transition-colors"
                        >
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a
                            href="https://leetcode.com/ratnesh_maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 dark:hover:text-teal-400 dark:text-gray-50 hover:text-teal-800 transition-colors"
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
