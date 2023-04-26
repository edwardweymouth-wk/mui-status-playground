import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mui-status-playground/',
  plugins: [react()],
  server: {
    port: 3030,
  },
})
