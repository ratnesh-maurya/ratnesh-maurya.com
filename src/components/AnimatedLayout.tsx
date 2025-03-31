'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface AnimatedLayoutProps {
    children: React.ReactNode;
}

export default function AnimatedLayout({ children }: AnimatedLayoutProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{
                    opacity: 0,
                    scale: 0.95,
                    y: 20,
                    rotateX: 10
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotateX: 0
                }}
                exit={{
                    opacity: 0,
                    scale: 0.95,
                    y: -20,
                    rotateX: -10
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.8,
                    duration: 0.6
                }}
                style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px"
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
} 