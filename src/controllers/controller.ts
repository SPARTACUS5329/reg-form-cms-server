import { Request, Response } from "express";
import { Form } from "../models/form";

export const foo = (req: Request, res: Response) => {
	res.status(200).send("It is working dumbass");
};

export const createForm = async (req: Request, res: Response) => {
	try {
		console.log(req.body);
		const form = new Form(req.body);
		await form.save();
		res.status(200).send("Success");
	} catch (error: any) {
		console.error(error);
		res.status(500).send(error.message);
	}
};
