function goHome()
{
    //location.href = "#home";
	
	$("#offline").hide();
	$("#home").show();
}

function goOffline()
{
    //location.href = "#offline";
	
	$("#home").hide();
	$("#offline").show();
}

function load()
{
	$("#home").show();
	$("#offline").hide();
}