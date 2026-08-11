import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function forceFullReload() {
  return {
    name: 'force-full-reload',
    handleHotUpdate({ server }) {
      server.ws.send({ type: 'full-reload' })
      return []
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    forceFullReload(),
  ],
  server: {
    watch: {
      // Polling is more reliable on some Windows setups and synced folders.
      usePolling: true,
      interval: 100,
    },
  },
})
