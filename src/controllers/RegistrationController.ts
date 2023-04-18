import { Request, Response } from "express";
import { Form } from "../models/form";
import { Registration } from "../models/registration";
import { cleanDetails } from "../utils/cleanDetails";
import getFormFields from "../utils/getFormFields";
import CustomError from "../utils/CustomError";

export const register = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const { details } = req.body;

		const form = await Form.findOne({ name: slug });
		if (!form) return res.status(400).send("This event does not exist");

		const camelCasedDetails = cleanDetails(details); // The keys can be "First Name", "Last Name" ...
		const formFields = getFormFields(form.elements);

		const fieldsReceived = Object.keys(camelCasedDetails);

		if (fieldsReceived.length !== formFields.length)
			return res.status(400).send(new CustomError("Form fields don't match", 418));

		for (const field of formFields) {
			if (!fieldsReceived.includes(field))
				return res.status(400).send(new CustomError("Form fields don't match", 418));
		}

		const registration = new Registration({
			eventName: slug,
			form: form._id,
			details: camelCasedDetails,
		});

		await registration.save();
		return res.status(200).send("SUCCESS");
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};
