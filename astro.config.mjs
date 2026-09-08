import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://renovatms.com',
  output: 'server',
  security: {
    checkOrigin: false,
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});

