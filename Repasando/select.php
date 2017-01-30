<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
<?php 	

	if($_GET){
	  	$id = $_GET["id"];

	  	$conx = mysqli_connect("localhost","root","","data_base");
	  	$query = mysqli_query($conx , "SELECT * FROM users WHERE id=$id");

	  	echo "<table border='2px'>";
	  	while ($row = mysqli_fetch_array($query)){ 
				echo "<tr><td>$row[name]</td><td>$row[last_name]</td></tr>";

		} 
		echo "</table>";
	  
	  }else{
	  	echo "No estoy conectado";
	 }


 ?>
	
</body>
</html>