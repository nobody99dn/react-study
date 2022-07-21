import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import replace from '@rollup/plugin-replace';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.BASE_URL': JSON.stringify(
        'https://62943cf0a7203b3ed0650c9b.mockapi.io'
      )
    })
  ],
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
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@common-types',
        replacement: path.resolve(__dirname, 'src/common-types')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils')
      }
    ]
  }
});
