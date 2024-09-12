import mongoose, { Document } from "mongoose";
const { Schema } = mongoose;

export type TaskType = Document & {
  title: string;
  description: string;
  status: "pending" | "in progress" | "completed";
  dueDate?: Date;
  userId?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const TaskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    dueDate: { type: Date },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: false },
  },
  { timestamps: true }
);

export default mongoose.model<TaskType>("Task", TaskSchema);
