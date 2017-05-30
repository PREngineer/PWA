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


/************************ Actual Contents Starts Here *************************
	Each additional page that is created should have an include statement here.
	JavaScript is used to show/hide the appropriate pages when a user clicks
	on the NavBar, which takes place in the user's device and not the server.
******************************************************************************/

// Insert the blank page for links that haven't been implemented yet.
include 'content/blank.html';

// Insert the home page
include 'content/home.html';

// Insert the logout page
include 'content/logout.html';

// Insert the logout page
include 'content/info.html';

/************************* Actual Contents Ends Here *************************/


// Include the footer - App Shell [bottom]
include 'includes/footer.html';

?>

</body>

</html>