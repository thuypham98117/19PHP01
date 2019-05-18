function checkRegister() {
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	if (name == '') {
		document.getElementById('errorName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errorName').innerHTML = '';
	}
	if (email == '') {
		document.getElementById('errorEmail').innerHTML = 'Please input your email';
	} else {
		document.getElementById('errorEmail').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errorPass').innerHTML = 'Please input your password';
	} else {
		document.getElementById('errorPass').innerHTML = '';
	}
}