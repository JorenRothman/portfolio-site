'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                gsap.set('.resume-item', { opacity: 1, x: 0, rotation: 0 });
                gsap.set('.resume-card', { opacity: 1, x: 0, rotation: 0 });
                gsap.set('.resume-exp-item', { opacity: 1, y: 0 });
                return;
            }

            gsap.from('.resume-title', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                x: -100,
                rotation: -3,
                opacity: 0,
                duration: 1,
                ease: 'expo.out',
            });

            gsap.from('.resume-card', {
                scrollTrigger: {
                    trigger: '.resume-card',
                    start: 'top 85%',
                },
                x: -80,
                rotation: -2,
                opacity: 0,
                duration: 0.9,
                ease: 'expo.out',
                stagger: 0.1,
            });

            gsap.from('.resume-exp-item', {
                scrollTrigger: {
                    trigger: '.resume-exp-item',
                    start: 'top 90%',
                },
                y: 60,
                opacity: 0,
                duration: 0.8,
                ease: 'expo.out',
                stagger: 0.15,
            });

            gsap.to('.resume-card', {
                y: -10,
                rotation: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 30%',
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
                    <h2 className="resume-title font-display xs:text-6xl text-4xl font-black leading-none tracking-tighter will-change-transform sm:text-8xl md:text-9xl">
                        Resume
                    </h2>
                    <div className="absolute -bottom-4 right-0 h-2 w-full -rotate-1 bg-[var(--accent)]"></div>
                </div>
                <div className="mb-4 hidden h-px flex-1 bg-current opacity-20 sm:block"></div>
            </div>

            <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
                <div className="space-y-12">
                    <div className="resume-card brutal-border-accent brutal-shadow p-6 will-change-transform">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                            Expertise
                        </h3>
                        <div className="space-y-8">
                            <SkillGroup
                                label="Languages"
                                items={['TypeScript', 'JavaScript', 'PHP']}
                            />
                            <SkillGroup
                                label="Frameworks"
                                items={[
                                    'Next.js',
                                    'React',
                                    'Express',
                                    'Adonis',
                                ]}
                            />
                            <SkillGroup
                                label="CMS"
                                items={['PayloadCMS', 'WordPress', 'Shopify']}
                            />
                            <SkillGroup
                                label="Tools"
                                items={['Node.js', 'Docker', 'DDEV']}
                            />
                        </div>
                    </div>

                    <div className="resume-card brutal-border p-4">
                        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                            Also worked with
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Python', 'Go', 'Vue', 'Bun'].map((item) => (
                                <span
                                    key={item}
                                    className="brutal-border px-3 py-2 text-sm font-bold"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-8 flex items-center gap-4">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                            Experience
                        </h3>
                        <div className="h-2 flex-1 bg-[var(--accent)]"></div>
                    </div>

                    <div className="space-y-4">
                        <ExperienceItem
                            company="Instance Studio"
                            role="Full Stack Developer"
                            period="2021 — Present"
                        />
                        <ExperienceItem
                            company="Freelance"
                            role="Full Stack Developer"
                            period="2016 — 2021"
                        />
                        <ExperienceItem
                            company="InStijl Media"
                            role="Internship"
                            period="2014 — 2015"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <h4 className="mb-3 text-base font-bold uppercase tracking-wider">
                {label}
            </h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="bg-[var(--surface-light)] px-3 py-1.5 text-sm font-medium dark:bg-[var(--surface-dark)]"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ExperienceItem({
    company,
    role,
    period,
}: {
    company: string;
    role: string;
    period: string;
}) {
    return (
        <div className="resume-exp-item group cursor-default border-2 border-current p-6 will-change-transform">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-display text-2xl font-black tracking-tight transition-colors duration-200 group-hover:text-[var(--accent)] md:text-3xl">
                    {company}
                </h4>
                <span className="text-xs font-black tracking-widest opacity-50">
                    {period}
                </span>
            </div>
            <p className="text-lg font-medium opacity-70 md:text-xl">{role}</p>
        </div>
    );
}
