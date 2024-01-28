import Header from '@/app/_components/Header';
import Projects from '@/app/_components/Projects';
import Resume from '@/app/_components/Resume';

export default function Home() {
    return (
        <main className="">
            <Header />
            <Resume />
            <Projects />
        </main>
    );
}
