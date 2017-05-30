/*
	This functions gets executing upon loading the app.
*/
function load()
{
	checkconnection();
}

/*
	This function checks whether we do have an internet connection.
*/
function checkconnection()
{
	var status = navigator.onLine;

	if (status)
	{
		showPage('home');
	}
}

/*
	This function shows the selected page and hides the others.
	Additionally, it highlights the right NavBar link as blue
	and the others black.
*/
function showPage(id)
{
	/* 
		Show only the selected page, hide all others.
		1. Grab the selected page
		2. Grab a list of all pages
		3. Disable all pages
		4. Enable the selected page
	*/
	var target = document.getElementById(id);
	var all = document.getElementsByClassName('hideable');
	for(i = 0; i < all.length; i++)
	{
		all[i].style.display = 'none';
	}
	target.style.display = 'block';
	
	/* 
		Make the selected page button be blue, all others black
		1. Grab a list of all buttons
		2. Set up the name of the selected button to use
		3. Make all buttons black
		4. Make the selected button blue
	*/
	var btns = document.getElementsByClassName('buttons');
	var btnName = id + '-button';
	var btn = document.getElementById(btnName);
	for(i = 0; i < btns.length; i++)
	{
		btns[i].style.color = 'black';
	}
	btn.style.color = 'LightSkyBlue';
}