// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// Static output for Vercel (no server adapter needed)
export default defineConfig({
  output: "static",
  integrations: [tailwind(), icon()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
