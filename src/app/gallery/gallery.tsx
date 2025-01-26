"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface GalleryProps {
    posts: string[]
    className?: string
}

export default function Gallery({ posts, className }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    // Default posts if none provided
    const defaultPosts = [
        "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.29350-15/286398368_601766357654077_7367169484987019528_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=473cFnW6_a8Q7kNvgFcZNKf&_nc_gid=8a15b1d835e846908c221d845fb5d926&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjg1NTI3ODYwNzIxMjk2ODAwNQ%3D%3D.3-ccb7-5&oh=00_AYC8MEyRPTlhfVEPDm1tyz_pH17vL5CKjdMSD-5rVZrafg&oe=679C779F&_nc_sid=10d13b",
        "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.29350-15/286398368_601766357654077_7367169484987019528_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=473cFnW6_a8Q7kNvgFcZNKf&_nc_gid=8a15b1d835e846908c221d845fb5d926&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjg1NTI3ODYwNzIxMjk2ODAwNQ%3D%3D.3-ccb7-5&oh=00_AYC8MEyRPTlhfVEPDm1tyz_pH17vL5CKjdMSD-5rVZrafg&oe=679C779F&_nc_sid=10d13b",
        "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.29350-15/286398368_601766357654077_7367169484987019528_n.webp?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=473cFnW6_a8Q7kNvgFcZNKf&_nc_gid=8a15b1d835e846908c221d845fb5d926&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=Mjg1NTI3ODYwNzIxMjk2ODAwNQ%3D%3D.3-ccb7-5&oh=00_AYC8MEyRPTlhfVEPDm1tyz_pH17vL5CKjdMSD-5rVZrafg&oe=679C779F&_nc_sid=10d13b",
    ]

    const displayPosts = posts.length > 0 ? posts : defaultPosts

    return (
        <div className={cn("container max-w-5xl  mx-auto px-4 py-8", className)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {displayPosts.map((post, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105"
                        onClick={() => setSelectedImage(post)}
                    >
                        <Image
                            src={post || "/placeholder.svg"}
                            alt={`Instagram post ${index + 1}`}
                            width={1200}
                            height={1200}   
                            className="w-full h-auto object-cover"
                           
                        />
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-3xl p-0">
                    {selectedImage && (
                        <div className="relative w-full h-full">
                            <Image
                                src={selectedImage || "/placeholder.svg"}
                                alt="Selected Instagram post"
                                width={1200}
                                height={1200}
                                className="w-full h-auto object-contain"
                                sizes="100vw"
                            />
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

