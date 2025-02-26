"use client";

import {  FaWhatsapp } from "react-icons/fa";
import { Twitter,Share2 } from "lucide-react"; // Use the updated name

export default function ShareButtons({ title, url }: { title: string; url: string }) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, url });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Sharing is not supported in this browser.");
        }
    };

    return (
        <div className="flex space-x-4">
            
            <button onClick={handleShare} className="text-blue-600 text-2xl">
                <Share2 />
            </button>

            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${url}`}
                target="_blank" rel="noopener noreferrer" className="text-blue-500 text-2xl">
                <Twitter />
            </a>

            <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${url}`}
                target="_blank" rel="noopener noreferrer" className="text-green-500 text-2xl">
                <FaWhatsapp />
            </a>
        </div>
    );
}
