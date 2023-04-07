import mongoose from "mongoose";

// Define the schema
const RegistrationSchema = new mongoose.Schema({
	eventName: { type: String, required: true },
	form: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "form" },
	details: { type: mongoose.Schema.Types.Mixed, required: true },
	createdAt: { type: Date, default: Date.now },
});

// Define the document interface
export interface RegistrationDocument extends mongoose.Document {
	eventName: string;
	form: mongoose.Schema.Types.ObjectId;
	details: any;
	createdAt?: Date;
}

// Define the model interface
export type RegistrationModel = mongoose.Model<RegistrationDocument>;

// Export the schema and model
export const Registration = mongoose.model<RegistrationDocument, RegistrationModel>(
	"registration",
	RegistrationSchema
);
