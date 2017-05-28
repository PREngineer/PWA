<!DOCTYPE html>
<html lang="en">

<?php

include 'head.html';

?>

<body>

	<div>
		<img src="img/Logo.png">
		<br>
		This is the index page of the application.
		<br>
		<button onclick="goCNN()">Take me to CNN.com</button>
	</div>

<script>
function goCNN(){
    location.href = "http://www.cnn.com";
}
</script>

</body>

</html>