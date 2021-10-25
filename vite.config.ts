import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'mock-plugin',
      resolveId(id) {
        if (id === '@my-mock.mock') {
          return '@my-mock.mock';
        }
      },
      load(id) {
        if (id === '@my-mock.mock') {
          return process.env.VITE_USER_NODE_ENV === 'production' ? '' : `import '/src/mock';`;
        }
      },
    },
  ],
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/'),
    },
  },
});
