import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import tailwindvite from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindvite()],
  server: {
    port: 5173,
    open: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
