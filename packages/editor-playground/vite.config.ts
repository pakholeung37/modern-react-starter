import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: [
      {
        find: /^@trantor\/(.*)$/,
        replacement: path.resolve("./node_modules/@trantor/$1/src"),
      },
    ],
  }
})
