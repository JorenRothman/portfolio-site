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
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'expo.out',
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="c-container py-24">
            <div className="flex items-center gap-6 mb-16">
                <h2 className="resume-item font-display text-5xl sm:text-7xl font-bold tracking-tight">
                    Resume
                </h2>
                <div className="h-px flex-1 bg-(--accent) opacity-40"></div>
            </div>

            <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
                <div className="resume-item space-y-12">
                    <ResumeSection title="Expertise">
                        <div className="space-y-6">
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
                    </ResumeSection>

                    <ResumeSection title="Also worked with">
                        <p className="text-lg opacity-60">
                            {['Python', 'Go', 'Vue', 'Bun'].map((item, i) => (
                                <span key={item}>
                                    {item}
                                    {i < 3 && (
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-(--accent) mx-2 align-middle opacity-50" />
                                    )}
                                </span>
                            ))}
                        </p>
                    </ResumeSection>
                </div>

                <div className="resume-item space-y-8">
                    <ResumeSection title="Experience">
                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-(--accent) opacity-20"></div>
                            <div className="space-y-10 pl-8">
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
                    </ResumeSection>
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
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-(--accent) mb-8">
                {title}
            </h3>
            {children}
        </div>
    );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
    return (
        <div>
            <h4 className="font-medium text-lg mb-3">{label}</h4>
            <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                    <span
                        key={item}
                        className="px-3 py-1.5 bg-(--surface-light) dark:bg-(--surface-dark) text-sm rounded-full opacity-70"
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
        <div className="relative">
            <div className="absolute -left-9.25 top-2 w-3 h-3 rounded-full bg-(--accent)"></div>
            <h4 className="font-display text-xl font-semibold mb-1">{company}</h4>
            <p className="text-lg opacity-80 mb-1">{role}</p>
            <p className="text-sm opacity-50 font-medium">{period}</p>
        </div>
    );
}
