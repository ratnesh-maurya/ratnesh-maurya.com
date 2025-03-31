'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface PageTransitionProps {
    children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {

    const [isAnimating, setIsAnimating] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);
    const [prevPath, setPrevPath] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        if (pathname !== prevPath && !isAnimating) {
            setPrevPath(pathname);
            setIsAnimating(true);

            setTimeout(() => {
                setDisplayChildren(children);
            }, 200);

            setTimeout(() => {
                setIsAnimating(false);
            }, 400);
        } else if (pathname !== prevPath) {
            setDisplayChildren(children);
            setPrevPath(pathname);
        }
    }, [children, pathname, prevPath, isAnimating]);

    return (
        <div className="page-transition-container">
            <div className={`page-content ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                {displayChildren}
            </div>

            <style jsx>{`
                .page-transition-container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .page-content {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transform: translateY(0);
                    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
                    will-change: transform;
                }

                .slide-out {
                    transform: translateY(20px);
                }

                .slide-in {
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    .page-content {
                        transition: none;
                    }
                }
            `}</style>
        </div>

    );
} 