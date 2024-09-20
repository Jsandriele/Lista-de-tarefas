import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acessos externos
    port: 5173, // Porta que será usada
  },
})
