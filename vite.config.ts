import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.tsx",
  })],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
