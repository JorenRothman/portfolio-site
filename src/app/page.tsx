import Header from '@/app/_components/Header';
import Projects from '@/app/_components/Projects';
import Resume from '@/app/_components/Resume';
import Intro from '@/components/Intro';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
    return (
        <div className="text-black dark:bg-black dark:text-white">
            <Intro />
            <SiteHeader />
            <main>
                <Header />
                <Resume />
                <Projects />
            </main>
        </div>
    );
}
