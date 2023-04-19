import { Request, Response } from "express";
import { Form } from "../models/form";
import { Registration } from "../models/registration";
import { cleanDetails } from "../utils/cleanDetails";
import getFormFields from "../utils/getFormFields";
import CustomError from "../utils/CustomError";
import { ElementType } from "../utils/types";

export const getRegistrations = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const registrations = await Registration.find({ eventName: slug }).select(
			"-__v -_id -form"
		);
		res.status(200).send(registrations);
	} catch (error: any) {
		console.error(error);
		res.status(500).send(error.message);
	}
};

export const register = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const { details } = req.body;

		const form = await Form.findOne({ name: slug });
		if (!form) return res.status(400).send("This event does not exist");

		const camelCasedDetails = cleanDetails(details); // The keys can be "First Name", "Last Name" ...
		const formFields = getFormFields(form.elements);

		const fieldsReceived = Object.keys(camelCasedDetails);

		if (fieldsReceived.length !== Object.keys(formFields).length)
			return res.status(400).send(new CustomError("Form fields don't match", 418));

		for (const field of Object.keys(formFields)) {
			if (!fieldsReceived.includes(field))
				return res.status(400).send(new CustomError("Form fields don't match", 418));
		}

		Object.keys(camelCasedDetails).forEach((field) => {
			if (formFields[field].elementType === ElementType["MULTI_SELECT"])
				camelCasedDetails[field] = Object.values(camelCasedDetails[field]);
		});

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
