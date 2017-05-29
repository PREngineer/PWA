<!DOCTYPE html>
<html lang="en">

<?php

// Insert all of the header information
include 'includes/head.html';

?>

<body onload="load()">

<?php

// Include the NavBar - App Shell [top]
include 'includes/NavBar.html';


/**** Actual Contents Starts Here ****/

// Insert the offline page information
include 'offline.html';

// Insert the home page information
include 'home.html';

/**** Actual Contents Ends Here ****/


// Include the footer - App Shell [bottom]
include 'includes/footer.html';

?>

<script>
	$.ajax({
	url: 'ajax/test.html',
	success: function(data) {
	alert('Connection.');
	},
	error: function(data) {
	alert('No Connection.');
	}
	});
</script>

</body>

</html>