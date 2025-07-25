import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs-extra'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'copy-index-to-404',
      closeBundle: async () => {
        // Copy index.html to 404.html after build
        await fs.copy('dist/index.html', 'dist/404.html')
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  }
})
