const CACHE_NAME = "pwa-version-1";

const assets = [
  "./manifest.json",
  "./assets/audio/btn-tap.mp3",
  "./assets/audio/notification.mp3",
  "./assets/images/favicons/icon-192.png",
  "./assets/images/favicons/icon-512.png",
  "./assets/images/icons/close.svg",
  "./assets/images/icons/settings.svg",
  "./assets/images/icons/skip-next.svg",
  "./assets/scripts/btns.js",
  "./assets/scripts/modal.js",
  "./assets/scripts/progress.js",
  "./assets/scripts/theme.js",
  "./assets/scripts/timer.js",
  "./index.js",
  "./assets/styles/normalize.css",
  "./assets/styles/style.css",
  "./index.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    self.skipWaiting().then(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(assets).catch((err) => {
          console.log("Failed to cache assets:", err);
        });
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    clients.claim().then(() => {
      return caches.keys().then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        );
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(() => {
        return caches.match("./index.html");
      });
    })
  );
});
