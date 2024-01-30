'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, forwardRef } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const SpellingError = forwardRef(function SpellingError(props, ref: any) {
    return (
        <svg
            className="absolute w-full bottom-0 left-0 pointer-events-none hidden sm:block"
            width="315"
            height="14"
            viewBox="0 0 315 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
        >
            <path
                d="M157 12L167 2L177 12L187 2L197 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M196 12L206 2L216 12L226 2L236 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M235 12L245 2L255 12L265 2L275 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M274 12L284 2L294 12L304 2L314 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M1 12L11 2L21 12L31 2L41 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M40 12L50 2L60 12L70 2L80 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M79 12L89 2L99 12L109 2L119 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
            <path
                d="M118 12L128 2L138 12L148 2L158 12"
                stroke="#FF0000"
                strokeWidth="2"
            />
        </svg>
    );
});

const MousePointer = forwardRef(function MousePointer(props, ref: any) {
    return (
        <svg
            className="w-16 h-16 z-10 hidden sm:block absolute pointer-events-none left-0 top-0 opacity-0 translate-x-96 translate-y-48"
            ref={ref}
            width="480"
            height="480"
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M229.96 199.15L420.75 270.88C437.02 277 441.52 297.89 429.24 310.18L400.04 339.38L438.93 378.26C455.63 394.96 455.63 422.24 438.93 438.94C422.23 455.63 394.96 455.63 378.26 438.94L339.37 400.05L310.17 429.24C298.03 441.39 277.05 437.17 270.88 420.76L199.14 229.96C191.92 210.75 210.75 191.93 229.96 199.15ZM413.59 289.8L222.79 218.07C219.91 216.98 216.98 219.91 218.06 222.8L289.8 413.59C290.75 416.14 293.84 416.91 295.84 414.91L332.2 378.55C336.16 374.59 342.58 374.59 346.53 378.55L392.59 424.61C401.38 433.39 415.81 433.39 424.6 424.61C433.39 415.82 433.39 401.38 424.6 392.59L378.54 346.54C374.59 342.58 374.59 336.17 378.54 332.21L414.91 295.85C416.87 293.89 416.15 290.77 413.59 289.8Z"
                fill="black"
            />
            <path
                d="M413.59 289.8L222.79 218.07C219.91 216.98 216.98 219.91 218.06 222.8L289.8 413.59C290.75 416.14 293.84 416.91 295.84 414.91L332.2 378.55C336.16 374.59 342.58 374.59 346.53 378.55L392.59 424.61C401.38 433.39 415.81 433.39 424.6 424.61C433.39 415.82 433.39 401.38 424.6 392.59L378.54 346.54C374.59 342.58 374.59 336.17 378.54 332.21L414.91 295.85C416.87 293.89 416.15 290.77 413.59 289.8Z"
                fill="white"
            />
        </svg>
    );
});

const MousePointerClick = forwardRef(function MousePointerClick(
    props,
    ref: any
) {
    return (
        <svg
            className="w-16 h-16 hidden sm:block absolute pointer-events-none left-0 top-0 translate-x-96 translate-y-48"
            ref={ref}
            width="480"
            height="480"
            viewBox="0 0 480 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M229.96 199.15L420.75 270.88C437.02 277 441.52 297.89 429.24 310.18L400.04 339.38L438.93 378.26C455.63 394.96 455.63 422.24 438.93 438.94C422.23 455.63 394.96 455.63 378.26 438.94L339.37 400.05L310.17 429.24C298.03 441.39 277.05 437.17 270.88 420.76L199.14 229.96C191.92 210.75 210.75 191.93 229.96 199.15ZM413.59 289.8L222.79 218.07C219.91 216.98 216.98 219.91 218.06 222.8L289.8 413.59C290.75 416.14 293.84 416.91 295.84 414.91L332.2 378.55C336.16 374.59 342.58 374.59 346.53 378.55L392.59 424.61C401.38 433.39 415.81 433.39 424.6 424.61C433.39 415.82 433.39 401.38 424.6 392.59L378.54 346.54C374.59 342.58 374.59 336.17 378.54 332.21L414.91 295.85C416.87 293.89 416.15 290.77 413.59 289.8Z"
                fill="black"
            />
            <path
                d="M413.59 289.8L222.79 218.07C219.91 216.98 216.98 219.91 218.06 222.8L289.8 413.59C290.75 416.14 293.84 416.91 295.84 414.91L332.2 378.55C336.16 374.59 342.58 374.59 346.53 378.55L392.59 424.61C401.38 433.39 415.81 433.39 424.6 424.61C433.39 415.82 433.39 401.38 424.6 392.59L378.54 346.54C374.59 342.58 374.59 336.17 378.54 332.21L414.91 295.85C416.87 293.89 416.15 290.77 413.59 289.8Z"
                fill="white"
            />
            <path
                className="dark:fill-white"
                d="M157.65 143.32C161.61 147.28 161.61 153.7 157.65 157.65C153.69 161.61 147.28 161.61 143.32 157.65L86.9998 101.34C83.0398 97.38 83.0398 90.96 86.9998 87.01C90.9598 83.05 97.3698 83.05 101.33 87.01L157.65 143.32Z"
                fill="black"
            />
            <path
                className="dark:fill-white"
                d="M117.77 219.33C123.37 219.33 127.91 223.86 127.91 229.46C127.91 235.05 123.37 239.59 117.77 239.59H38.13C32.53 239.59 28 235.05 28 229.46C28 223.86 32.53 219.33 38.13 219.33H117.77Z"
                fill="black"
            />
            <path
                className="dark:fill-white"
                d="M143.32 301.26C147.28 297.3 153.69 297.3 157.65 301.26C161.61 305.22 161.61 311.63 157.65 315.59L101.33 371.91C97.3698 375.87 90.9598 375.87 86.9998 371.91C83.0398 367.95 83.0398 361.54 86.9998 357.58L143.32 301.26Z"
                fill="black"
            />
            <path
                className="dark:fill-white"
                d="M315.59 157.65C311.63 161.61 305.21 161.61 301.26 157.65C297.3 153.7 297.3 147.28 301.26 143.32L357.57 87.01C361.53 83.05 367.95 83.05 371.9 87.01C375.86 90.96 375.86 97.38 371.9 101.34L315.59 157.65Z"
                fill="black"
            />
            <path
                className="dark:fill-white"
                d="M239.58 117.78C239.58 123.38 235.05 127.91 229.45 127.91C223.86 127.91 219.32 123.38 219.32 117.78V38.14C219.32 32.54 223.86 28 229.45 28C235.05 28 239.58 32.54 239.58 38.14V117.78Z"
                fill="black"
            />
        </svg>
    );
});

export default function Animation() {
    const textRef = useRef<HTMLHeadingElement | null>(null);
    const spellingErrorRef = useRef<SVGSVGElement | null>(null);
    const mousePointerRef = useRef<SVGSVGElement | null>(null);
    const mousePointerClickRef = useRef<SVGSVGElement | null>(null);

    const isMobile = useMediaQuery('(max-width: 640px)');

    useGSAP(() => {
        if (isMobile) return;

        const timeline = gsap.timeline({
            paused: true,
        });

        timeline.fromTo(
            'span.letter',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 1,
                duration: 0.1,
                stagger: 0.12,
            }
        );

        timeline.fromTo(
            spellingErrorRef.current,
            {
                opacity: 0,
                delay: 0.6,
            },
            {
                opacity: 1,
                duration: 0.2,
                delay: 0.6,
            }
        );

        timeline.to(mousePointerRef.current, {
            opacity: 1,
            x: 330,
            y: 16,
            duration: 0.4,
            delay: 1,
        });

        timeline.fromTo(
            mousePointerClickRef.current,
            {
                opacity: 0,
                x: 330,
                y: 16,
                delay: 1,
                scale: 0.5,
            },
            {
                opacity: 1,
                x: 330,
                y: 16,
                scale: 1,
                delay: 0.2,
                duration: 0.1,
                ease: 'back.out(1.7)',
            }
        );

        timeline.to(mousePointerClickRef.current, {
            opacity: 0,
            duration: 0.3,
        });

        timeline.to(spellingErrorRef.current, {
            opacity: 0,
            duration: 0.3,
        });

        timeline.to(mousePointerRef.current, {
            x: 380,
            y: 34,
            opacity: 0,
            duration: 0.6,
            delay: '-=1',
        });

        // timeline.to(mousePointerRef.current, {
        //     opacity: 0,
        //     duration: 0.2,
        // });

        timeline.play();
    }, [isMobile]);

    return (
        <div className="relative">
            <h1
                ref={textRef}
                className="sm:overflow-hidden sm:pb-2 sm:whitespace-nowrap text-6xl font-semibold mb-3"
            >
                <span className="letter">J</span>
                <span className="letter">o</span>
                <span className="letter">r</span>
                <span className="letter">e</span>
                <span className="letter">n</span>{' '}
                <span className="relative">
                    <span className="letter">R</span>
                    <span className="letter">o</span>
                    <span className="letter">t</span>
                    <span className="letter">h</span>
                    <span className="letter">m</span>
                    <span className="letter">a</span>
                    <span className="letter">n</span>
                    <SpellingError ref={spellingErrorRef} />
                </span>
            </h1>
            <MousePointer ref={mousePointerRef} />
            <MousePointerClick ref={mousePointerClickRef} />
        </div>
    );
}
