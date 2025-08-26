import { Context } from "@hono/hono";
import * as taskService from "./tasks.service.ts";

export const getAllTasks = async (c: Context) => {
    const tasks = await taskService.getAllTasks();
    return c.json(tasks);
};

export const getTaskById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const task = await taskService.getTaskById(id);
    if (!task) {
        return c.json({ message: "Task not found" }, 404);
    }
    return c.json(task);
};

export const createTask = async (c: Context) => {
    const task = await c.req.json();
    const newTask = await taskService.createTask(task);
    return c.json(newTask, 201);
};

export const updateTask = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const task = await c.req.json();
    const updatedTask = await taskService.updateTask(id, task);
    if (!updatedTask) {
        return c.json({ message: "Task not found" }, 404);
    }
    return c.json(updatedTask);
};

export const deleteTask = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await taskService.deleteTask(id);
    if (!deleted) {
        return c.json({ message: "Task not found" }, 404);
    }
    return c.json({ message: "Task deleted successfully" });
};