import { NextFunction, Request, Response } from "express";
import { Task } from "../types";
import { taskServices } from "../services/task.services";

// getAll
export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tasks = await taskServices.getAllTasks();

    if (tasks.length === 0) {
      res.statusCode = 404;
      throw new Error("No tasks were founded");
    }

    res.status(200).json({ tasks });
  } catch (error) {
    next(error);
  }
};

//get one by id:
export const getTaskByid = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const taskId = req.params.id;
    const task = await taskServices.getTaskByid(taskId);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Create a new task
export const createTask = async (req: Request<{}, {}, Task>, res: Response) => {
  try {
    // get data from req.body
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      res.status(400).json({ message: "All fields are required" });
    }

    const newTask = await taskServices.createTask({
      title,
      description,
      status,
    });

    res
      .status(201)
      .json({ newTask: newTask, message: "Task created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update an existing task
type UpdateTaskBody = Partial<Omit<Task, "userId" | "createdAt" | "updatedAt">>;

export const updateTask = async (
  req: Request<{ id: string }, {}, UpdateTaskBody>,
  res: Response
) => {
  try {
    // get id from params
    const taskId = req.params.id;
    // get data from req.body
    const updates = req.body;

    const updatedTask = await taskServices.updateTask(taskId, updates);

    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }

    res
      .status(200)
      .json({ task: updatedTask, message: "Task updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteTask = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    // get id from params
    const taskId = req.params.id;

    const taskDeleted = await taskServices.deleteTask(taskId);

    if (!taskDeleted) {
      return res.status(404).json({ error: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted succesfully", taskDeleted: taskDeleted });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
