self.addEventListener('install', event => {
  console.log('[SW] Installing and caching manually...');
  event.waitUntil(
    caches.open('manual-cache-v1').then(cache => {
      return fetch('hello.txt').then(response => {
        return cache.put('hello.txt', response);
      });
    }).catch(err => {
      console.error('[SW] Caching error:', err);
    })
  );
});
