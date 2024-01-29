export default function Resume() {
    return (
        <div className="c-container my-8">
            <h2 className="text-4xl font-semibold border-b-2 border-black py-6 sticky top-0 bg-white dark:bg-black dark:text-white dark:border-white">
                Resume
            </h2>
            <div className="grid sm:grid-cols-2 gap-12 mt-6 ">
                <div>
                    <Resume.Item title="Skills">
                        <div>
                            <h4 className="text-lg mb-2 font-semibold">
                                Languages
                            </h4>
                            <p>JavaScript, TypeScript, PHP</p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-2 font-semibold">
                                Frameworks
                            </h4>
                            <p>React, Next.js, Express, Adonis</p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-2 font-semibold">CMSs</h4>
                            <p>WordPress, Shopify</p>
                        </div>
                        <div>
                            <h4 className="text-lg mb-2 font-semibold">
                                Tools
                            </h4>
                            <p>Git, Docker</p>
                        </div>
                    </Resume.Item>
                </div>
                <div>
                    <Resume.Item title="Experience">
                        <div>
                            <h4 className="font-semibold">Instance Studio</h4>
                            <p>Full Stack Developer</p>
                            <p>2021 - Present</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">Freelance</h4>
                            <p>Full Stack Developer</p>
                            <p>2016 - 2021</p>
                        </div>
                        <div>
                            <h4 className="font-semibold">InStijl Media</h4>
                            <p>Internship</p>
                            <p>2014 - 2015</p>
                        </div>
                    </Resume.Item>
                </div>
            </div>
        </div>
    );
}

Resume.Item = function ResumeItem({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-8 last:mb-0">
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <div className="flex flex-col gap-4">{children}</div>
        </div>
    );
};
