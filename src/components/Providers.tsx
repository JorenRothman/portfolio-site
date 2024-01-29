'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider
            defaultTheme="light"
            attribute="class"
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    );
}
