const numArgument = process.argv.slice(2);

if (numArgument == 0) {
	console.log("No argument");
} else {
	console.log(numArgument[0]);
}
