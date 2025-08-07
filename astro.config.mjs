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

  site: "https://closesttopurple.org/ths",
  integrations: [tailwind(), sitemap(), icon(), mdx(),react()],
  output: "server",
  adapter: cloudflare(),
      resolve: {
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },
);