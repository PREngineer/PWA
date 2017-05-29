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
	
	var allPages = document.getElementsByClassName('hideable');
	
	for(i = 0; i < allPages.length; i++)
	{
		allPages[i].style.display = 'none';
	}
	
	target.style.display = 'block';
	
	// Make the selected page button be blue, all others black
	var btns = document.getElementsByClassName('buttons');
	var btnName = id + '-button';
	var btn = document.getElementById(btnName);
	
	for(j = 0; j < bnts.length; j++)
	{
		btns[j].style.color = 'black';
	}
	
	btn.style.color = 'blue';
}