var app = angular.module('core',[]);
app.directive('appHeader', function() {
	return {
		restric: 'E',
		scope: {},
		templateUrl: 'assets/templates/header/index.html'
	}
});