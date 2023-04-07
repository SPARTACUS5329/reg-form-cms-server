import { Request, Response } from "express";

export const foo = (req: Request, res: Response) => {
	res.status(200).send("It is working dumbass");
};

export const createForm = (req: Request, res: Response) => {
	console.log(req.body);
	res.status(200).send("Success");
};
