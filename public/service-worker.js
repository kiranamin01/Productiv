const CACHE_NAME = "productiv-ai-cache-v2";

// Assets to cache immediately during installation
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icons/icon-192x192.svg",
  "/icons/icon-512x512.svg",
  // Avoid referencing /src/ directory assets directly
  // Instead, reference the built assets that will be in the root or assets directory after build
  "/assets/index.css",
  "/assets/index.js",
];

// Cache groups for different types of resources
const CACHE_STRATEGIES = {
  // Assets that should be cached for a long time (1 week)
  immutable: {
    name: "immutable-v2",
    maxAge: 7 * 24 * 60 * 60, // 1 week in seconds
    patterns: [/\.(?:js|css|woff2?|svg|webp|png|jpg|jpeg|gif|ico)$/i],
  },
  // Dynamic content that should be refreshed more frequently (1 day)
  dynamic: {
    name: "dynamic-v2",
    maxAge: 24 * 60 * 60, // 1 day in seconds
    patterns: [/\/api\//i],
  },
};

// Helper function to determine which cache to use based on request URL
function getCacheForRequest(request) {
  const url = new URL(request.url);

  // Check if the request matches any of the immutable patterns
  for (const pattern of CACHE_STRATEGIES.immutable.patterns) {
    if (pattern.test(url.pathname)) {
      return CACHE_STRATEGIES.immutable.name;
    }
  }

  // Check if the request matches any of the dynamic patterns
  for (const pattern of CACHE_STRATEGIES.dynamic.patterns) {
    if (pattern.test(url.pathname)) {
      return CACHE_STRATEGIES.dynamic.name;
    }
  }

  // Default to main cache
  return CACHE_NAME;
}

// Install event - cache static assets
self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Create other caches
        return Promise.all([
          caches.open(CACHE_STRATEGIES.immutable.name),
          caches.open(CACHE_STRATEGIES.dynamic.name),
        ]);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");

  // Get all valid cache names
  const validCacheNames = [
    CACHE_NAME,
    CACHE_STRATEGIES.immutable.name,
    CACHE_STRATEGIES.dynamic.name,
  ];

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return !validCacheNames.includes(cacheName);
            })
            .map((cacheName) => {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Claim clients so the service worker is in control immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - implement stale-while-revalidate strategy for most assets
self.addEventListener("fetch", (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip requests to the src directory to avoid unnecessary network payloads
  const url = new URL(event.request.url);
  if (url.pathname.startsWith("/src/")) {
    console.log("Skipping src directory request:", url.pathname);
    return;
  }

  // For HTML requests - network first, then cache
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cache the latest version of the page
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // If network fails, try to serve from cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Determine which cache to use for this request
  const cacheName = getCacheForRequest(event.request);

  // For static assets - stale-while-revalidate strategy
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        // Create a promise to update the cache
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Don't cache non-successful responses
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === "basic"
            ) {
              // Cache the new resource
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch((error) => {
            console.error("Fetch failed:", error);
            // Return null to indicate fetch failed
            return null;
          });

        // Return cached response immediately if available, otherwise wait for network
        return (
          cachedResponse ||
          fetchPromise.then((response) => {
            // If both cache and network failed, return a simple offline page
            if (!response) {
              // If we had a cached response earlier, use that even if it's stale
              if (cachedResponse) return cachedResponse;

              // Otherwise, we're truly offline
              return new Response(
                "You are offline and this content is not available.",
                {
                  status: 503,
                  statusText: "Service Unavailable",
                  headers: new Headers({
                    "Content-Type": "text/plain",
                  }),
                }
              );
            }
            return response;
          })
        );
      });
    })
  );
});
