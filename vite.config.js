import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures relative asset paths work on GitHub Pages, Vercel, and local network
  server: {
    port: 5173,
    host: '0.0.0.0', // Enables localhost, 127.0.0.1, and local offline network access
  }
})

