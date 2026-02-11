// Manual frontmatter parser to avoid node.js dependencies in the browser
function parseFrontmatter(content: string) {
    const regex = /^---[\s\S]*?---/;
    const match = content.match(regex);
    if (!match) return { data: {} as any, content };

    const frontmatter = match[0].replace(/---/g, '').trim();
    const body = content.replace(regex, '').trim();
    const data: any = {};

    frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            let value = valueParts.join(':').trim();
            // Remove quotes if present
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            data[key.trim()] = value;
        }
    });

    return { data, content: body };
}

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

    const baseUrl = import.meta.env.BASE_URL;

    for (const path in blogFiles) {
        try {
            if (path.split('/').pop()?.startsWith('._')) continue;

            const slug = path.split('/').pop()?.replace('.md', '') || '';
            const content = await (blogFiles[path]() as Promise<string>);

            if (!content) {
                console.warn(`Empty content for blog post at ${path}`);
                continue;
            }

            const { data, content: body } = parseFrontmatter(content);

            // Ensure image path is relative to base
            let imagePath = data.image || 'assets/retailorHero.webp';
            if (imagePath.startsWith('/')) {
                imagePath = imagePath.slice(1);
            }
            if (!imagePath.startsWith('http')) {
                imagePath = `${baseUrl}${imagePath}`;
            }

            posts.push({
                slug,
                title: data.title || 'Başlıksız Yazı',
                date: data.date || '',
                excerpt: data.excerpt || '',
                category: data.category || 'Genel',
                image: imagePath,
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
