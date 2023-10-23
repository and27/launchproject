importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

const { NetworkOnly } = workbox.strategies;
const { setDefaultHandler } = workbox.routing;
const { offlineFallback, staticResourceCache } = workbox.recipes;

setDefaultHandler(new NetworkOnly());

staticResourceCache();

workbox.precaching.precacheAndRoute([{ url: "/index.html", revision: "1" }]);

offlineFallback({
  pageFallback: "/offline.html",
  imageFallback: "rocketPink.png",
});
