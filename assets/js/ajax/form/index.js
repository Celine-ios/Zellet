function sendRequest() {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && this.status == 200) {
			alert(this.responseText);
		}
	};
	ajax.open('post', '../../../php/form/index.php');
	ajax.send();
}
