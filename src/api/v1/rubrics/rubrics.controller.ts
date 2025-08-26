import { Context } from "@hono/hono";
import * as rubricService from "./rubrics.service.ts";

export const getAllRubrics = async (c: Context) => {
    const rubrics = await rubricService.getAllRubrics();
    return c.json(rubrics);
};

export const getRubricById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const rubric = await rubricService.getRubricById(id);
    if (!rubric) {
        return c.json({ message: "Rubric not found" }, 404);
    }
    return c.json(rubric);
};

export const createRubric = async (c: Context) => {
    const rubric = await c.req.json();
    const newRubric = await rubricService.createRubric(rubric);
    return c.json(newRubric, 201);
};

export const updateRubric = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const rubric = await c.req.json();
    const updatedRubric = await rubricService.updateRubric(id, rubric);
    if (!updatedRubric) {
        return c.json({ message: "Rubric not found" }, 404);
    }
    return c.json(updatedRubric);
};

export const deleteRubric = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await rubricService.deleteRubric(id);
    if (!deleted) {
        return c.json({ message: "Rubric not found" }, 404);
    }
    return c.json({ message: "Rubric deleted successfully" });
};