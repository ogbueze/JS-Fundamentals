const numArgument = process.argv.slice(2);

if (numArgument.length == 0) {
	console.log("No argument");
} else {
	numArgument.forEach((value) => {
		console.log(value);
	});
}
