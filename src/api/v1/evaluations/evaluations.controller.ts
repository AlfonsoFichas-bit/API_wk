import { Context } from "@hono/hono";
import * as evaluationService from "./evaluations.service.ts";

export const getAllEvaluations = async (c: Context) => {
    const evaluations = await evaluationService.getAllEvaluations();
    return c.json(evaluations);
};

export const getEvaluationById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const evaluation = await evaluationService.getEvaluationById(id);
    if (!evaluation) {
        return c.json({ message: "Evaluation not found" }, 404);
    }
    return c.json(evaluation);
};

export const createEvaluation = async (c: Context) => {
    const evaluation = await c.req.json();
    const newEvaluation = await evaluationService.createEvaluation(evaluation);
    return c.json(newEvaluation, 201);
};

export const updateEvaluation = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const evaluation = await c.req.json();
    const updatedEvaluation = await evaluationService.updateEvaluation(id, evaluation);
    if (!updatedEvaluation) {
        return c.json({ message: "Evaluation not found" }, 404);
    }
    return c.json(updatedEvaluation);
};

export const deleteEvaluation = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await evaluationService.deleteEvaluation(id);
    if (!deleted) {
        return c.json({ message: "Evaluation not found" }, 404);
    }
    return c.json({ message: "Evaluation deleted successfully" });
};