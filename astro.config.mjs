import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },

  site: "https://closesttopurple.org/ths",
  integrations: [tailwind(), sitemap(), icon(), mdx()],
  output: "server",
  adapter: cloudflare(),
});