<?php 
	include '../class/database.php';
	$claim = json_decode(file_get_contents("php://input"));

	$database = new Database();
	$con = $database -> con();
	$sel = $database -> sel($con);
	$sql = "INSERT INTO pedidos(nombre, apellidos, telefono, email, producto, pago, precio, notas) VALUES('".$claim->name."','".$claim->last_name."','".$claim->phone."','".$claim->email."','".$claim->product."','".$claim->pay."',".$claim->price.",'".$claim->notes."')";
	$query = mysqli_query($con, $sql);
	if ($query) {
		echo "true";
	} else {
		echo 'ERROR: '.mysqli_error($con);
	}
 ?>