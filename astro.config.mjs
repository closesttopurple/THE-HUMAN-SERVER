import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/blog": "/",
  },

  site: "https://closesttopurple.org/ths",
  integrations: [tailwind(), sitemap(), icon()],
  output: "server",
  adapter: cloudflare(),
});