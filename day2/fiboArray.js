export const getFibonacci = (n) => {
	// Write your code here

	if (n === 1) return [0];

	const fiboArray = [0, 1];

	if (n > 2) {
		for (let i = 0; i < n - 2; i++) {
			let nextNum =
				fiboArray[fiboArray.length - 1] +
				fiboArray[fiboArray.length - 2];
			fiboArray.push(nextNum);
		}
	}

	return fiboArray;
};

// bad attempt but every attempt count :-D
// in such cases check your code with gpt and ask how this code can be improved
