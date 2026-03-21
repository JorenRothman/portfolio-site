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
                    transformOrigin: 'bottom',
                    duration: 0.4,
                    ease: 'power4.out',
                    stagger: 0.02,
                    delay: 0.5,
                })
                .to(['.intro-first', '.intro-last'], {
                    opacity: 0,
                    duration: 0.15,
                })
                .to('.intro-bar', {
                    y: '-100%',
                    duration: 0.4,
                    ease: 'power4.in',
                })
                .set(containerRef.current, { display: 'none' });
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden p-8"
        >
            <div className="intro-bg absolute inset-0 bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]"></div>
            <h1 className="intro-first font-display absolute right-8 top-[25%] z-10 font-black leading-none tracking-tighter">
                <span className="text-right text-[clamp(3rem,20vw,16rem)] text-[var(--text-light)] dark:text-[var(--text-dark)]">
                    JOREN
                </span>
            </h1>
            <h1 className="intro-last font-display absolute left-8 bottom-[25%] z-10 font-black leading-none tracking-tighter">
                <span className="text-[clamp(3rem,20vw,16rem)] text-[var(--accent)]">
                    ROTHMAN
                </span>
            </h1>
            <div className="absolute inset-0 z-20 flex flex-col">
                <div className="intro-bar flex-1 bg-[var(--accent)]"></div>
            </div>
        </div>
    );
}
