const numArg = process.argv.slice(2);

if (!isNaN(numArg)) {
	console.log(`My number: ${numArg[0]}`);
} else {
	console.log("Not a number");
}
