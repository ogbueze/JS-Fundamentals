const num = process.argv[2];

function factorial(n) {
	if (isNaN(Number(n)) || !Number.isInteger(Number(n)) || Number(n) < 0) {
		console.log(1);
	} else {
		let result = 1;
		for (let i = 1; i <= n; i++) {
			result *= i;
		}
		console.log(result);
	}
}
factorial(num);
