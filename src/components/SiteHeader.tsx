import ColourSwitcher from '@/components/ColourSwitcher';

export default function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 py-4">
            <div className="c-container">
                <nav className="flex items-center justify-end gap-2">
                        <ColourSwitcher />

                        <a
                            href="https://github.com/jorenrothman"
                            target="_blank"
                            rel="noreferrer"
                            className="brutal-border p-2 hover:bg-[var(--accent)] hover:text-[var(--bg-dark)] hover:border-[var(--accent)] transition-all duration-200"
                            aria-label="View GitHub profile"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>

                        <a
                            href="mailto:hello@jorenrothman.nl"
                            target="_blank"
                            rel="noreferrer"
                            className="brutal-border p-2 hover:bg-[var(--accent)] hover:text-[var(--bg-dark)] hover:border-[var(--accent)] transition-all duration-200"
                            aria-label="Send me an email"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                        </a>
                    </nav>
            </div>
        </header>
    );
}
