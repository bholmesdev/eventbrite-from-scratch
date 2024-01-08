import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import simpleStackForm from "simple-stack-form";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [simpleStackForm(), react()],
  output: "server",
  adapter: cloudflare({
    runtime: {
      mode: "local",
    },
  }),
});
