import mongoose from "mongoose";

// Define the schema
const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	password: { type: String, required: true },
});

// Define the document interface
export interface UserDocument extends mongoose.Document {
	_id: mongoose.Schema.Types.ObjectId;
	name: string;
	password: string;
}

// Define the model interface
export type UserModel = mongoose.Model<UserDocument>;

// Export the schema and model
export const User = mongoose.model<UserDocument, UserModel>("user", UserSchema);
