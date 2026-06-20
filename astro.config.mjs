import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [
    sitemap({
      // Exclude legal static pages from sitemap (they're raw HTML, not Astro)
      filter: (page) => !page.includes('/legal/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  output: 'static',
  site: 'https://retensiq.com',
});
