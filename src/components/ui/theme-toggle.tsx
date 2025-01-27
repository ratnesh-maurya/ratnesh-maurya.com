"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import "@theme-toggles/react/css/Classic.css"
import { Classic } from "@theme-toggles/react"

export function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [isToggled, setToggle] = React.useState(theme === "light");

    const handleToggle = (toggled: React.SetStateAction<boolean>) => {
        setToggle(toggled);
        setTheme(toggled ? "dark" : "light");
    };

    return (
        <Classic
            toggled={isToggled}
            toggle={handleToggle}
            duration={700}
            aria-label="Toggle theme"
            idPrefix="theme-toggle"
            className="text-gray-700 dark:text-gray-300 text-3xl" // Increase the size using text-3xl
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
    );
}
