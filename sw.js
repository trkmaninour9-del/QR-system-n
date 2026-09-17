self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('qr-store').then((cache) => cache.addAll([
      '/QR-system-n/',
      '/QR-system-n/index.html',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
