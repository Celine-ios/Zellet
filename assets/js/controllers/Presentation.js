app.controller('Presentation', function($scope) {
	$scope.banners = [{
		title: 'Lo que buscas, Está ya Aquí',
		small: 'Te estábamos esperando',
		img: 'white',
		svg: {
			fb: 'https://cdn.svgporn.com/logos/facebook.svg',
			ig: 'https://cdn.svgporn.com/logos/instagram-icon.svg',
			wp: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
		},
		networks: {
			fb: 'Zellet Official',
			ig: '@zellet_of',
			wp: '+58 416-7952491'
		}, 
		secondTitle: 'Rellena El Formulario y te Contactaremos',
		secondSmall: 'A tu correo para vender tu producto'
	}
	];
});