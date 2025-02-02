"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import "@theme-toggles/react/css/InnerMoon.css";
import { InnerMoon } from "@theme-toggles/react";

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isToggled, setToggle] = React.useState(theme === "dark");
    const [showGif, setShowGif] = React.useState(false);
    const [gifPosition, setGifPosition] = React.useState({ top: 0, left: 0 });

    const handleToggle = (toggled: React.SetStateAction<boolean>) => {
        const newTheme = toggled ? "dark" : "light";

        // Show GIF only when switching from dark to light
        if (theme === "dark" && newTheme === "light") {
            // Generate random position for the GIF
            const randomTop = Math.random() * (window.innerHeight - 200); // Subtract GIF height to keep it within view
            const randomLeft = Math.random() * (window.innerWidth - 200); // Subtract GIF width to keep it within view
            setGifPosition({ top: randomTop, left: randomLeft });
            setShowGif(true); // Show the GIF
        }

        setToggle(toggled);
        setTheme(newTheme);

  
        setTimeout(() => {
            setShowGif(false);
        }, 1400);
    };

    return (
        <>
            <InnerMoon
                toggled={isToggled}
                toggle={handleToggle}
                duration={700}
                aria-label="Toggle theme"
                idPrefix="theme-toggle"
                className="text-gray-700 dark:text-gray-300 text-3xl" // Increase the size using text-3xl
                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}
            />

            {/* GIF Overlay */}
            {showGif && (
                <div
                    style={{
                        position: "fixed",
                        top: gifPosition.top,
                        left: gifPosition.left,
                        zIndex: 1000, 
                    }}
                >
                    <img
                        src="/meme.gif" // Replace with the path to your GIF
                        alt="Theme Transition"
                        height={200}
                        width={200}
                    />
                </div>
            )}
        </>
    );
}