const CACHE_NAME = 'simple-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html'
];

self.addEventListener('install', event => {
  console.log('[SW] Install');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching files...');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', event => {
  console.log('[SW] Fetching:', event.request.url);
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});


// Note: This Service Worker is a basic example. In a real application, you would handle caching, network requests, etc.
// To test, register this Service Worker in the main JavaScript file