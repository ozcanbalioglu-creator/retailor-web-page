import matter from 'gray-matter';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
    image: string;
    content: string;
}

const blogFiles = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });

export const getAllPosts = async (): Promise<BlogPost[]> => {
    const posts: BlogPost[] = [];
    console.log('Blog files found by import.meta.glob:', Object.keys(blogFiles));

    for (const path in blogFiles) {
        try {
            if (path.split('/').pop()?.startsWith('._')) continue;

            const slug = path.split('/').pop()?.replace('.md', '') || '';
            const content = await (blogFiles[path]() as Promise<string>);

            if (!content) {
                console.warn(`Empty content for blog post at ${path}`);
                continue;
            }

            const { data, content: body } = matter(content);

            posts.push({
                slug,
                title: data.title || 'Başlıksız Yazı',
                date: data.date || '',
                excerpt: data.excerpt || '',
                category: data.category || 'Genel',
                image: data.image || 'assets/retailorHero.webp',
                content: body,
            });
        } catch (error) {
            console.error(`Error loading blog post at ${path}:`, error);
        }
    }

    console.log(`Total posts loaded: ${posts.length}`);
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
    const posts = await getAllPosts();
    return posts.find((p) => p.slug === slug) || null;
};
