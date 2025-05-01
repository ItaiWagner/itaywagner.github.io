import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add this line for GitHub Pages
const repoName = 'itaywagner.github.io'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // ✅ This is crucial
})