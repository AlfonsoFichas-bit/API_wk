import { db } from "../../../db/db.ts";
import { evaluations } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllEvaluations = async () => {
    return await db.select().from(evaluations);
};

export const getEvaluationById = async (id: number) => {
    return await db.select().from(evaluations).where(eq(evaluations.id, id));
};

export const createEvaluation = async (evaluation: any) => {
    return await db.insert(evaluations).values(evaluation).returning();
};

export const updateEvaluation = async (id: number, evaluation: any) => {
    return await db.update(evaluations).set(evaluation).where(eq(evaluations.id, id)).returning();
};

export const deleteEvaluation = async (id: number) => {
    return await db.delete(evaluations).where(eq(evaluations.id, id)).returning();
};