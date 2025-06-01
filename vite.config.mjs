import { globSync } from 'glob';
import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'

const isProductionEnvironment = 'production' === process.env.NODE_ENV;

export default defineConfig({
  base: '/',
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
      includeAssets: ['assets/app-icon.webp'],
      manifest: {
        name: 'abenevaut.dev',
        short_name: 'abenevaut.dev',
        description: 'All my websites, projects and opensource contributions',
        theme_color: '#f4f4f5',
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
        ]
      }
    }),
  ],
});
