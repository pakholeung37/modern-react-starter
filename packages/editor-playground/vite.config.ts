import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
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
