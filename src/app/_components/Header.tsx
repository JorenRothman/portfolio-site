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
                gsap.set('.header-line', { opacity: 1 });
                gsap.set('.header-deco', { opacity: 1 });
                return;
            }

            const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

            tl.from('.header-tag', {
                x: -50,
                opacity: 0,
                duration: 0.8,
            })
                .from(
                    '.header-name',
                    {
                        y: 150,
                        opacity: 0,
                        duration: 1,
                        ease: 'expo.out',
                    },
                    '-=0.4'
                )
                .from(
                    '.header-tag-line',
                    {
                        scaleX: 0,
                        duration: 0.6,
                        transformOrigin: 'left',
                    },
                    '-=0.6'
                )
                .from(
                    '.header-desc',
                    {
                        y: 40,
                        opacity: 0,
                        duration: 0.8,
                    },
                    '-=0.4'
                )
                .from(
                    '.header-location',
                    {
                        x: -30,
                        opacity: 0,
                        duration: 0.6,
                    },
                    '-=0.4'
                )
                .from(
                    '.header-deco',
                    {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        stagger: 0.1,
                    },
                    '-=0.8'
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

            gsap.to('.header-deco-line', {
                rotation: 15,
                duration: 0.3,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: '50% top',
                    scrub: 1,
                },
            });

            gsap.to('.geo-square', {
                rotation: 180,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2,
                },
            });

            gsap.to('.geo-triangle', {
                rotation: -90,
                y: -50,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 3,
                },
            });

            gsap.to('.geo-circle', {
                scale: 1.5,
                rotation: 90,
                duration: 1,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 2.5,
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
            <div className="geo-bg pointer-events-none absolute inset-0 overflow-hidden">
                <div className="geo-square border-3 absolute right-[5%] top-[10%] h-20 w-20 rotate-12 border-[var(--accent)] opacity-20 will-change-transform"></div>
                <div className="geo-square border-3 absolute left-[8%] top-[30%] h-32 w-32 -rotate-6 border-[var(--accent)] opacity-15 will-change-transform"></div>
                <div
                    className="geo-triangle absolute right-[15%] top-[60%] h-0 w-0 border-b-[70px] border-l-[40px] border-r-[40px] border-b-[var(--accent)] border-l-transparent border-r-transparent opacity-15 will-change-transform"
                    style={{
                        borderLeftWidth: '40px',
                        borderRightWidth: '40px',
                        borderBottomWidth: '70px',
                    }}
                ></div>
                <div className="geo-circle border-3 absolute bottom-[20%] left-[60%] h-40 w-40 rounded-full border-[var(--accent)] opacity-15 will-change-transform"></div>
                <div className="geo-square absolute right-[8%] top-[80%] h-16 w-16 rotate-45 bg-[var(--accent)] opacity-10 will-change-transform"></div>
                <div
                    className="geo-triangle absolute left-[2%] top-[45%] h-0 w-0 border-b-[43px] border-l-[25px] border-r-[25px] border-b-[var(--accent)] border-l-transparent border-r-transparent opacity-20 will-change-transform"
                    style={{
                        borderLeftWidth: '25px',
                        borderRightWidth: '25px',
                        borderBottomWidth: '43px',
                    }}
                ></div>
            </div>

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-hidden">
                <div className="header-deco header-deco-line absolute bottom-32 left-[3%] h-[3px] w-24 bg-[var(--accent)]"></div>
                <div className="header-deco absolute bottom-40 left-[3%] h-24 w-[3px] bg-[var(--accent)]"></div>
            </div>

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
