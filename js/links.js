function load()
{
	checkconnection();
}

function checkconnection()
{
	var status = navigator.onLine;

	if (status)
	{
		showPage('home');
	}
	else
	{
		showPage("offline");
	}
}

function showPage(id)
{
	var target = document.getElementById(id);
	
	var all = document.getElementsByClassName('hideable');
	
	alert(all.length);
	
	for(i = 0; i < all.length; i++)
	{
		all[i].style.display = 'none';
	}
	
	target.style.display = 'block';
}