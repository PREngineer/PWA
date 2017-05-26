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
	<!-- Service Worker Files -->
	<script src="sw.js"></script>
	<script src="sw-register.js"></script>
	
	<link rel="icon" sizes="192x192" href="img/Fatty.png">
	<link rel="apple-touch-icon" href="img/Fatty.png">
	
	<meta name="mobile-web-app-capable" content="yes">
	
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="application-name" content="My App">
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

</body>

</html>