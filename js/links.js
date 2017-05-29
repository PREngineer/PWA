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
		showPage('offline');
	}
}

function showPage(id)
{
	// Show only the selected page, hide all others
	var target = document.getElementById(id);
	
	var all = document.getElementsByClassName('hideable');
	
	for(i = 0; i < all.length; i++)
	{
		all[i].style.display = 'none';
	}
	
	target.style.display = 'block';
	
	// Make the selected page button be blue, all others black
	var btns = document.getElementsByClassName('buttons');
	var btn = document.getElementById(id + '-button');
	
	for(i = 0; i < all.length; i++)
	{
		btns[i].style.color = 'black';
	}
	
	btn.style.color = 'blue';
}