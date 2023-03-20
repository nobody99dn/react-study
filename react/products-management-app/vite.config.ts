import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/layouts')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services')
      },
      {
        find: '@helpers',
        replacement: path.resolve(__dirname, 'src/helpers')
      },
      {
        find: '@models',
        replacement: path.resolve(__dirname, 'src/models')
      },
      {
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      }
    ]
  }
});
