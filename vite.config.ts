import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Roque Mapache',
        short_name: 'Roque',
        icons: [
          { src: '/icon/favicon-16.png', sizes: '16x16', type: 'image/png' },
          { src: '/icon/favicon-32.png', sizes: '32x32', type: 'image/png' },
          { src: '/icon/favicon-48.png', sizes: '48x48', type: 'image/png' },
          { src: '/icon/favicon-180.png', sizes: '180x180', type: 'image/png' },
          { src: '/icon/favicon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon/favicon-512.png', sizes: '512x512', type: 'image/png' },
        ],
        start_url: '/',
        theme_color: '#b798d4',
        background_color: '#b798d4',
        display: 'browser',
      },
      workbox: {
        cleanupOutdatedCaches: true,
        globPatterns: ['**/*'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
