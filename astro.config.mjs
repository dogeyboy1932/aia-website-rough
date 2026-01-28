// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3333,
  },

  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assetsInlineLimit: 10240, // 10KB to inline achievements.css (7.5KB)
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['xps.rthak.com'],
    },
    build: {
      assetsInlineLimit: 10240,
    }
  },

  integrations: [react()]
});
