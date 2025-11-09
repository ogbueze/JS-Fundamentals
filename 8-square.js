const multiLineArg = process.argv[2];

if (
	!isNaN(multiLineArg) &&
	Number.isInteger(Number(multiLineArg)) &&
	multiLineArg > 0
) {
	count = Number(multiLineArg);
	for (let index = 0; index < count; index++) {
		console.log("x".repeat(count));
	}
} else {
	console.log("Missing size");
}
