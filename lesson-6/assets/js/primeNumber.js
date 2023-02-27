let arr = [];

for (let i = 1; i <= 20; i++ ) {
	let flag = 0;

	for (let j = 2; j < i; j++ ) {
		if ( i % j === 0  ) {
			flag = 1;
			break;
		}
	}

	if ( i > 1 && flag === 0 ) {
		console.log('Các số nguyên tố:', i)

		arr.push(i);
	}
}

// tổng số nguyên tố trong dãy
console.log('Tổng số nguyên tố:', arr.length)


// tổng các số nguyên tố
let arrayElementSum = 0;
for (let i = 0; i < arr.length; i++) {
	arrayElementSum += arr[i];
}

console.log('Tổng các số nguyên tố:', arrayElementSum)