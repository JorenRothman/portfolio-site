import SectionTitle from '@/components/SectionTitle';
import { getAllBlogItems, type BlogItem } from '@/util/getBlogItem';

type Props = {
    items: BlogItem[];
};

function BlogList({ items }: Props) {
    if (items.length === 0) {
        return <p className="text-3xl my-10 mt-6">Well this is awkward...</p>;
    }

    return (
        <div className="mt-6">
            {items.map((item) => (
                <div
                    key={item.slug}
                    className="block p-4 bg-white dark:bg-black border-b-2 last:border-b-0 even:bg-black even:text-white"
                >
                    <h3 className="text-2xl mb-2 font-semibold">
                        {item.title}
                    </h3>
                    <p className="mb-2">Published: {item.date}</p>

                    <a href={`/blog/${item.slug}`} className="underline block">
                        Read more
                    </a>
                </div>
            ))}
        </div>
    );
}

export default async function Blog() {
    const items = await getAllBlogItems();
    return (
        <section className="c-container my-16">
            <SectionTitle
                title="Blog"
                subTitle="Take it with a grain of salt"
            />

            <BlogList items={items} />
        </section>
    );
}
