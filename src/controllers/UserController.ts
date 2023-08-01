import { Request, Response } from "express";
import { User, UserDocument } from "../models/user";
import bcrypt from "bcrypt";
import CustomError from "../utils/CustomError";
import { Responses } from "../utils/constants";

export const login = async (req: Request, res: Response) => {
	try {
		const { name, password } = req.body;
		const user: UserDocument | null = await User.findOne({ name }).select("-__v -_id");
		if (!user) return res.status(400).send(new CustomError("User does not exist", 418));
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect)
			return res.status(400).send(new CustomError("Incorrect password", 418));
		return res.status(200).send({ user, message: Responses["SUCCESS"] });
	} catch (error: any) {
		console.error(error);
		return res.status(500).send(error.message);
	}
};
