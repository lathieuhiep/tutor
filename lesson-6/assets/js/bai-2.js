function totalNumber2() {
	let num1 = 1;
	let num2 = 3;

	let sumOfPrevTwo = 0;
	let total = num1 + num2;

	let arrNumber = [num1, num2];

	for ( let i = 1; i <= 8; i++ ) {
		// gán sumOfPrevTwo bằng tổng của 2 số trước
		sumOfPrevTwo = num1 + num2;

		// gán giá trí số num2 vào num1
		num1 = num2;

		// gán giá trí số num2 bằng sumOfPrevTwo
		num2 = sumOfPrevTwo;

		// push number to list
		arrNumber.push(sumOfPrevTwo);

		// total
		total = total + sumOfPrevTwo;
	}

	console.log( 'Dãy số 10 số liên tiếp: ', arrNumber );
	console.log('Tổng 10 số liên tiếp:', total);
}