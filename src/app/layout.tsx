import type { Metadata } from 'next';

import { Outfit, Syne } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Providers from '@/components/Providers';

const _displayFont = Syne({
    subsets: ['latin'],
    weight: ['400', '700', '800'],
});
const bodyFont = Outfit({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
    title: 'Joren Rothman',
    description:
        'Full Stack Developer based in the Netherlands, building polished web applications.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${bodyFont.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
