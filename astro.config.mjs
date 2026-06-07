import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mr-response.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory',
  },
});
