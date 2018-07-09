<?php 

	/**
	 * 
	 */
	class Database
	{
		
		function __construct()
		{
			$this-> host = '127.0.0.1:3306';
			$this-> user = 'root';

		}
		function con() {
			$conn = mysqli_connect($this->host, $this->user);
			return $conn;
		}
		function sel($con) {
			$sel = mysqli_select_db($con, 'zellet');
			return $sel;
		}
	}
 ?>
	