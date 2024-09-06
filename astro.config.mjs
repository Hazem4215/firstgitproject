import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],

  vite: {
    plugins: [yaml()]
  },

  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});