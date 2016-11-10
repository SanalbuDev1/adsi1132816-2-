<?php 

	$destino="salvarez18@misena.edu.co";
	$nombre = $_POST["nombre"];
	$correo = $_POST["correo"];
	$telefono = $_POST["telefono"];
	$mensaje = $_POST["mensaje"];
	$contenido = "nombre" . $nombre . "\nCorreo:" . $correo ."\ntelefono" . "nMensaje" . $mensaje;
	mail($destino, "contacto , $contenido")
	header(location:administrador.html)

 ?>