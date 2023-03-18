const staticCacheName = "site-static-v-0.1";
const dynamicCacheName = "site-dynamic-v-0.1";
const assets = [
  "/",
  "./index.html",
  "./assets/pages/fallback.html",
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
      return Promise.all(keys.filter((key) => key !== staticCacheName && key !== dynamicCacheName).map((key) => caches.delete(key)));
    })
  );
});

// fetch event
self.addEventListener("fetch", (e) => {
  // console.log("fetch event", e);

  // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(e.request.url.indexOf("http") === 0)) return;
  // skip the request. if request is not made with http protocol
  e.respondWith(
    caches
      .match(e.request)
      .then(
        (cacheRes) =>
          cacheRes ||
          fetch(e.request).then((fetchRes) =>
            caches.open(dynamicCacheName).then((cache) => {
              cache.put(e.request.url, fetchRes.clone());
              return fetchRes;
            })
          )
      )
      .catch(() => {
        if (e.request.url.indexOf(".html") > 1) {
          return caches.match("./assets/pages/fallback.html");
        }
      })
  );
});
