import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },
  prefetch: true,
    prefetch: {
    prefetchAll: true,
    defaultStrategy: 'load'
  },
  site: "https://thehumanserver.org",
  integrations: [tailwind(), sitemap(), icon(), mdx(),react()],
  vite: {
    resolve: {
      alias: import.meta.env.PROD && {
                "react-dom/server": "react-dom/server.edge",
      },
    },
  },
  output: "server",
  adapter: cloudflare({
      imageService: 'compile'
  }),

});