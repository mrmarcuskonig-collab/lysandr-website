import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // VERY IMPORTANT FOR GITHUB PAGES
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  }
});
