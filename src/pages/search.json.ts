import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/posts';

export async function GET(_context: APIContext) {
  const posts = await getPublishedPosts();

  const searchData = posts.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    slug: post.slug,
    tags: post.data.tags,
    category: post.data.category,
    pubDate: post.data.pubDate.toISOString(),
  }));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
