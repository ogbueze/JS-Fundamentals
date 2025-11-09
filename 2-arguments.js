const numArgument = process.argv.length - 2;
if (numArgument > 1) {
	console.log("Arguments found");
} else if (numArgument == 0) {
	console.log("No argument");
} else {
	console.log("Argument found");
}
