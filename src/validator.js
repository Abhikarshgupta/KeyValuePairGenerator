/**
 * function to validate input string. if the data is incorrect, throw a relevant error.
 */
export const validateInput = (inputData) => {
	const validationObj = {
		status: true,
		message: "",
	};
	if (!Array.isArray(inputData)) {
		validationObj.message = "Input is not an array";
		validationObj.status = false;
	}
	return validationObj;
};
