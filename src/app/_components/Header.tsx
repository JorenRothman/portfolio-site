'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set('.header-tag', { opacity: 1, x: 0 });
                gsap.set('.header-name', { opacity: 1, y: 0, skewX: 0 });
                gsap.set('.header-tag-line', { scaleX: 1 });
                gsap.set('.header-desc', { opacity: 1, y: 0 });
                gsap.set('.header-location', { opacity: 1, x: 0 });
                return;
            }

            const tl = gsap.timeline({
                defaults: { ease: 'power4.out' },
                delay: 1.9,
            });

            tl.from(
                '.header-tag',
                {
                    x: -80,
                    opacity: 0,
                    skewX: -10,
                    duration: 0.4,
                },
                '-=0.2'
            )
                .from(
                    '.header-name',
                    {
                        y: 200,
                        skewX: 8,
                        opacity: 0,
                        duration: 0.5,
                    },
                    '-=0.25'
                )
                .to('.header-name', {
                    skewX: 0,
                    duration: 0.15,
                    ease: 'power4.in',
                })
                .from(
                    '.header-tag-line',
                    {
                        scaleX: 0,
                        duration: 0.25,
                        transformOrigin: 'left',
                    },
                    '-=0.3'
                )
                .from(
                    '.header-desc',
                    {
                        y: 60,
                        opacity: 0,
                        duration: 0.35,
                    },
                    '-=0.2'
                )
                .from(
                    '.header-location',
                    {
                        x: -50,
                        opacity: 0,
                        duration: 0.3,
                    },
                    '-=0.2'
                );

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;
                    gsap.set('.header-name', {
                        y: progress * 100,
                        rotation: progress * 2,
                        scale: 1 - progress * 0.1,
                    });
                    gsap.set('.header-tag', {
                        y: progress * 50,
                        opacity: 1 - progress * 1.5,
                    });
                    gsap.set('.header-location', {
                        y: progress * 80,
                        opacity: 1 - progress * 2,
                    });
                },
            });
        },
        { scope: containerRef }
    );

    return (
        <header
            ref={containerRef}
            className="relative min-h-screen overflow-hidden"
        >
            <div className="c-container flex min-h-screen flex-col py-32 md:py-40">
                <div className="flex flex-1 flex-col justify-center">
                    <div className="relative">
                        <p className="header-tag mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] md:mb-8">
                            Full Stack Developer
                        </p>

                        <div className="relative">
                            <h1 className="header-name font-display font-black leading-[0.85] tracking-tighter will-change-transform">
                                <span className="block text-[clamp(2rem,11vw,11rem)] xl:text-[clamp(3.5rem,15vw,11rem)]">
                                    Joren
                                </span>
                                <span className="relative block text-[clamp(2rem,11vw,11rem)] text-[var(--accent)] xl:text-[clamp(3.5rem,15vw,11rem)]">
                                    Rothman
                                    <span className="absolute -bottom-2 left-0 h-3 w-full -rotate-1 bg-[var(--accent)] opacity-20 md:h-4"></span>
                                </span>
                            </h1>
                        </div>

                        <div className="header-tag-line mb-8 mt-8 h-[3px] w-24 origin-left bg-[var(--accent)] md:mt-12"></div>

                        <div className="header-desc max-w-xl">
                            <p className="text-xl font-medium leading-[1.3] sm:text-2xl md:text-3xl">
                                <span className="text-[var(--accent)]">
                                    Building
                                </span>{' '}
                                the web, one{' '}
                                <span className="text-[var(--accent)]">
                                    feature
                                </span>{' '}
                                at a time.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="header-location flex items-center gap-4 pt-12 will-change-transform md:pt-16">
                    <div className="brutal-border-accent brutal-shadow flex h-14 w-14 items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </div>
                    <span className="text-base font-medium uppercase tracking-wider md:text-lg">
                        The Netherlands
                    </span>
                </div>
            </div>
        </header>
    );
}
