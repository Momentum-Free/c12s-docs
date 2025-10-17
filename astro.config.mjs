// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import sidebarMenu from './sidebar-menu';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'App & Bots Documentation',
      logo: {
        src: './src/assets/C12s Logo.svg',
        // replacesTitle: true,
        alt: 'c12s.ai logo',
      },
      social: [
        { icon: 'x.com', label: 'X', href: 'https://x.com/c12s_ai' },
        { icon: 'telegram', label: 'Telegram', href: 'https://t.me/c12s_ai' },
        { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/company/c12s' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/Momentum-Free/c12s-docs' },
      ],
      sidebar: sidebarMenu,
    }),
    sitemap({
        // Docs: https://docs.astro.build/en/guides/integrations-guide/sitemap/
        changefreq: 'weekly',
        lastmod: new Date(),
        customPages: [
          'https://app.c12s.ai',
          'https://c12s.ai'
        ]
    })
  ],

  prefetch: { // Read: https://docs.astro.build/en/guides/prefetch/
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  experimental: {
    clientPrerender: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
