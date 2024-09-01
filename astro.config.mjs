import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

export default defineConfig({
  output: "hybrid",
  integrations: [react()],
  adapter: vercelServerless(),
});
