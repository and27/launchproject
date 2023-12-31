import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    deps: {
      inline: ["vitest-canvas-mock"],
    },
    threads: false,
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
  },
});
