const staticCacheName = "site-static";
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
];
// install service worker
self.addEventListener("install", (e) => {
  // console.log("service worker installed successfully");
  e.waitUntil(caches.open(staticCacheName).then((cache) => cache.addAll(assets)));
});

// activate service worker
self.addEventListener("activate", (e) => {
  // console.log("service worker activated successfully");
});

// fetch event
self.addEventListener("fetch", (e) => {
  // console.log("fetch event", e);
});
