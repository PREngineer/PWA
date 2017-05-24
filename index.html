<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A Progressive Web Application">
    <meta name="author" content="Jorge Pabon">

    <title>My App</title>
		
	<link rel="manifest" href="manifest.json">
	<link rel="icon" sizes="192x192" href="img/Fatty.png">
	<link rel="apple-touch-icon" href="img/Fatty.png">
	
	<meta name="mobile-web-app-capable" content="yes">
	
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="application-name" content="Air Horner">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="My App">
	
	<meta name="msapplication-TileImage" content="img/Fatty.png">
	<meta name="msapplication-TileColor" content="#2196F3">
	
	<meta name="theme-color" content="#2196F3">
	
	<meta property="og:title" content="My App">
	<meta property="og:type" content="website">
	<meta property="og:image" content="img/Fatty.png">
	<meta property="og:url" content="https://pwa.eastus.cloudapp.azure.com/PWA/">
	<meta property="og:description" content="A Progressive Web App">
	
	<meta name="twitter:card" content="summary">
	<meta name="twitter:url" content="https://pwa.eastus.cloudapp.azure.com/PWA/">
	<meta name="twitter:title" content="My App">
	<meta name="twitter:description" content="My App. No install just use it right away in your browser!">
	<meta name="twitter:image" content="img/Fatty.png">
	
	<meta name="twitter:creator" content=@PianistaPR>
	
	<!-- Service Worker Files -->
	<script src="pwabuilder-sw.js"></script>
	<script src="pwabuilder-sw-register.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	
</head>

<body>

<div>
	<img src="img/Fatty.png">
	<br>
	This is the index page of the application.
	<br>
	<a href="offline.html">Offline Page</a>
</div>

<script>

//This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if (navigator.serviceWorker.controller) {
  console.log('[PWA Builder] active service worker found, no need to register')
} else {

//Register the ServiceWorker
  navigator.serviceWorker.register('pwabuilder-sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Service worker has been registered for scope:'+ reg.scope);
  });
}

//This is the service worker with the combined offline experience (Offline page + Offline copy of pages)

//Install stage sets up the offline page in the cahche and opens a new cache
self.addEventListener('install', function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log('[PWA Builder] Install Event processing');
  return caches.open('pwabuilder-offline').then(function(cache) {
    console.log('[PWA Builder] Cached index and offline page during Install');
    return cache.addAll(['offline.html', 'index.html']);
  });
}

self.addEventListener('fetch', function(event) {
  console.log('The service worker is serving the asset.');
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request)}
  ));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response)
      } else {
        reject()
      }
    }, reject)
  });
};

var addToCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return fetch(request).then(function (response) {
      console.log('[PWA Builder] add page to offline'+response.url)
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open('pwabuilder-offline').then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match('offline.html')
     } else {
       return matching
     }
    });
  });
};
</script>

</body>

</html>