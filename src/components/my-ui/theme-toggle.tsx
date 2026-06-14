"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../theme-provider";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Évite un mismatch d'hydratation : on n'affiche l'icône qu'après le montage.
    useEffect(() => setMounted(true), []);

    const isDark = theme !== "light";

    return (
        <button
            type="button"
            aria-label="Toggle light / dark mode"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent"
        >
            {mounted && isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    );
}

export default ThemeToggle;
