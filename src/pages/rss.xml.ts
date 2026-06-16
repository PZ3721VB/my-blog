import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../utils/posts';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: '日常博客',
    description: '记录生活的点点滴滴',
    site: context.site || 'https://myblog.vercel.app',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
