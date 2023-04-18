import { textToCamelCase } from "./cleanDetails";
import { FormElement } from "./types";

const getFormFields = (form: FormElement[][]): string[] => {
	const temp = [];
	for (const row of form) {
		for (const element of row) {
			temp.push(textToCamelCase(element.name));
		}
	}
	return temp;
};

export default getFormFields;
