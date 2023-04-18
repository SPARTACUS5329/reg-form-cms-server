import lodash from "lodash";

export const textToCamelCase = (text: string): string => lodash.camelCase(text);

// Changes the keys to camelCase
export const cleanDetails = (details: any): any => {
	const temp: any = {};
	for (const key of Object.keys(details)) {
		if (typeof details[key] === "string") temp[textToCamelCase(key)] = details[key];
		else temp[textToCamelCase(key)] = cleanDetails(details[key]);
	}
	return temp;
};
