import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export type BlogItem = {
    title: string;
    date: string;
    content: string;
    slug: string;
};

const contentDirectory = path.join(process.cwd(), 'content');

export async function getBlogSlugs() {
    const fullPath = path.join(contentDirectory, 'blog');

    const slugs = fs.readdirSync(fullPath);

    return slugs.map((slug) => slug.replace('.md', ''));
}

export async function getBlogContent<T = {}>(
    slug: string
): Promise<null | ({ content: string; slug: string } & T)> {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath);

    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const content = processedContent.toString();
    const data = matterResult.data as T;

    return {
        content,
        slug,
        ...data,
    };
}

export async function getAllBlogItems() {
    const slugs = await getBlogSlugs();

    const blogItems = await Promise.all(
        slugs.map(async (slug) => {
            const blogItem = await getBlogContent(slug);

            if (!blogItem) {
                return null;
            }

            return blogItem;
        })
    );

    return blogItems.filter((blogItem) => blogItem !== null) as BlogItem[];
}
