function goHome()
{
	var hide = document.getElementById("offline");
	hide.style.display = 'none';
	
	var hide = document.getElementById("home");
	hide.style.display = 'block';
}

function goOffline()
{
	var hide = document.getElementById("home");
	hide.style.display = 'none';
	
	var hide = document.getElementById("offline");
	hide.style.display = 'block';
}

function load()
{
	if(getAnchor() == "offline")
	{
		var hide = document.getElementById("home");
		hide.style.display = 'none';
		
		var hide = document.getElementById("offline");
		hide.style.display = 'block';
	}
	else
	{
		var hide = document.getElementById("offline");
		hide.style.display = 'none';
		
		var hide = document.getElementById("home");
		hide.style.display = 'block';
	}
}

function getAnchor()
{
	var currentUrl = document.URL,
	urlParts   = currentUrl.split('#');

	return (urlParts.length > 1) ? urlParts[1] : null;
}