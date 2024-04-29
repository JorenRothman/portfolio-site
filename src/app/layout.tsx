import type { Metadata } from 'next';

import { Karla } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Script from 'next/script';

const primaryFont = Karla({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Joren Rothman',
    description: 'A personal website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={primaryFont.className}>
                <Providers>{children}</Providers>

                <Script
                    defer
                    src="https://stats.jorenrothman.nl/script.js"
                    data-website-id="6eff5fe2-5adb-4e68-aa2d-45081f2297a5"
                ></Script>
            </body>
        </html>
    );
}
