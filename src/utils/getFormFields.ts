import { textToCamelCase } from "./cleanDetails";
import { FormElement } from "./types";

interface FormFields {
	[key: string]: FormElement;
}

const getFormFields = (form: FormElement[][]): FormFields => {
	const temp: FormFields = {};
	for (const row of form) {
		for (const element of row) {
			temp[textToCamelCase(element.name)] = element;
		}
	}
	return temp;
};

export default getFormFields;
