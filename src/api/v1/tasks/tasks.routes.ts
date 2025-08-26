import { Hono } from "@hono/hono";
import * as taskController from "./tasks.controller.ts";

const tasks = new Hono();

tasks.get("/", taskController.getAllTasks);
tasks.get("/:id", taskController.getTaskById);
tasks.post("/", taskController.createTask);
tasks.put("/:id", taskController.updateTask);
tasks.delete("/:id", taskController.deleteTask);

export default tasks;