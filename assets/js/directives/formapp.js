app.directive('formApp', function() {
	return {
		restrict: 'E',
		scope: {
			title: '='
		},
		templateUrl: 'assets/templates/form-app/index.html'
	}
});