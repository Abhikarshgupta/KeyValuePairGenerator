export const convertIntoKeyValuePair = (inputArray, options) => {
	if (options === "single") {
		return inputArray.map((item) => ({ [item]: item }));
	}
	if (options === "key-value-pair") {
		return inputArray.map(([key, value]) => ({ [key]: value }));
	}
	return [];
};
