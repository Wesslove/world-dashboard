import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Utiliser './' rend les chemins relatifs au lieu d'absolus
  base: './' 
})