import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';
import { VitePWA } from 'vite-plugin-pwa'

const isDevEnvironment = 'dev' === process.env.NODE_ENV || true;

export default defineConfig({
  base: '/',
  build: {
    manifest: true,
    sourcemap: true,
    minify: false,
    css: {
      minify: false,
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
        'theme/js/Home.jsx',
        'theme/js/Article.jsx',
        'theme/js/Writeup.jsx',
        'theme/js/Privacy.jsx',
        'theme/js/Profile.jsx',
        'theme/js/Terms.jsx',
      ],
      refresh: true,
    }),
    VitePWA({
      includeAssets: ['assets/app-icon.webp'],
      manifest: {
        name: 'abenevaut.dev',
        short_name: 'abenevaut.dev',
        description: 'All my websites, projects and opensource contributions',
        theme_color: '#5e998a',
        icons: [
          {
            src: 'abenevaut-app-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'abenevaut-app-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
})
