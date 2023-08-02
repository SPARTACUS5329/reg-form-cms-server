import { textToCamelCase } from "./cleanDetails";
import { FormElement, FormRow } from "./types";

interface FormFields {
	[key: string]: FormElement;
}

const getFormFields = (form: FormRow[][]): FormFields => {
	const temp: FormFields = {};
	for (const step of form) {
		for (const row of step) {
			for (const element of row.elements) {
				temp[textToCamelCase(element.name)] = element;
			}
		}
	}
	return temp;
};

export default getFormFields;
