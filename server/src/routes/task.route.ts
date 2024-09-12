import express from "express";
import {
  getAllTasks,
  getTaskByid,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller";

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskByid);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
