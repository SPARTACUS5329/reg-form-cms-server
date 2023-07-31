import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI: string = process.env.DB_URL as string;

export const connectToMongoDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);

		console.log("MongoDB database connection established successfully");
	} catch (error: any) {
		console.error(error.message);
		console.log("MongoDB connection error. Please make sure MongoDB is running.");
		process.exit(1);
	}
};
