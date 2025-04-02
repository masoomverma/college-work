import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        comingSoon: resolve(__dirname, 'public/coming-soon.html'),
        maintenance: resolve(__dirname, 'public/maintenance.html')
      }
    }
  },
  publicDir: 'public',
  server: {
    open: '/coming-soon.html'
  }
})
