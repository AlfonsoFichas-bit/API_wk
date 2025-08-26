import { db } from "../../../db/db.ts";
import { rubrics } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllRubrics = async () => {
    return await db.select().from(rubrics);
};

export const getRubricById = async (id: number) => {
    return await db.select().from(rubrics).where(eq(rubrics.id, id));
};

export const createRubric = async (rubric: any) => {
    return await db.insert(rubrics).values(rubric).returning();
};

export const updateRubric = async (id: number, rubric: any) => {
    return await db.update(rubrics).set(rubric).where(eq(rubrics.id, id)).returning();
};

export const deleteRubric = async (id: number) => {
    return await db.delete(rubrics).where(eq(rubrics.id, id)).returning();
};