app.directive('presentation', function() {
	return {
		restrict: 'E',
		scope: {
			content: '='
		},
		templateUrl: 'assets/templates/presentation/index.html'
	}
});