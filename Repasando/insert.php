<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>	</title>
</head>
<body>
	

	<?php 	

	  if($_POST){
	  	
	  	$name = $_POST["name"];
	  	$last_name = $_POST["last_name"];

	  	if($name <> "" && $last_name <> ""){
	  		$conx = mysqli_connect("localhost","root","","data_base");
	  		$query = mysqli_query($conx,"INSERT INTO users VALUES('$name','$last_name','')");
	  		if($query){
	  			echo "Usuario registrado con exito";
	  		}else{
	  			echo "Usuario no registrado con exito";
	  		}
	  	}

	  
	  }else{
	  	echo "No estoy conectado";
	  }


	  



	 ?>
</body>
</html>