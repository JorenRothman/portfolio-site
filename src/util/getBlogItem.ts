import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getBlogSlugs() {
    const fullPath = path.join(contentDirectory, 'blog');

    const slugs = fs.readdirSync(fullPath);

    return slugs.map((slug) => slug.replace('.md', ''));
}

export async function getBlogItem<T = {}>(
    slug: string
): Promise<null | ({ content: string } & T)> {
    const fullPath = path.join(contentDirectory, 'blog', `${slug}.md`);

    const exists = fs.existsSync(fullPath);

    if (!exists) {
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
        ...data,
    };
}
