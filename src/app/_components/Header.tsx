import Animation from '@/app/_components/Animation';

export default function Header() {
    return (
        <header className="flex flex-col justify-end w-full text-balance pt-64 pb-12 ">
            <div className="c-container ">
                <p className="text-lg font-bold mb-2">Hi, I&apos;m</p>
                <Animation />
                <h2 className="text-2xl">A Dutch Full Stack Developer</h2>
            </div>
        </header>
    );
}
