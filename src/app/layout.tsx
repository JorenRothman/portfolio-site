import type { Metadata } from 'next';

import { Karla } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Providers from '@/components/Providers';

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
                    src="https://stats.jorenrothman.nl/script.js"
                    data-website-id="48c1d772-f539-47d5-8ec5-d750d9bb77d9"
                ></Script>
            </body>
        </html>
    );
}
