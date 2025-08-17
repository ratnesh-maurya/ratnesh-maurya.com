"use client";

import { useState, useEffect } from "react";
import { Eye, Loader2 } from "lucide-react";
import { CardItem } from "./aceternity-card";

interface ProjectPreviewProps {
    url: string;
}

export function ProjectPreview({ url }: ProjectPreviewProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading and generate preview
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [url]);

    return (
        <CardItem translateZ="60" className="mb-6">
            <div className="relative w-full h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-700/50">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center gap-2">
                            <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                            <span className="text-sm text-gray-500 dark:text-gray-400">Loading preview...</span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Mock Website Preview */}
                        <div className="p-4 h-full flex flex-col">
                            {/* Mock Browser Bar */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded text-xs px-2 py-1 text-gray-600 dark:text-gray-400">
                                    {url}
                                </div>
                            </div>

                            {/* Mock Content */}
                            <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-3 space-y-2">
                                <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded w-3/4"></div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                                <div className="grid grid-cols-3 gap-2 mt-3">
                                    <div className="h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded"></div>
                                    <div className="h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded"></div>
                                    <div className="h-12 bg-gradient-to-br from-blue-100 to-purple-200 dark:from-blue-900 dark:to-purple-800 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-blue-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="bg-white/90 dark:bg-black/90 rounded-full p-3 backdrop-blur-sm">
                                <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </>
                )}

                {/* Live Indicator */}
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/90 dark:bg-black/90 rounded-full px-2 py-1 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Live</span>
                </div>
            </div>
        </CardItem>
    );
}
