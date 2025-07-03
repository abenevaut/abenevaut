import { globSync } from 'glob';
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa';

const isProductionEnvironment = 'production' === process.env.NODE_ENV;

export default defineConfig({
  base: '/',
  build: {
    manifest: 'manifest.json',
    sourcemap: !isProductionEnvironment,
    minify: isProductionEnvironment,
    css: {
      minify: isProductionEnvironment,
    },
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
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
      buildDirectory: 'dist',
    }),
    VitePWA({

// Public Key: BO4imRW5SYfMtEUyfwMrrxvzJjuoThJ1FNqiUX3Z0C93Ajdrhdy0rX5iwvGBWHffmH3nP-NhVsF5XXbnHxsUnrg
// Private Key: yI31gBBUlJYKj_7wZmPZsLGFklxNMVSk_9UVpWBXEHc

      strategies: 'generateSW',
      registerType: 'autoUpdate',
      srcDir: 'theme/js',
      filename: 'service-worker.js',
      devOptions: {
        enabled: !isProductionEnvironment,
        type: 'module',
      },
      workbox: false,
      includeAssets: ['assets/app-icon.webp'],
      manifest: {
        name: 'abenevaut.dev',
        short_name: 'abenevaut.dev',
        description: 'All my websites, projects and opensource contributions',
        theme_color: '#f4f4f5',
        start_url: isProductionEnvironment
          ? '/?pk_source=pwa'
          : '/',
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
