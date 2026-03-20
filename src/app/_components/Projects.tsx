'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

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
            gsap.set('.project-item', { opacity: 1 });
            return;
        }

        gsap.from('.project-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 60,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'expo.out',
        });
    }, { scope: containerRef });

	return (
		<div ref={containerRef} className="c-container py-24">
			<div className="flex items-center gap-6 mb-16">
				<h2 className="project-item font-display text-5xl sm:text-7xl font-bold tracking-tight">
					Projects
				</h2>
				<div className="h-[1px] flex-1 bg-[var(--accent)] opacity-40"></div>
			</div>

			<div className="space-y-6">
				{projects.map((project) => (
					<article
						key={project.title}
						className="project-item group relative"
					>
						<a
							href={project.link || project.github || '#'}
							target="_blank"
							rel="noreferrer"
							className="block p-8 -mx-8 rounded-2xl transition-all duration-300 hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)] cursor-pointer"
						>
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
								<div className="flex-1">
									<div className="flex items-center gap-4 mb-3">
										<h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
											{project.title}
										</h3>
										<span className="text-sm opacity-40 font-medium">
											{project.date}
										</span>
									</div>
									<p className="text-lg opacity-70 max-w-2xl">
										{project.description}
									</p>
								</div>

								<div className="flex items-center gap-3 shrink-0">
									{project.link && (
										<span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent)] text-white rounded-full text-sm font-medium opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-4 h-4"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												aria-label="External link"
											>
												<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
												<polyline points="15,3 21,3 21,9" />
												<line x1="10" y1="14" x2="21" y2="3" />
											</svg>
											<span className="max-sm:hidden">Visit</span>
										</span>
									)}
									{project.github && (
										<span className="inline-flex items-center gap-2 px-4 py-2 border border-current rounded-full text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-4 h-4"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												aria-label="View source code"
											>
												<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
											</svg>
											<span className="max-sm:hidden">Code</span>
										</span>
									)}
								</div>
							</div>
						</a>
					</article>
				))}
			</div>
		</div>
	);
}
