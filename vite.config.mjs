import { globSync } from 'glob';
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'

const isProductionEnvironment = 'production' === process.env.NODE_ENV;

export default defineConfig({
  base: isProductionEnvironment
    ? '/'
    : '/dev.abenevaut/abenevaut/dist/',
  build: {
    manifest: true,
    sourcemap: !isProductionEnvironment,
    minify: isProductionEnvironment,
    css: {
      minify: isProductionEnvironment,
    },
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  plugins: [
    react(),
    laravel({
      input: [
        'theme/css/app.css',
        ...(globSync('theme/js/*.jsx')
          .filter(function(item) {
            return !item.includes('AppNavigation.jsx');
          })
        ),
      ],
      refresh: true,
    }),
    VitePWA({
      strategies: 'injectManifest',
      // injectRegister: 'script',
      registerType: 'autoUpdate',
      srcDir: 'theme/js',
      filename: 'sw.js',
      devOptions: {
        enabled: !isProductionEnvironment,
        type: 'module',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [{
          urlPattern: /^https:\/\/fonts\.bunny\.net\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'fonts-bunny-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      },
      includeAssets: ['assets/app-icon.webp'],
      manifest: {
        name: 'abenevaut.dev',
        short_name: 'abenevaut.dev',
        description: 'All my websites, projects and opensource contributions',
        theme_color: '#f4f4f5',
        start_url: isProductionEnvironment
          ? '/?source=pwa'
          : '/dev.abenevaut/abenevaut/dist/',
        display: 'standalone',
        icons: [
          {
            src: 'https://www.abenevaut.dev/images/abenevaut-app-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://www.abenevaut.dev/images/abenevaut-app-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        // screenshots: [
        //   {
        //     "src": "/src/img/screenshots/shot1-mobile.png",
        //     "sizes": "400x822",
        //     "type": "image/png",
        //     "form_factor": "narrow"
        //   },
        //   {
        //     "src": "/src/img/screenshots/shot7-desktop.png",
        //     "sizes": "1280x676",
        //     "type": "image/png",
        //     "form_factor": "wide"
        //   },
        // ],
      }
    }),
  ],
});
