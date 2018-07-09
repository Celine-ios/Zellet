<?php 
	include '../class/database.php';
	$claim = json_decode(file_get_contents("php://input"));

	$database = new Database();
	$con = $database -> con();
	$sel = $database -> sel($con);
	$sql = "INSERT INTO pedidos(nombre, apellido, telefono, email, producto, pago, precio, notas) VALUES('".$claim->name."','".$claim->last_name."','".$claim->phone."','".$claim->email."','".$claim->product."','".$claim->pay."',".$claim->price.",'".$claim->notes."')";
	echo $sql;
	
 ?>