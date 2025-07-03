import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMessage extends Document {
  name: string;
  message: string;
  createdAt: Date;
}

const MessageSchema: Schema = new Schema<IMessage>({
  name: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

export default (mongoose.models.Message as Model<IMessage>) ||
  mongoose.model<IMessage>("Message", MessageSchema);
