"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

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

      

            // After animation starts, update the displayed content
            setTimeout(() => {
                setDisplayChildren(children);
            }, 200); // Reduced to make the transition feel faster

            // Reset animation state after full animation completes (600ms)
            setTimeout(() => {
                setIsAnimating(false);
            }, 400);
        } else if (pathname !== prevPath) {
            // If path changed but we're already animating, just update content
            setDisplayChildren(children);
            setPrevPath(pathname);
        }
    }, [children, pathname, prevPath, isAnimating, displayChildren]);

    return (
        <div className="page-transition-container">
            <div className={`page-content ${isAnimating ? 'sliding' : ''}`}>
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
                    transform-origin: top center;
                    transition: transform 600ms cubic-bezier(0.645, 0.045, 0.355, 1);
                }

                .sliding {
                    transform: translateY(-100%) scale(0.95);
                    opacity: 0;
                }
            `}</style>
        </div>
    );
}
