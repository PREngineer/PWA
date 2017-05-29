function goIndex()
{
    //location.href = "#home";
	
	var hide = document.getElementById("offline");
	hide.style.display = 'none';
	
	var show = document.getElementById("home");
	hide.style.display = 'block';
}

function goOffline()
{
    //location.href = "#offline";
	
	var hide = document.getElementById("home");
	hide.style.display = 'none';
	
	var show = document.getElementById("offline");
	hide.style.display = 'block';
}

function load()
{
	$("#home").show();
}