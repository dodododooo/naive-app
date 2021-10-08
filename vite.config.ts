import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...eslint(),
      enforce: 'pre',
    },
  ],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
});
