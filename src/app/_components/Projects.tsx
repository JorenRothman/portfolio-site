type Project = {
    title: string;
    description: string;
    date: string;
    link?: string;
    github?: string;
};

const projects: Project[] = [
    {
        title: 'Lunchrun Clone',
        description: 'A Lunchrun clone build with websockets',
        date: '2024',
        link: 'https://lunchrun.jorenrothman.nl',
        github: 'https://github.com/jorenrothman/lunchrun-clone-ws',
    },
    {
        title: 'URL Shortener',
        description:
            'A simple URL shortener built with Next.js, Drizzle, Lucia and Tailwind CSS',
        date: '2024',
        link: 'https://short.jorenrothman.nl',
        github: 'https://github.com/JorenRothman/short-url',
    },
    {
        title: 'ACF Builder',
        description: 'PHP wrapper for ACF field creation',
        date: '2023',
        link: 'https://jorenrothman.github.io/ACF-Builder',
        github: 'https://github.com/JorenRothman/ACF-Builder',
    },
    {
        title: 'Secure WordPress',
        description: 'A CLI tool to secure WordPress using the .htaccess file',
        date: '2023',
        github: 'https://github.com/JorenRothman/secure-wordpress',
    },
    {
        title: 'Timebandit',
        description: 'A CLI tool to track your time',
        date: '2023',
        github: 'https://github.com/JorenRothman/timebandit',
    },
];

export default function Projects() {
    return (
        <div className="c-container my-16">
            <h2 className="mb-4 text-4xl font-semibold border-b-2 border-black py-6 sticky top-0 bg-white dark:bg-black dark:text-white dark:border-white">
                Projects
            </h2>

            <div>
                {projects.map((project, i) => (
                    <div
                        className="py-4 px-4 group even:bg-black even:text-white dark:even:text-black dark:even:bg-white"
                        key={i}
                    >
                        <h3 className="text-2xl mb-2 font-semibold">
                            {project.title}
                        </h3>
                        <p className="mb-2">{project.description}</p>
                        <p className="mb-2">{project.date}</p>
                        <div className="flex flex-wrap gap-4">
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {project.link}
                                </a>
                            )}
                            {project.github && (
                                <a
                                    href={project.github}
                                    className="underline"
                                    aria-label={`GitHub link to ${project.title}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 .297C5.37.297 0 5.667 0 12.297c0 5.48 3.438 10.122 8.207 11.773.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.49.997.108-.776.42-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.21.69.825.57C20.565 22.41 24 17.77 24 12.297 24 5.667 18.63.297 12 .297z"
                                            fill="#000000"
                                            className="group-even:fill-white dark:group-even:fill-black dark:fill-white"
                                        />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
