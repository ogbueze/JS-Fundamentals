const multiLineArg = process.argv[2];

if (!isNaN(multiLineArg) && Number.isInteger(Number(multiLineArg))) {
	count = Number(multiLineArg);
	for (let index = 0; index < count; index++) {
		console.log("C is fun");
	}
} else {
	console.log("Missing number of occurrences");
}
