'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Resume() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            gsap.set('.resume-item', { opacity: 1 });
            return;
        }

        gsap.from('.resume-item', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="c-container py-32">
            <div className="flex items-end gap-6 mb-16">
                <div className="relative">
                    <h2 className="resume-item font-display text-4xl xs:text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none">
                        Resume
                    </h2>
                    <div className="absolute -bottom-4 right-0 w-full h-2 bg-[var(--accent)] -rotate-1"></div>
                </div>
                <div className="flex-1 h-px bg-current opacity-20 mb-4 hidden sm:block"></div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
                <div className="resume-item space-y-12">
                    <div className="brutal-border-accent p-6 brutal-shadow">
                        <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
                            Expertise
                        </h3>
                        <div className="space-y-8">
                            <SkillGroup
                                label="Languages"
                                items={['TypeScript', 'JavaScript', 'PHP']}
                            />
                            <SkillGroup
                                label="Frameworks"
                                items={['Next.js', 'React', 'Express', 'Adonis']}
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

                    <div>
                        <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
                            Also worked with
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {['Python', 'Go', 'Vue', 'Bun'].map((item) => (
                                <span
                                    key={item}
                                    className="brutal-border px-3 py-1.5 text-sm font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="resume-item">
                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-xs font-black tracking-[0.3em] uppercase text-[var(--accent)]">
                            Experience
                        </h3>
                        <div className="flex-1 h-2 bg-[var(--accent)]"></div>
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

function ResumeSection({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div>
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
                {title}
            </h3>
            {children}
        </div>
    );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <h4 className="font-bold text-base mb-3 uppercase tracking-wider">{label}</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                    <span
                        key={item}
                        className="px-3 py-1.5 bg-[var(--surface-light)] dark:bg-[var(--surface-dark)] text-sm font-medium"
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
        <div className="border-2 border-current p-6 group cursor-default">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                <h4 className="font-display text-2xl md:text-3xl font-black tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">{company}</h4>
                <span className="font-black tracking-widest text-xs opacity-50">{period}</span>
            </div>
            <p className="text-lg md:text-xl font-medium opacity-70">{role}</p>
        </div>
    );
}
