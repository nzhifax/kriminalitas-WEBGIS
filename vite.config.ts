import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/kriminalitas-WEBGIS/", // ganti sesuai nama repository GitHub
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});