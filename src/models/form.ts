import mongoose from "mongoose";
import { FormRow } from "../utils/types";

// Define the schema
const FormSchema = new mongoose.Schema({
	name: { type: String, required: true },
	steps: { type: mongoose.Schema.Types.Mixed, required: true },
	user: String,
	createdAt: { type: Date, default: Date.now },
});

// Define the document interface
export interface FormDocument extends mongoose.Document {
	_id: mongoose.Schema.Types.ObjectId;
	name: string;
	steps: FormRow[][];
	user: string;
	createdAt?: Date;
}

// Define the model interface
export type FormModel = mongoose.Model<FormDocument>;

// Export the schema and model
export const Form = mongoose.model<FormDocument, FormModel>("form", FormSchema);
