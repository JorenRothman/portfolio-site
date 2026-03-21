'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set(containerRef.current, { display: 'none' });
                return;
            }

            const tl = gsap.timeline();

            tl.from('.intro-name', {
                y: 150,
                skewX: 10,
                duration: 0.6,
                ease: 'power4.out',
            })
                .to('.intro-name', {
                    skewX: 0,
                    duration: 0.2,
                    ease: 'power4.in',
                })
                .from(
                    '.intro-line',
                    {
                        scaleX: 0,
                        duration: 0.3,
                        ease: 'power4.out',
                    },
                    '-=0.3'
                )
                .to(containerRef.current, {
                    x: '-100%',
                    duration: 0.5,
                    ease: 'power4.inOut',
                    delay: 0.3,
                })
                .set(containerRef.current, { display: 'none' });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]"
        >
            <div className="relative">
                <h1 className="intro-name font-display text-[clamp(2.5rem,15vw,12rem)] font-black leading-none tracking-tighter text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    JR
                </h1>
                <div className="intro-line absolute -bottom-4 left-0 h-[6px] w-full bg-[var(--accent)]"></div>
            </div>
        </div>
    );
}
