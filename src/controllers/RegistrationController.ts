import { Request, Response } from "express";
import { Form } from "../models/form";
import { Registration } from "../models/registration";

export const register = async (req: Request, res: Response) => {
	try {
		const { slug } = req.params;
		const { details } = req.body;
		const form = await Form.findOne({ name: slug });
		if (!form) return res.status(400).send("This event does not exist");
		console.log(form);
		const registration = new Registration({
			eventName: slug,
			form: form._id,
			details,
		});
		await registration.save();
		return res.status(200).send("Success");
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};
