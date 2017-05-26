// Name of Data Cache
var dataCacheName = "melt-pwa-data";

// Name of the Cache
var cacheName = "melt-pwa";

// Establish which files to cache locally
var filesToCache = [
  "/",
  "/index.php",
  "/manifest.json",
  "/offline.html",
  "/sw.js",
  "/sw-reg.js",
  "/img/Fatty.png",
  "/images/android/android-launchericon-36-36.png",
  "/images/android/android-launchericon-72-72.png",
  "/images/android/android-launchericon-96-96.png",
  "/images/android/android-launchericon-144-144.png",
  "/images/android/android-launchericon-192-192.png",
  "/images/ios/ios-appicon-76-76.png",
  "/images/ios/ios-appicon-120-120.png",
  "/images/ios/ios-appicon-152-152.png",
  "/images/ios/ios-appicon-180-180.png",
  "/images/ios/ios-appicon-1024-1024.png",
  "/images/windows10/LockScreenLogo.scale-200.png",
  "/images/windows10/SplashScreen.scale-200.png",
  "/images/windows10/Square44x44Logo.scale-200.png",
  "/images/windows10/Square44x44Logo.targetsize-24_altform-unplated.png",
  "/images/windows10/Square150x150Logo.scale-200.png",
  "/images/windows10/StoreLogo.png",
  "/images/windows10/Wide310x150Logo.scale-200.png"
];

/* 
   Listen for the install event to cache the content specified above.
   - DEPENDENCY - If any of the elements is not created or found it fails.
   - This is usually used to cache the Application Shell, which will render the application
   useless if not loaded.  
   - It can be used to cache stuff like:
     1. User Navigation Interface
     2. Menu
     3. Style (CSS)
     4. Static content like images
     5. Fonts
     6. JavaScript
     7. Templates
*/
self.addEventListener("install", 

  function(event)
  {
    console.log("[ServiceWorker] Installing Service Worker");
    /* 
	   Promise to determine the length and success of the install.
	   If it is rejected, the installation is assumed as failed and the Service Worker
	   will be abandoned.
	*/
    event.waitUntil(
      /* 
	     Attempt to open the Cache specified on top.
	     If it is not found, rejects the promise.
	  */
      caches.open(cacheName).then(
    
        function(cache)
        {
          console.log("[ServiceWorker] Caching App Shell");
		  /* 
		     Attempt to retrieve all of the files needed.
		     If it fails to retrieve any, it will reject the promise.
		  */
          return cache.addAll(filesToCache);
        }
      )
    );
  }
);

/* 
   Listen for the activation event
   - This occurs once the Service Worker is installed and there are no old ones running.
   - This is a good moment to:
     1. Handle IndexedDB schema migrations
	 2. Delete unused caches
*/
self.addEventListener("activate", 

  function(event)
  {
    console.log("[ServiceWorker] Activating Service Worker");
	
    event.waitUntil(

	  caches.keys().then(
	  
        function(keyList)
        {
          return Promise.all(
		  
            keyList.map(
			
              function(key)
              {
				// If the current caches no longer exist, delete them.
                if (key !== cacheName && key !== dataCacheName)
                {
                  console.log("[ServiceWorker] Removing old cache(s)", key);
                  return caches.delete(key);
                }
              }
            )
          );
        }
      )
    );
  
    /*
    * Fixes a corner case in which the app wasn't returning the latest data.
    * You can reproduce the corner case by commenting out the line below and
    * then doing the following steps: 1) load app for first time so that the
    * initial New York City data is shown 2) press the refresh button on the
    * app 3) go offline 4) reload the app. You expect to see the newer NYC
    * data, but you actually see the initial data. This happens because the
    * service worker is not yet activated. The code below essentially lets
    * you activate the service worker faster.
    */
    return self.clients.claim();
  }
);

/* 
   Listen for a fetch request
   - This occurs whenever the app updates the contents from the server.
   - It is useful to retrieve non-essential content like avatars.
   - If a request is not found in the cache or needs an update:
     1. Get it from the network (server)
	 2. Save it in the cache
	 3. Show it in the page
   - Remember to delete unused stuff as it will increase the usage in the user's device.   
*/

/*self.addEventListener("fetch",

  function(event)
  {
    console.log("[Service Worker] Fetching data", event.request.url);

    /*
     * The app is asking for fresh data.
     * In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
    */
/*    event.respondWith(
	  
      caches.open(dataCacheName).then(
		  
        function(cache)
        {
          return fetch(event.request).then(
		 
            function(response)
            {
              cache.put(event.request.url, response.clone());
              return response;
            }
          );
        }
      )
    );
    /*
    * The app is asking for app shell files. In this scenario the app uses the
    * "Cache, falling back to the network" offline strategy:
    * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
    */
/*    event.respondWith(
	
      caches.match(event.request).then(
	
        function(response)
        {
          return response || fetch(event.request);
        }
      )
    );
  }
);*/

/* 
   Listen for a fetch request
   - Attempt to fetch from the Network
   - If not successful, server the offline page
*/
self.addEventListener('fetch', 
  function(event)
  {
    event.respondWith(
      fetch(event.request).catch(
        function(error)
        {
          console.error( '[ServiceWorker] Network request Failed. Serving offline page ' + error );
          
          return caches.open(cacheName).then(

            function(cache)
            {
              return cache.match('/offline.html');
            }
    	  );
        }
      )
    );
  }
);