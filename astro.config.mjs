import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://titusgahissy.com',
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
