import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // server: {
  //   hmr: false
  // }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://j9b209.p.ssafy.io',
  //       changeOrigin: true
  //       // rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // }
});
