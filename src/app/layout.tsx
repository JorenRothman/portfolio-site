import type { Metadata } from 'next';

import { Karla } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Providers from '@/components/Providers';
import SiteHeader from '@/components/SiteHeader';

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
                <Providers>
                    <SiteHeader />
                    {children}
                </Providers>
                <Script
                    src="https://stats.jorenrothman.nl/script.js"
                    data-website-id="01f84d9c-3a08-4b97-9402-0a9c25d4294c"
                ></Script>
            </body>
        </html>
    );
}
