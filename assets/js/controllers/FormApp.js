app.controller('formapp', function($scope, $http) {
	$scope.title = {
		heading: "Rellena Nuestro Famoso Formulario de 5 minutos",
		small: "Es fácil, no te costará nada"
	};

	$scope.sendRequest = function() {
		$http.post('../../php/form/index.php').then(function(response) {
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