import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://Vickey21299.github.io/VIckey-portfolio/ (GitHub Pages project site)
  base: '/VIckey-portfolio/',
  plugins: [react(), tailwindcss()],
})
