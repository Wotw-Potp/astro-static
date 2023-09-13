import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  integrations: [tailwind()],
})
