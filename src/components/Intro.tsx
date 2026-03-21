'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Intro() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set(containerRef.current, { display: 'none' });
                return;
            }

            const tl = gsap.timeline();

            tl.from('.intro-first', {
                x: '-100%',
                duration: 0.4,
                ease: 'power4.out',
            })
                .from(
                    '.intro-last',
                    {
                        x: '100%',
                        duration: 0.4,
                        ease: 'power4.out',
                    },
                    '<'
                )
                .from('.intro-bar', {
                    scaleY: 0,
                    transformOrigin: 'top',
                    duration: 0.3,
                    ease: 'power4.out',
                    stagger: 0.05,
                })
                .to('.intro-bg', {
                    y: '-100%',
                    duration: 0.35,
                    ease: 'power4.in',
                    delay: 0.2,
                })
                .set(containerRef.current, { display: 'none' });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
            <div className="intro-bg absolute inset-0 flex items-center justify-center bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
                <div className="intro-bar absolute left-0 h-[12.5%] w-full bg-[var(--accent)]"></div>
            </div>
            <h1 className="font-display relative z-10 font-black leading-none tracking-tighter">
                <span className="intro-first block text-[clamp(2rem,15vw,14rem)] text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    JOREN
                </span>
                <span className="intro-last block text-[clamp(2rem,15vw,14rem)] text-[var(--accent)]">
                    ROTHMAN
                </span>
            </h1>
        </div>
    );
}
