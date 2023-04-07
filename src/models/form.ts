import mongoose from "mongoose";
import { FormElement } from "../utils/types";

// Define the schema
const FormSchema = new mongoose.Schema({
	name: { type: String, required: true },
	elements: { type: mongoose.Schema.Types.Mixed, required: true },
	createdAt: { type: Date, default: Date.now },
});

// Define the document interface
export interface FormDocument extends mongoose.Document {
	name: string;
	elements: FormElement[];
	createdAt?: Date;
}

// Define the model interface
export type FormModel = mongoose.Model<FormDocument>;

// Export the schema and model
export const Form = mongoose.model<FormDocument, FormModel>("form", FormSchema);
