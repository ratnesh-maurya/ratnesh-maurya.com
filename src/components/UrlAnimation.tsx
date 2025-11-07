'use client';

import { useEffect } from 'react';

interface UrlAnimationProps {
    text?: string;
    speed?: number; // milliseconds between updates
    maxWidth?: number; // maximum number of characters in the URL hash
    paddingChar?: string; // character to use for spacing (visible in URL)
    cyclic?: boolean; // if true, moves back and forth (cyclic); if false, loops from start
}

/**
 * Component that animates text in the browser URL hash by moving it in cyclic order
 * Inspired by https://github.com/epidemian/snake
 */
export default function UrlAnimation({
    text = 'hello',
    speed = 150,
    maxWidth = 50,
    paddingChar = '.', // Use dots which are visible and don't get encoded
    cyclic = true // Default to cyclic (back and forth) motion
}: UrlAnimationProps) {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        let position = 0;
        let direction = 1; // 1 for moving right, -1 for moving left
        let animationId: NodeJS.Timeout;
        const originalHash = window.location.hash;
        const baseUrl = window.location.pathname + window.location.search;

        const animate = () => {
            const totalDots = maxWidth - text.length;

            // Clamp position to valid range (0 to totalDots)
            position = Math.max(0, Math.min(position, totalDots));

            if (cyclic) {
                // Cyclic: bounce back and forth
                // Check if we need to reverse direction at boundaries
                if (position >= totalDots) {
                    direction = -1;
                    position = totalDots;
                } else if (position <= 0) {
                    direction = 1;
                    position = 0;
                }
            } else {
                // Linear: loop from start
                if (position > totalDots) {
                    position = 0;
                }
            }

            // Calculate dots on left and right
            // Position determines how many dots are on the left
            const dotsOnLeft = position;
            const dotsOnRight = totalDots - dotsOnLeft;

            // Create the animated hash with dots on both sides
            const leftDots = paddingChar.repeat(dotsOnLeft);
            const rightDots = paddingChar.repeat(dotsOnRight);
            const animatedHash = `#${leftDots}${text}${rightDots}`;

            // Update the URL hash without reloading the page
            try {
                // Use replaceState to avoid cluttering browser history
                // Keep pathname and search unchanged, only modify hash
                window.history.replaceState(
                    null,
                    '',
                    baseUrl + animatedHash
                );
            } catch (e) {
                // Some browsers may restrict URL updates
                console.warn('Could not update URL:', e);
            }

            // Move position based on direction
            position += direction;

            animationId = setTimeout(animate, speed);
        };

        // Start animation after a short delay
        const startDelay = setTimeout(animate, 100);

        // Cleanup on unmount
        return () => {
            clearTimeout(startDelay);
            if (animationId) {
                clearTimeout(animationId);
            }
            // Restore original URL hash (keep pathname and search)
            try {
                window.history.replaceState(
                    null,
                    '',
                    baseUrl + originalHash
                );
            } catch (e) {
                // Ignore errors during cleanup
                console.warn('Could not restore original URL:', e);
            }
        };
    }, [text, speed, maxWidth, paddingChar, cyclic]);

    // This component doesn't render anything visible
    return null;
}
