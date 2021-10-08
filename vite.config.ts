import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import eslint from '@rollup/plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint(),
      enforce: 'pre',
    },
    vue(),
  ],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
});
