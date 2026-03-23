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
            const prefersReducedMotion = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches;

            if (prefersReducedMotion) {
                gsap.set('.resume-title', { opacity: 1, x: 0, rotation: 0 });
                gsap.set('.resume-card', { opacity: 1, x: 0, rotation: 0 });
                gsap.set('.resume-exp-item', { opacity: 1, y: 0 });
                return;
            }

            gsap.set('.resume-title', { opacity: 0, x: -200, rotation: -4 });
            gsap.set('.resume-card', { opacity: 0, x: -150, skewX: -3 });
            gsap.set('.resume-exp-item', { opacity: 0, y: 100, rotation: 2 });

            ScrollTrigger.create({
                trigger: containerRef.current,
                start: 'top 75%',
                onEnter: () => {
                    gsap.to('.resume-title', {
                        opacity: 1,
                        x: 0,
                        rotation: 0,
                        duration: 0.5,
                        ease: 'power4.out',
                    });
                    gsap.to('.resume-card', {
                        opacity: 1,
                        x: 0,
                        skewX: 0,
                        duration: 0.4,
                        ease: 'power4.out',
                        stagger: 0.15,
                    });
                    gsap.to('.resume-exp-item', {
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        duration: 0.35,
                        ease: 'power4.out',
                        stagger: 0.12,
                    });
                },
                once: true,
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
                    <div className="resume-card brutal-border-accent brutal-shadow p-6 transition-transform duration-100 ease-out will-change-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[9px_9px_0_var(--accent)]">
                        <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
                            Expertise
                        </h3>
                        <div className="space-y-8">
                            <SkillGroup
                                label="Languages"
                                items={['TypeScript', 'JavaScript', 'PHP']}
                            />
                            <SkillGroup
                                label="Libs & Frams"
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
                                    className="border-[3px] border-black px-3 py-2 text-sm font-bold transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-black hover:shadow-[3px_3px_0_var(--accent)] dark:border-white dark:hover:-translate-x-0.5 dark:hover:-translate-y-0.5 dark:hover:bg-[var(--accent)] dark:hover:text-black dark:hover:shadow-[3px_3px_0_var(--accent)]"
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
                        className="skill-tag border-[3px] border-black bg-[var(--surface-light)] px-3 py-1.5 text-sm font-medium transition-all duration-100 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--accent)] hover:text-black hover:shadow-[2px_2px_0_var(--accent)] dark:border-white dark:bg-[var(--surface-dark)] dark:text-white dark:hover:-translate-x-0.5 dark:hover:-translate-y-0.5 dark:hover:bg-[var(--accent)] dark:hover:text-black dark:hover:shadow-[2px_2px_0_var(--accent)]"
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
        <div className="resume-exp-item group cursor-default border-2 border-current p-6 transition-all duration-150 will-change-transform hover:-translate-x-1 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[6px_6px_0_var(--accent)]">
            <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="font-display text-2xl font-black tracking-tight transition-colors duration-100 group-hover:text-[var(--accent)] md:text-3xl">
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
