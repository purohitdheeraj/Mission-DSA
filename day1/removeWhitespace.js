const removeWhitespaces = (string) => {
	// remove whitespace
	// iterate the string
	// if \t \n then not include it in new string

	if (!string) {
		return string;
	}

	let newString = "";
	for (let i = 0; i < string.length; i++) {
		let char = string[i];
		if (char !== " " && char !== "\n" && char !== "\t") {
			newString += char;
		}
	}

	return newString;
};

console.log(removeWhitespaces(" Hare Krishna "));
console.log(
	removeWhitespaces(" Hare Krishna Hare Rama    hari bol")
);
