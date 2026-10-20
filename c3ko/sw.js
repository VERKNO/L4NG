/* C3KO service worker: makes the app work offline.
 * App files: served from cache, refreshed in the background (so edits arrive on the next open).
 * Google Fonts: cached the first time they load online.
 * GitHub API (gist sync): never cached.
 * Bump CACHE when the list of app files changes. */
var CACHE = "c3ko-v19";
var APP_FILES = [
  "./",
  "index.html",
  "css/style.css",
  "js/edition.js",
  "js/data.js",
  "js/reviews.js",
  "js/lang-id.js",
  "js/faq.js",
  "js/words.js",
  "js/exam-a1.js",
  "js/exam-a2.js",
  "js/exam-b1.js",
  "js/exam-b2.js",
  "js/exam-c1.js",
  "js/exam-c2.js",
  "js/app.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(APP_FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  if (url.hostname === "api.github.com") return;

  var isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  var isApp = url.origin === self.location.origin;
  if (!isFont && !isApp) return;

  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: isApp }).then(function (hit) {
        var net = fetch(req).then(function (res) {
          if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
          return res;
        }).catch(function () { return hit; });
        if (isFont) return hit || net;          // fonts never change: cache first
        if (hit) { e.waitUntil(net); return hit; } // app files: cached now, refreshed for next time
        return net;
      });
    })
  );
});
