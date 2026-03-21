'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Header() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
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
        .from('.header-name', {
            y: 150,
            opacity: 0,
            duration: 1,
            ease: 'expo.out',
        }, '-=0.4')
        .from('.header-tag-line', {
            scaleX: 0,
            duration: 0.6,
            transformOrigin: 'left',
        }, '-=0.6')
        .from('.header-desc', {
            y: 40,
            opacity: 0,
            duration: 0.8,
        }, '-=0.4')
        .from('.header-location', {
            x: -30,
            opacity: 0,
            duration: 0.6,
        }, '-=0.4')
        .from('.header-deco', {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
        }, '-=0.8')
        .from('.header-index', {
            opacity: 0,
            duration: 0.4,
        }, '-=0.4');
    }, { scope: containerRef });

    return (
        <header
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="header-deco absolute bottom-32 left-[3%] w-24 h-1 bg-[var(--accent)]"></div>
                <div className="header-deco absolute bottom-40 left-[3%] w-1 h-24 bg-[var(--accent)]"></div>
            </div>

            <div className="c-container py-32 md:py-40 flex flex-col min-h-screen">
                <div className="flex-1 flex flex-col justify-center">
                    <div className="relative">
                        <p className="header-tag text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-8 text-[var(--accent)]">
                            Full Stack Developer
                        </p>

                        <div className="relative">
                            <h1 className="header-name font-display font-black leading-[0.85] tracking-tighter">
                                <span className="block xl:text-[clamp(3.5rem,15vw,11rem)] text-[clamp(2rem,11vw,11rem)]">Joren</span>
                                <span className="block xl:text-[clamp(3.5rem,15vw,11rem)] text-[clamp(2rem,11vw,11rem)] text-[var(--accent)] relative">
                                    Rothman
                                    <span className="absolute -bottom-2 left-0 w-full h-3 md:h-4 bg-[var(--accent)] opacity-20 -rotate-1"></span>
                                </span>
                            </h1>
                        </div>

                        <div className="header-tag-line w-24 h-[3px] bg-[var(--accent)] mt-8 md:mt-12 mb-8"></div>

                        <div className="header-desc max-w-xl">
                            <p className="text-xl sm:text-2xl md:text-3xl leading-[1.3] font-medium">
                                <span className="text-[var(--accent)]">Building</span>{' '}
                                the web, one{' '}
                                <span className="text-[var(--accent)]">feature</span>{' '}
                                at a time.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="header-location flex items-center gap-4 pt-12 md:pt-16">
                    <div className="w-12 h-12 brutal-border-accent flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                    </div>
                    <span className="text-base md:text-lg tracking-wider uppercase font-medium">
                        The Netherlands
                    </span>
                </div>
            </div>
        </header>
    );
}
