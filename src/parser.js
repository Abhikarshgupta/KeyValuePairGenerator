/**
 *
 * @param {string[]} inputData Input array which will be transformed into key value pairs
 * @param {string} options can have values like single-input, key-value-pair-input.
 */
export const parseInput = (inputData, options = "single") => {
	if (options === "single") {
		if (typeof inputData === "string") {
			return inputData.length > 0
				? inputData.split(`\n`).map((item) => decodeURIComponent(item))
				: [];
		}
	}
	if (options === "key-value-pair") {
		if (typeof inputData === "string") {
			return inputData.length > 0
				? inputData
						.split(`\n`)
						.map((item) => decodeURIComponent(item))
						.map((item) => item.split(`\t`))
				: [];
		}
	}
};
