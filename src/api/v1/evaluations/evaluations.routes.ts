import { Hono } from "@hono/hono";
import * as evaluationController from "./evaluations.controller.ts";

const evaluations = new Hono();

evaluations.get("/", evaluationController.getAllEvaluations);
evaluations.get("/:id", evaluationController.getEvaluationById);
evaluations.post("/", evaluationController.createEvaluation);
evaluations.put("/:id", evaluationController.updateEvaluation);
evaluations.delete("/:id", evaluationController.deleteEvaluation);

export default evaluations;