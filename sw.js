self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cat-pwa-v1').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
        // 可以加埋 CatAr.html、navigation.html 等
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
