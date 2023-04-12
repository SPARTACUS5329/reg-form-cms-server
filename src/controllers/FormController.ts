import { Request, Response } from "express";
import { Form } from "../models/form";

export const foo = (req: Request, res: Response) => {
	res.status(200).send("It is working dumbass");
};

export const getForms = async (req: Request, res: Response) => {
	try {
		const { filters } = req.body;
		const forms = await Form.find(filters).select("-__v -_id -createdAt");
		return res.status(200).send(forms);
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