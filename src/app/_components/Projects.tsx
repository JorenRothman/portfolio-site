'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

type Project = {
	title: string;
	description: string;
	date: string;
	link?: string;
	github?: string;
};

const projects: Project[] = [
	{
		title: 'Crucible',
		description:
			'A starter kit built with Next.js 16, featuring authentication, database integration, and a clean UI',
		date: '2026',
		github: 'https://github.com/JorenRothman/crucible',
	},
	{
		title: 'Lunchrun',
		description:
			'A real-time app for tracking lunch runs, built with websockets',
		date: '2024',
		link: 'https://lunchrun.jorenrothman.nl',
		github: 'https://github.com/jorenrothman/lunchrun-clone-ws',
	},
	{
		title: 'URL Shortener',
		description:
			'A URL shortener with Next.js, Drizzle ORM, and Lucia auth',
		date: '2024',
		link: 'https://short.jorenrothman.nl',
		github: 'https://github.com/JorenRothman/short-url',
	},
	{
		title: 'ACF Builder',
		description: 'A PHP wrapper for Advanced Custom Fields (WordPress)',
		date: '2023',
		link: 'https://jorenrothman.github.io/ACF-Builder',
		github: 'https://github.com/JorenRothman/ACF-Builder',
	},
	{
		title: 'Secure WordPress',
		description: 'A CLI tool to secure WordPress via .htaccess configuration',
		date: '2023',
		github: 'https://github.com/JorenRothman/secure-wordpress',
	},
	{
		title: 'Timebandit',
		description: 'A CLI tool for tracking time spent on projects',
		date: '2023',
		github: 'https://github.com/JorenRothman/timebandit',
	},
];

export default function Projects() {
	const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set('.project-title', { opacity: 1, x: 0 });
            gsap.set('.project-item', { opacity: 1, y: 0, x: 0, rotation: 0 });
            return;
        }

        gsap.from('.project-title', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            x: -100,
            rotation: -2,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
        });

        gsap.from('.project-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
            },
            x: -150,
            rotation: -3,
            opacity: 0,
            scale: 0.95,
            duration: 0.8,
            ease: 'expo.out',
            stagger: {
                amount: 0.6,
                from: 'start',
            },
        });

        gsap.to('.project-item', {
            y: -5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 20%',
                end: 'bottom top',
                scrub: 1,
            },
        });
    }, { scope: containerRef });

	return (
		<div ref={containerRef} className="c-container py-32">
			<div className="flex items-end gap-6 mb-16">
				<div className="relative">
					<h2 className="project-title font-display text-4xl xs:text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none will-change-transform">
						Projects
					</h2>
					<div className="absolute -bottom-4 right-0 w-full h-2 bg-[var(--accent)] -rotate-1"></div>
				</div>
				<div className="flex-1 h-px bg-current opacity-20 mb-4 hidden sm:block"></div>
				<span className="text-sm hidden lg:inline font-bold tracking-widest text-[var(--accent)] pb-2">
					{projects.length} WORKS
				</span>
			</div>

			<div className="space-y-4">
				{projects.map((project, index) => (
					<article
						key={project.title}
						className="project-item group relative will-change-transform"
					>
						<a
							href={project.link || project.github || '#'}
							target="_blank"
							rel="noreferrer"
							className="block py-6 px-6 brutal-border border-3 brutal-shadow-hover transition-all duration-200 hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] cursor-pointer"
						>
							<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
								<div className="flex items-start gap-6 flex-1">
									<span className="project-num font-display text-4xl md:text-5xl font-black text-[var(--accent)] opacity-30 group-hover:opacity-100 transition-opacity duration-300 leading-none">
										{String(index + 1).padStart(2, '0')}
									</span>
									<div>
										<h3 className="font-display text-2xl md:text-4xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300 mb-2">
											{project.title}
										</h3>
										<p className="text-base md:text-lg opacity-60 max-w-2xl">
											{project.description}
										</p>
									</div>
								</div>

								<div className="flex items-center justify-between lg:justify-end gap-4 lg:ml-8">
									<span className="text-sm font-bold tracking-wider opacity-40 group-hover:opacity-100 transition-opacity duration-300">
										{project.date}
									</span>
									<div className="flex items-center gap-3">
										{project.link && (
											<span className="brutal-border-accent brutal-shadow-hover px-4 py-2 text-sm font-bold uppercase tracking-wider group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-dark)] transition-all duration-200">
												Visit
											</span>
										)}
										{project.github && (
											<span className="brutal-border px-4 py-2 text-sm font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-all duration-200 flex items-center gap-2">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="w-4 h-4"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													aria-hidden="true"
												>
													<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
												</svg>
												<span className="max-sm:hidden">Code</span>
											</span>
										)}
									</div>
								</div>
							</div>
						</a>
					</article>
				))}
			</div>
		</div>
	);
}
