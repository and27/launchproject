import { VitePWA } from "vite-plugin-pwa";

export default {
  plugins: [
    VitePWA({
      strategies: "generateSW",
      workbox: {
        importScripts: ["sw.js"],
        globPatterns: ["**/*"],
        runtimeCaching: [
          {
            urlPattern: ({ event }) => event.request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              networkTimeoutSeconds: 5,
              cacheName: "pages",
              expiration: {
                maxEntries: 10,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
};
