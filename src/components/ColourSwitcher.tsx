'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function Sun() {
    return (
        <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    );
}

function Moon() {
    return (
        <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    );
}

export default function ColourSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    useEffect(() => setMounted(true), []);

    const isDark = theme === 'dark';

    if (!mounted) return null;

    return (
        <button
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
            className="brutal-border flex min-h-[44px] min-w-[44px] items-center justify-center p-3 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg-dark)] hover:shadow-[4px_4px_0_var(--accent),inset_4px_4px_0_white]"
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}
