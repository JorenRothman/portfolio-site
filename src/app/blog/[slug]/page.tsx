import { getBlogContent, getBlogSlugs } from '@/util/getBlogItem';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        slug: string;
    };
};

type BlogContent = {
    title: string;
    date: string;
};

export default async function BlogPage({ params: { slug } }: Props) {
    const blogItem = await getBlogContent<BlogContent>(slug);

    if (!blogItem) {
        notFound();
    }

    const { title, date, content } = blogItem;

    return (
        <article>
            <div className="c-container py-24">
                <h1 className="mb-4 text-5xl font-semibold">{title}</h1>
                <p className="mb-8">Published: {date}</p>
                <div
                    className="prose lg:prose-xl prose-neutral dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </div>
        </article>
    );
}

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();

    return slugs.map((slug) => ({ slug }));
}
