//**** This is the "Offline page" service worker ****//

// Name of Data Cache
var dataCacheName = "melt-pwa-data";

// Name of the Cache
var cacheName = "melt-pwa";

// Defines which files to cache locally
var filesToCache = [
  "/",
  ".",
  "manifest.json",
  "index.php",
  "content/home.html",
  "content/offline.html",
  "css/animation.css",
  "css/bootstrap.css",
  "css/bootstrap-theme.css",
  "css/fontello.css",
  "fonts/fontello.eot",
  "fonts/fontello.svg",
  "fonts/fontello.ttf",
  "fonts/fontello.woff",
  "fonts/fontello.woff2",
  "fonts/glyphicons-halflings-regular.eot",
  "fonts/glyphicons-halflings-regular.svg",
  "fonts/glyphicons-halflings-regular.ttf",
  "fonts/glyphicons-halflings-regular.woff",
  "fonts/glyphicons-halflings-regular.woff2",
  "img/Logo.png",
  "img/TLogo.png",
  "img/Offline.png",
  "includes/head.html",
  "includes/footer.html",
  "includes/NavBar.html",
  "js/bootstrap.js",
  "js/jquery.min.js",
  "js/links.js",
  "js/sw.js",
  "js/sw-reg.js"
];

/* Install stage 
	- Opens the cache or creates it if it doesn't exist
	- Sets up the offline page in the cache
*/
self.addEventListener('install', function(event) {
  var offlinePage = new Request('offline.html');
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
          return cache.match('offline.html');
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