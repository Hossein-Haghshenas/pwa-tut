// install service worker
self.addEventListener("install", (e) => {
  console.log("service worker installed successfully");
});

// activate service worker
self.addEventListener("activate", (e) => {
  console.log("service worker activated successfully");
});
