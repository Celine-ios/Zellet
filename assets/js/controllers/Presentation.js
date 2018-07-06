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
		secondSmall: 'Serás contactado por correo, tendremos una semana para contactarte por el mismo medio, con un comprador para tu producto',
		steps: {
			first: 'Rellena el Formulario con tu información',
			sFirst: 'Incluyendo la forma en que te pagaremos (Bsf. o USD)',
			second: 'Espera Nuestro Correo en una Semana',
			sSecond: 'Y haz el envío del producto',
			third: 'Después de haber enviado el producto',
			sThird: 'Se te liberará el pago en la moneda de tu preferencia'
		}
	}
	];
});