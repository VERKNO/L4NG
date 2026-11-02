// Killer service worker.
//
// This app used to live here as an installable PWA with a cache-first
// service worker (see endrudaud/c3ko's sw.js). That means browsers that
// already installed it will keep serving the OLD cached app from this exact
// scope forever, no matter what we now put at this URL — cache-first never
// checks the network for app files.
//
// The one thing that *does* always hit the network is the browser's own
// periodic check for whether this sw.js file itself has changed. Replacing
// it with a different file (this one) is what lets us reach those browsers:
// once a browser notices this file is new, it installs it, and this worker's
// only job is to take over, wipe every cache it can reach, unregister
// itself, and send any open tab for this app to its new home.
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    self.clients.claim()
      .then(function () {
        return caches.keys();
      })
      .then(function (keys) {
        return Promise.all(keys.map(function (k) { return caches.delete(k); }));
      })
      .then(function () {
        return self.registration.unregister();
      })
      .then(function () {
        return self.clients.matchAll({ type: "window" });
      })
      .then(function (clients) {
        clients.forEach(function (client) {
          client.navigate("https://lang.rkp.or.id/c3ko/");
        });
      })
  );
});

self.addEventListener("fetch", function (event) {
  // Always go to the network during this transition — never serve from
  // whatever's left of the old cache.
  event.respondWith(fetch(event.request));
});
