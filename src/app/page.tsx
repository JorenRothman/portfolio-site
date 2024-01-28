import Header from '@/app/_components/Header';
import Projects from '@/app/_components/Projects';
import Resume from '@/app/_components/Resume';
import SiteHeader from '@/components/SiteHeader';

export default function Home() {
    return (
        <>
            <SiteHeader />
            <main className="">
                <Header />
                <Resume />
                <Projects />
            </main>
        </>
    );
}
