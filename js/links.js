function load()
{
	//areWeOnline();
}

function areWeOnline()
{
	var xhr = new XMLHttpRequest();
	var file = "https://www.google.com";
	var randomNum = Math.round(Math.random() * 10000);
	
	xhr.open('HEAD', file + "?rand=" + randomNum, true);
	xhr.send();
	
	xhr.addEventListener("readystatechange", processRequest, false);
	
	function processRequest(e)
	{
	  if (xhr.readyState == 4)
	  {
		if (xhr.status >= 200 && xhr.status < 304)
		{
		  //alert("connection exists!");
		  goHome();
		}
		else
		{
		  //alert("connection doesn't exist!");
		  goOffline();
		}
	  }
	}
}

function goHome()
{
	var hide = document.getElementById("offline");
	hide.style.display = 'none';
	
	var show = document.getElementById("home");
	show.style.display = 'block';
}

function goOffline()
{
	var hide = document.getElementById("home");
	hide.style.display = 'none';
	
	var show = document.getElementById("offline");
	show.style.display = 'block';
}

function getAnchor()
{
	var currentUrl = document.URL,
	urlParts   = currentUrl.split('#');

	return (urlParts.length > 1) ? urlParts[1] : null;
}