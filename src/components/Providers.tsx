'use client';

import { ThemeProvider } from 'next-themes';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Providers({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider defaultTheme="light" attribute="class" enableSystem={false}>
			{children}
		</ThemeProvider>
	);
}
