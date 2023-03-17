const staticCacheName = "site-static-v-0.1";
const assets = [
  "/",
  "./index.html",
  "./assets/js/app.js",
  "./assets/js/ui.js",
  "./assets/css/style.css",
  "./assets/img/dish.png",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
  "https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
];
// install service worker
self.addEventListener("install", (e) => {
  // console.log("service worker installed successfully");
  e.waitUntil(caches.open(staticCacheName).then((cache) => cache.addAll(assets)));
});

// activate service worker
self.addEventListener("activate", (e) => {
  // console.log("service worker activated successfully");
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== staticCacheName).map((key) => caches.delete(key)));
    })
  );
});

// fetch event
self.addEventListener("fetch", (e) => {
  // console.log("fetch event", e);
  e.respondWith(
    caches.match(e.request).then((cacheRes) => {
      return cacheRes || fetch(e.request);
    })
  );
});
