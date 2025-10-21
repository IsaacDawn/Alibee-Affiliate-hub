import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react', 'styled-components']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    proxy: {
      '/api': {
        target: 'https://alibee-affiliatehub-api.onrender.com',
        changeOrigin: true,
        secure: true
      }
    }
  },
  preview: {
    port: 4173,
    host: true
  },
  define: {
    // Default environment variables
    'import.meta.env.VITE_API_BASE_URL': JSON.stringify('https://alibee-affiliatehub-api.onrender.com')
  }
})
