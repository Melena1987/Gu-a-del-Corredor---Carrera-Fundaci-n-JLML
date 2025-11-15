const CACHE_NAME = 'carrera-jlml-guide-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // React/ReactDOM are from a CDN, they will be cached on first load.
  // The same goes for images from Firebase.
];

// On install, pre-cache the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache and caching app shell');
        return cache.addAll(urlsToCache);
      })
  );
});

// On fetch, use a cache-falling-back-to-network strategy
self.addEventListener('fetch', (event) => {
  // We only want to handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // If we have a cached response, return it
        if (response) {
          return response;
        }

        // If not, fetch from network
        return fetch(event.request).then(
          (networkResponse) => {
            // Clone the response because it's a stream and can only be consumed once.
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                // Cache the new response
                cache.put(event.request, responseToCache);
              });

            // And return the network response
            return networkResponse;
          }
        ).catch(error => {
            console.error('Fetching failed:', error);
            // You might want to have a fallback offline page here.
            // For now, we'll just let the browser handle the error.
            throw error;
        });
      })
  );
});

// On activate, clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});