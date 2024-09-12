import mongoose from "mongoose";

export type Task = {
  title: string;
  description: string;
  status: "pending" | "in progress" | "completed";
  dueDate?: Date;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};
