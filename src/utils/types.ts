export enum ElementType {
	Text = "TEXT",
	RADIO = "RADIO",
	CHECKBOX = "CHECKBOX",
	DROPDOWN = "DROPDOWN",
	MULTI_SELECT = "MULTI_SELECT",
}

export enum Width {
	HALF = "HALF",
	FULL = "FULL",
	THIRD = "THIRD",
}

export interface FormElement {
	elementType: ElementType;
	name: string;
	width: Width;
	validation?: any;
	extraData?: any;
}
