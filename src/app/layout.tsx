import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const primaryFont = Inter({ subsets: ['latin'] });

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
        <html lang="en">
            <body className={primaryFont.className}>{children}</body>
        </html>
    );
}
