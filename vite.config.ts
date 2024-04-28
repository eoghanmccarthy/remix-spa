import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async () => {
  return {
    assetsInclude:["**/*.mdx"],
    plugins: [
      remix({
        ssr: false,
      }),
      tsconfigPaths(),
    ],
  }
})
