//**** This is the "Offline page" service worker ****//

// Name of Data Cache
var dataCacheName = "melt-pwa-data";

// Name of the Cache
var cacheName = "melt-pwa";

// Defines which files to cache locally
var filesToCache = [
  ".",
  "/",
  "index.php",
  "manifest.json",
  "offline.html",
  "sw.js",
  "sw-reg.js",
  "includes/head.html",
  "img/Logo.png",
  "img/TLogo.png",
  "img/Offline.png",
  "js/links.js"
];

/* Install stage 
	- Opens the cache or creates it if it doesn't exist
	- Sets up the offline page in the cache
*/
self.addEventListener('install', function(event) {
  var offlinePage = new Request('index.php');
  event.waitUntil(
  fetch(offlinePage).then(function(response) {
    return caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Cached offline page during Install '+ response.url);
      return cache.put(offlinePage, response);
    });
  }));
});

//If any fetch fails, it will show the offline page.
//Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function(error) {
        console.error( '[ServiceWorker] Network request Failed. Serving offline page ' + error );
        return caches.open(cacheName).then(function(cache) {
          return cache.match('index.php#offline');
      });
    }));
});

//This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function(response) {
  return caches.open(cacheName).then(function(cache) {
    console.log('[ServiceWorker] Offline page updated from refreshOffline event: '+ response.url);
    return cache.put(offlinePage, response);
  });
});