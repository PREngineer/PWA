function load()
{
	checkconnection();
}

function checkconnection()
{
	var status = navigator.onLine;

	if (status)
	{
		goHome();
	}
	else
	{
		goOffline();
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
