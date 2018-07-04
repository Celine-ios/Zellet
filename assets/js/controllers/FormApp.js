app.controller('formapp', function($scope) {
	$scope.title = {
		heading: "Rellena Nuestro Famoso Formulario de 5 minutos",
		small: "Es fácil, no te costará nada"
	};
		
	$scope.changeheading = function() {
		$scope.title = {
			heading: 'Vender con Nosotros es Fácil, ¡Házlo ya!',
			small: 'Pagos en Dólares Estadounidenses y Bolívares'
		};
	};
});