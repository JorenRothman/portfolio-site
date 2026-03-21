'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

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
        }, '-=0.8');

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
                trigger:containerRef.current,
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
                trigger:containerRef.current,
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
                trigger:containerRef.current,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2.5,
            },
        });
    }, { scope: containerRef });

    return (
        <header
            ref={containerRef}
            className="min-h-screen relative overflow-hidden"
        >
            <div className="geo-bg absolute inset-0 pointer-events-none overflow-hidden">
                <div className="geo-square absolute top-[10%] right-[5%] w-20 h-20 border-3 border-[var(--accent)] opacity-20 rotate-12 will-change-transform"></div>
                <div className="geo-square absolute top-[30%] left-[8%] w-32 h-32 border-3 border-[var(--accent)] opacity-15 -rotate-6 will-change-transform"></div>
                <div className="geo-triangle absolute top-[60%] right-[15%] w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-[var(--accent)] opacity-15 will-change-transform" style={{borderLeftWidth: '40px', borderRightWidth: '40px', borderBottomWidth: '70px'}}></div>
                <div className="geo-circle absolute bottom-[20%] left-[60%] w-40 h-40 rounded-full border-3 border-[var(--accent)] opacity-15 will-change-transform"></div>
                <div className="geo-square absolute top-[80%] right-[8%] w-16 h-16 bg-[var(--accent)] opacity-10 rotate-45 will-change-transform"></div>
                <div className="geo-triangle absolute top-[45%] left-[2%] w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-[var(--accent)] opacity-20 will-change-transform" style={{borderLeftWidth: '25px', borderRightWidth: '25px', borderBottomWidth: '43px'}}></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
                <div className="header-deco header-deco-line absolute bottom-32 left-[3%] w-24 h-[3px] bg-[var(--accent)]"></div>
                <div className="header-deco absolute bottom-40 left-[3%] w-[3px] h-24 bg-[var(--accent)]"></div>
            </div>

            <div className="c-container py-32 md:py-40 flex flex-col min-h-screen">
                <div className="flex-1 flex flex-col justify-center">
                    <div className="relative">
                        <p className="header-tag text-sm font-bold tracking-[0.3em] uppercase mb-4 md:mb-8 text-[var(--accent)]">
                            Full Stack Developer
                        </p>

                        <div className="relative">
                            <h1 className="header-name font-display font-black leading-[0.85] tracking-tighter will-change-transform">
                                <span className="block xl:text-[clamp(3.5rem,15vw,11rem)] text-[clamp(2rem,11vw,11rem)]">Joren</span>
                                <span className="block xl:text-[clamp(3.5rem,15vw,11rem)] text-[clamp(2rem,11vw,11rem)] text-[var(--accent)] relative">
                                    Rothman
                                    <span className="absolute -bottom-2 left-0 w-full h-3 md:h-4 bg-[var(--accent)] opacity-20 -rotate-1"></span>
                                </span>
                            </h1>
                        </div>

                        <div className="header-tag-line w-24 h-[3px] bg-[var(--accent)] mt-8 md:mt-12 mb-8 origin-left"></div>

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

                <div className="header-location flex items-center gap-4 pt-12 md:pt-16 will-change-transform">
                    <div className="w-14 h-14 brutal-border-accent brutal-shadow flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
