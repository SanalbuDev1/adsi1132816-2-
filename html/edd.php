<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		//Conexion a la base de datos
		$con = mysqli_connect("localhost","root","","BD");
		if(mysqli_connect_errno()){
			echo "no se pudo conectar" . mysqli_connect_error();
		}

		//Obtienes valores de formulario
		$Nom = mysqli_real_escape_string($con, $_POST["Nombre"]);
		$Cor = mysqli_real_escape_string($con, $_POST["Correo"]);

		//Insertamos valores del formularios en nuestra bd
		$sql = "INSERT INTO registros12 (Nombre,Correo)
		VALUES ('$Nom','$Cor')";

		if (!mysqli_query($con,$sql)){
			die('Error: ' . mysqli_error($con));
		}else{
			echo "conexion realizada exitosamente";
		}
	 ?>
</body>
</html>