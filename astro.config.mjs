import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aldojara.github.io',
  base: '/aldo-en-ruta',
  output: 'static',
  build: {
    format: 'directory'
  }
});
