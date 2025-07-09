var CACHE_NAME = "my-site-cache-v1";
var filesToCache=[
  "index.js",
  "index.html"
];

self.addEventListener("install", function(event){
  //perform installation
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      console.log("opened cache");
      return cache.addAll(filesToCache);
    })
  );
  
});

self.addEventListener("activate", (e)=>{
  console.log("Service Worker Activate Event");
});

// self.addEventListener("fetch", function(event){
//   event.respondWith(
//     caches.match(event.request).then(function(response){
//       //cache hit- return response
//       if(response){
//         return response
//       }
//       //else do real fetch
//       return fetch(event.request);
//     })
//   );
// });

//or

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response; //Return cached response if found
      }

      return fetch(event.request).then(function (networkResponse) {
       // Don’t cache non-200 or non-basic responses
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse; 
        }

        const responseToCache = networkResponse.clone();

        //  Store in cache
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache); 
        });

        return networkResponse;
      });
    })
  );
});


