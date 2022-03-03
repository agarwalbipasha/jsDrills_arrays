function reduce(elements, cb, startingValue) {
	let result = startingValue || elements[0];
	if (result == startingValue) {
		for (let index = 0; index < elements.length; index++) {
			result = cb(result, elements[index]);
		}
	} else {
		for (let index = 1; index < elements.length; index++) {
			result = cb(result, elements[index]);
		}
	}
	return result;
}
module.exports = { reduce };
