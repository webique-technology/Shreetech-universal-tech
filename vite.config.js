import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-motion': ['framer-motion'],
          'vendor-swiper': ['swiper'],
          'vendor-bootstrap': ['react-bootstrap', 'bootstrap'],
        }
      }
    }
  }
})
