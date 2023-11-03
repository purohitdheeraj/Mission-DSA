export const reverseArray = (array) => {
	// Write your code here
	// for loop last element
	// inplace ya new arr push
	// return arr

	const resultArray = [];

	for (let i = array.length - 1; i >= 0; i--) {
		let number = array[i];
		resultArray.push(number);
	}
	return resultArray;
};

console.log(reverseArray([1, 2, 3, 4]));
