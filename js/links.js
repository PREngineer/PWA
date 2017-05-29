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

function load()
{
	if( areWeOnline() )
	{
		goOnline();
	}
	else
	{
		goOffline();
	}
}

function getAnchor()
{
	var currentUrl = document.URL,
	urlParts   = currentUrl.split('#');

	return (urlParts.length > 1) ? urlParts[1] : null;
}

function areWeOnline()
{
    var request = new XMLHttpRequest();
	
    var file = "https://www.google.com";
    var randomNum = Math.round(Math.random() * 10000);
 
    request.open('HEAD', file + "?rand=" + randomNum, true);
    request.send();
     
    request.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e)
	{
      if(request.readyState == 4)
	  {
        if(request.status >= 200 && request.status < 304)
		{
          return true;
        }
		else
		{
          return false;
        }
      }
    }
}