import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import cloudflare from "@astrojs/cloudflare";

import simpleStackForm from "simple-stack-form";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), simpleStackForm()],
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
});
