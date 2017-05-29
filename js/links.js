function load()
{
	if( areWeOnline() )
	{
		goHome();
	}
	else
	{
		goOffline();
	}
}

function areWeOnline()
{
	var answer;
    var request = new XMLHttpRequest();
	
    var file = "https://www.accenture.com/t20170325T025930__w__/us-en/_acnmedia/Accenture/Dev/ComponentImages/logo-accenture.svg";
     
    request.open('HEAD', file, true);
    request.send();
     
    request.addEventListener("readystatechange", processRequest, true);
 
    function processRequest(e)
	{
      if(request.readyState == 4)
	  {
        if(request.status >= 200 && request.status < 304)
		{
          answer = true;
		  alert("We have Internet access!");
        }
		else
		{
          answer = false;
		  alert("We don't have Internet access!");
        }
      }
	  else
	  {
		alert('Weird readyStateChange!');
	  }
    }
	
	if(answer)
	{
		return true;
	}
	else
	{
		return false;
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