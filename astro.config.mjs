import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://new-sandy-zeta.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
