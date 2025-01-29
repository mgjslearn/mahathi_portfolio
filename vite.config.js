import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: '/mahathi_portfolio/',  // Add this line and replace [repo-name] with your actual repo name
})
