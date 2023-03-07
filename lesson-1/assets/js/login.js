const submit = document.getElementById('btn-login');

submit.addEventListener('click', function (event) {
	event.preventDefault();
	const login =  document.getElementById('login');

	// password
	const elementPassword = document.getElementById('password-control');
	const password = document.getElementById('password').value;

	let elementNote = document.createElement('p');
	let text = ''
	let flagPass = false;

	if ( password.length >= 8 && password !== '12345678' ) {
		flagPass = true;
	} else {
		text = document.createTextNode("Mật khẩu phải có độ dài 8 kí tự trở lên");
		elementNote.appendChild(text);

		elementPassword.append(elementNote);
	}

	// email
	const elementEmail = document.getElementById('email-control');
	const email = document.getElementById('email').value;
	const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	let flagEmail = false;

	if ( email.match(mailFormat) ) {
		flagEmail = true;
	} else {
		text = document.createTextNode("Email không hợp lệ");
	}

	console.log(flagEmail);

})