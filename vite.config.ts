import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@apps',
        replacement: path.resolve(__dirname, 'src/apps')
      },
      {
        find: '@core',
        replacement: path.resolve(__dirname, 'src/core')
      },
      {
        find: '@domains',
        replacement: path.resolve(__dirname, 'src/domains')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@core',
        replacement: path.resolve(__dirname, 'src/core')
      }
    ]
  },
  plugins: [react({ jsxImportSource: '@emotion/react' })]
})
