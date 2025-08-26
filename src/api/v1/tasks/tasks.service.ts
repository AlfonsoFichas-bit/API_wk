import { db } from "../../../db/db.ts";
import { tasks } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllTasks = async () => {
    return await db.select().from(tasks);
};

export const getTaskById = async (id: number) => {
    return await db.select().from(tasks).where(eq(tasks.id, id));
};

export const createTask = async (task: any) => {
    return await db.insert(tasks).values(task).returning();
};

export const updateTask = async (id: number, task: any) => {
    return await db.update(tasks).set(task).where(eq(tasks.id, id)).returning();
};

export const deleteTask = async (id: number) => {
    return await db.delete(tasks).where(eq(tasks.id, id)).returning();
};