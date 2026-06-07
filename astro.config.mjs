import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://grace212qaq.github.io',
  base: '/mr-response-website',
  output: 'static',
  build: {
    format: 'directory',
  },
});
