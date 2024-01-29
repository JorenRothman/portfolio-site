import ColourSwitcher from '@/components/ColourSwitcher';

export default function SiteHeader() {
    return (
        <div className="p-4 fixed top-0 right-0 flex gap-6 z-10">
            <ColourSwitcher />

            <a
                href="https://github.com/jorenrothman"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
                aria-label="Checkout my GitHub"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="md:w-6 md:h-6 w-8 h-8"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.48 3.438 10.122 8.207 11.773.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.49.997.108-.776.42-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 22.41 24 17.77 24 12.297 24 5.667 18.63.297 12 .297z"
                        fill="#000000"
                        className="dark:fill-white"
                    />
                </svg>
            </a>

            <a
                href="mailto: hello@jorenrothman.nl"
                target="_blank"
                rel="noreferrer"
                aria-label="Send me an email"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="md:w-6 md:h-6 w-8 h-8"
                >
                    <g fill="#000000" className="dark:fill-white">
                        <path
                            d="M33.933,37.5a4.006,4.006,0,0,1-3.867,0L2,22.017V51a6.006,6.006,0,0,0,6,6H56a6.006,6.006,0,0,0,6-6V22.017Z"
                            fill="#000000"
                            className="dark:fill-white"
                        ></path>
                        <path
                            className="dark:fill-white"
                            d="M56,7H8a6.006,6.006,0,0,0-6,6v5a1,1,0,0,0,.517.876l29,16a1,1,0,0,0,.966,0l29-16A1,1,0,0,0,62,18V13A6.006,6.006,0,0,0,56,7Z"
                        ></path>
                    </g>
                </svg>
            </a>
        </div>
    );
}
