import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/your-repo-name/", // 🔥 REQUIRED for GitHub Pages
  },
});
