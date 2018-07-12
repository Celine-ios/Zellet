app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'assets/templates/home/index.html'
	}).when('/success', {
		templateUrl: 'assets/templates/success/index.html'
	}).when('/failure', {
		templateUrl: 'assets/templates/failure/index.html'
	});
});