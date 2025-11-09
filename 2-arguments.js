const numArgument = process.argv.length - 2;
if (numArgument == 1) {
	console.log("Argument found");
} else if (numArgument == 0) {
	console.log("No argument");
} else {
	console.log("Arguments found");
}
