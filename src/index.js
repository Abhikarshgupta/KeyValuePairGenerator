import { validateInput } from "./validator.js";
import { parseInput } from "./parser.js";
import { convertIntoKeyValuePair } from "./converter.js";

/**
 * function to generate key value pair from a given string. can be a copy paste from excel. works to generate key value pair from single item strings or key value pair strings.
 * will provide more options. like:- option to choose output string regex. how do you want the string to be. upper case, lower case, _ separated etc.
 * @param {string} inputData string input probably escaped by \n.
 * @param {object} options
 * @returns
 */
export const generateKeyValuePair = (inputData, options) => {
	const inputDataForConverter = parseInput(inputData, options);
	console.log({ inputDataForConverter });
	const validationResult = validateInput(inputDataForConverter);
	if (!validationResult.status) return validationResult.message;
	console.log("here");
	const resultObj = convertIntoKeyValuePair(inputDataForConverter, options);
	console.log({ resultObj });
};

const x = `IOLCP	INE485C01011
BBTC	INE050A01025
IOLCP	INE485C01011
ZEEL	INE256A01028
IOLCP	INE485C01011
RAMCOSYS	INE246B01019
CYIENT	INE136B01020
COCHINSHIP	INE704P01017
IDEA	INE669E01016
MATRIMONY	INE866R01028
DBL	INE917M01012
DBL	INE917M01012
DBL	INE917M01012
DBL	INE917M01012
IDEA	INE669E01016
IOLCP	INE485C01011
TATACOMM	INE151A01013
IDEA	INE669E01016
MATRIMONY	INE866R01028
DBL	INE917M01012
DHANI	INE274G01010`;

console.log(generateKeyValuePair(x, "single"));
