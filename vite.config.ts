// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/rescuerelif/', // <-- IMPORTANT
    build: {
    outDir: 'build', // change dist to build
  },
  plugins: [react()],
})
