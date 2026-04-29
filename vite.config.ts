import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/shiva-core-systems/",
  },
  // 👇 THIS is the key
  start: {
    ssr: false,
  },
});
