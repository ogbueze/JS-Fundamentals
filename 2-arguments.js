const argument = prompt("pass and argument");
if (argument.length > 1) {
	console.log("Arguments found");
} else if (argument.length == 0) {
	console.log("No argument");
} else {
	console.log("Argument found");
}
