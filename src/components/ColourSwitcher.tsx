'use client';

import { useTheme } from 'next-themes';

function Sun() {
    return (
        <svg
            height={24}
            width={24}
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                fill="#fff"
                stroke="#fff"
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeWidth="2"
            >
                <line fill="none" x1="1" x2="3" y1="16" y2="16" />
                <line fill="none" x1="5.4" x2="6.8" y1="5.4" y2="6.8" />
                <line fill="none" x1="16" x2="16" y1="1" y2="3" />
                <line fill="none" x1="26.6" x2="25.2" y1="5.4" y2="6.8" />
                <line fill="none" x1="31" x2="29" y1="16" y2="16" />
                <line fill="none" x1="26.6" x2="25.2" y1="26.6" y2="25.2" />
                <line fill="none" x1="16" x2="16" y1="31" y2="29" />
                <line fill="none" x1="5.4" x2="6.8" y1="26.6" y2="25.2" />
                <circle cx="16" cy="16" fill="none" r="8" stroke="#fff" />
            </g>
        </svg>
    );
}

function Moon() {
    return (
        <svg
            height={24}
            width={24}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="#000">
                <path
                    d="M6,0C2.5,0.9,0,4.1,0,7.9C0,12.4,3.6,16,8.1,16c3.8,0,6.9-2.5,7.9-6C9.9,11.7,4.3,6.1,6,0z"
                    fill="#000"
                />
            </g>
        </svg>
    );
}

export default function ColourSwitcher() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };

    const isDark = theme === 'dark';

    return (
        <button
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            onClick={toggleTheme}
            className="w-6 h-6 relative"
        >
            {isDark ? <Sun /> : <Moon />}
        </button>
    );
}
