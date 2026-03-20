'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Header() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set('.header-line', { opacity: 1 });
            return;
        }

        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

        tl.from('.header-line', {
            y: 80,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
        });
    }, { scope: containerRef });

    return (
        <header
            ref={containerRef}
            className="min-h-[85vh] flex flex-col justify-center c-container py-32"
        >
            <div className="relative">
                <p className="header-line text-lg font-medium tracking-[0.2em] uppercase mb-6 text-[var(--accent)]">
                    Full Stack Developer
                </p>

                <h1 className="header-line font-display text-[clamp(1.5rem,14vw,9rem)] font-extrabold leading-[0.9] tracking-tight mb-6 -ml-1">
                    <span className="block">Joren</span>
                    <span className="block text-[var(--accent)]">Rothman</span>
                </h1>

                <div className="header-line max-w-xl">
                    <p className="text-xl sm:text-2xl leading-relaxed opacity-80 text-balance">
                        <span className="font-medium text-[var(--accent)]">Building</span>{' '}
                        the web, one{' '}
                        <span className="font-medium text-[var(--accent)]">feature</span>{' '}
                        at a time.
                    </p>
                </div>

                <div className="header-line mt-12 flex items-center gap-4">
                    <div className="h-[1px] w-16 bg-[var(--accent)]"></div>
                    <span className="text-sm tracking-widest uppercase opacity-60">
                        From the Netherlands
                    </span>
                </div>
            </div>
        </header>
    );
}
