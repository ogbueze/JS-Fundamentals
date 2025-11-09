const [, , num1, num2] = process.argv;

function add(a, b) {
	const result = Number(a) + Number(b);
	console.log(result);
}
add(num1, num2);
