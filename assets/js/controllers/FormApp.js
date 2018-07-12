app.controller('formapp', function($scope, $http) {
	$scope.title = {
		heading: "Rellena Nuestro Famoso Formulario de 5 minutos",
		small: "Es fácil, no te costará nada"
	};

	$scope.sendRequest = function() {
		var nombre = document.getElementsByName('name')[0].value;
		var apellido = document.getElementsByName('lastname')[0].value;
		var telefono = document.getElementsByName('phone')[0].value;
		var email = document.getElementsByName('mail')[0].value;
		var producto = document.getElementsByName('product')[0].value;
		var pago = document.getElementsByName('pay')[0].value;
		var precio = document.getElementsByName('price')[0].value;
		var notas = document.getElementsByName('notes')[0].value;

		$http.post('assets/php/form/index.php',{
			name: nombre,
			last_name: apellido,
			phone: telefono,
			email: email,
			product: producto,
			pay: pago,
			price: precio,
			notes: notas
		}).then(function(response) {
			location.href='#!success';
		}, function(response) {
			alert('Oouops');
			alert(response);
		});
		alert("Hello");
	};
		
	$scope.changeheading = function() {
		$scope.title = {
			heading: 'Vender con Nosotros es Fácil, ¡Házlo ya!',
			small: 'Pagos en Dólares Estadounidenses y Bolívares'
		};
	};
});