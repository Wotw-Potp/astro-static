import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [image(), tailwind()]
});