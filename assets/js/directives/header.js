var app = angular.module('core',['ngRoute']);
app.directive('appHeader', function() {
	return {
		restric: 'E',
		scope: {},
		templateUrl: 'assets/templates/header/index.html'
	}
});