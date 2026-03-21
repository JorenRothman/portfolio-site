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
        description:
            'A CLI tool to secure WordPress via .htaccess configuration',
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

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set('.project-title', { opacity: 1, x: 0 });
                gsap.set('.project-item', {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    rotation: 0,
                });
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
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="c-container py-32">
            <div className="mb-16 flex items-end gap-6">
                <div className="relative">
                    <h2 className="project-title font-display xs:text-6xl text-4xl font-black leading-none tracking-tighter will-change-transform sm:text-8xl md:text-9xl">
                        Projects
                    </h2>
                    <div className="absolute -bottom-4 right-0 h-2 w-full -rotate-1 bg-[var(--accent)]"></div>
                </div>
                <div className="mb-4 hidden h-px flex-1 bg-current opacity-20 sm:block"></div>
                <span className="hidden pb-2 text-sm font-bold tracking-widest text-[var(--accent)] lg:inline">
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
                            className="brutal-border border-3 brutal-shadow-hover block cursor-pointer px-6 py-6 transition-all duration-200 hover:bg-[var(--surface-light)] dark:hover:bg-[var(--surface-dark)]"
                        >
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="flex flex-1 items-start gap-6">
                                    <span className="project-num font-display text-4xl font-black leading-none text-[var(--accent)] opacity-30 transition-opacity duration-300 group-hover:opacity-100 md:text-5xl">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="font-display mb-2 text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] md:text-4xl">
                                            {project.title}
                                        </h3>
                                        <p className="max-w-2xl text-base opacity-60 md:text-lg">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between gap-4 lg:ml-8 lg:justify-end">
                                    <span className="text-sm font-bold tracking-wider opacity-40 transition-opacity duration-300 group-hover:opacity-100">
                                        {project.date}
                                    </span>
                                    <div className="flex items-center gap-3">
                                        {project.link && (
                                            <span className="brutal-border-accent brutal-shadow-hover px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-dark)]">
                                                Visit
                                            </span>
                                        )}
                                        {project.github && (
                                            <span className="brutal-border flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wider opacity-60 transition-all duration-200 group-hover:opacity-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
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
                                                <span className="max-sm:hidden">
                                                    Code
                                                </span>
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
