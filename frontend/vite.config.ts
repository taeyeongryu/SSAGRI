import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore
import nodePolyfills from 'vite-plugin-node-stdlib-browser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  server: {
    hmr: {
      overlay: false
    }
    // build: {
    //   rollupOptions: {
    //     external: ['sockjs-client', 'stompjs', '@stomp/stompjs', 'socket.io']
    //   }
    // },
    // proxy: {
    //   '/api': {
    //     // target: 'https://j9b209.p.ssafy.io',
    //     target: 'http://localhost:5000',
    //     changeOrigin: true
    //     // rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // '/ws': {
    //   // target: 'ws://j9b209.p.ssafy.io',
    //   target: 'ws://localhost:5000',
    //   changeOrigin: true
    //   // rewrite: (path) => path.replace(/^\/api/, '')
    // }
    // }
  }
});
