export const sortStrings = (array) => {
	if (!array) return array;

	return array.map((word) =>
		word.split("").sort().join("")
	);
};

console.log(
	sortStrings([
		"apple",
		"banana",
		"pear",
		"banana",
		"orange",
		"apple",
	])
);
