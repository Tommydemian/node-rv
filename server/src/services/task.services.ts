import taskModel from "../models/task.model";
import { Task } from "../types";

export const taskServices = {
  getAllTasks: async () => {
    const tasks = await taskModel.find();
    return tasks;
  },
  getTaskByid: async (id: string) => {
    const task = await taskModel.findById(id);
    return task;
  },
  createTask: async (task: Partial<Task>) => {
    const newTask = await taskModel.create(task);
    return newTask;
  },
  updateTask: async (id: string, updates: Partial<Task>) => {
    const updatedTask = await taskModel.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );
    return updatedTask;
  },
  deleteTask: async (id: string) => {
    const deletedTask = await taskModel.findByIdAndDelete(id);
    return deletedTask;
  },
};
