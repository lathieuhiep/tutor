function totalNumberFunction() {
	const note = document.getElementById("note");

	const a = parseInt( prompt('Nhập số a') );
	const b = parseInt( prompt('Nhập số b') );
	const c = parseInt( prompt('Nhập số c') );

	const total = a + b + c;

	if ( total === 15 ) {
		console.log('Chúc mừng')
	} else {
		console.log("Hãy nhập lại")
	}
}