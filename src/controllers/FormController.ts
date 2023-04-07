import { Request, Response } from "express";
import { Form } from "../models/form";

export const foo = (req: Request, res: Response) => {
	res.status(200).send("It is working dumbass");
};

export const getForm = async (req: Request, res: Response) => {
	try {
		const { name } = req.body;
		const form = await Form.findOne({ name });
		if (!form) return res.status(400).send("Form not found");
		return res.status(200).send(form);
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};

export const createForm = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const form = new Form(req.body);
		await form.save();
		return res.status(200).send("Success");
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};
