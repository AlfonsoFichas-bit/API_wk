import { Hono } from "@hono/hono";
import * as rubricController from "./rubrics.controller.ts";

const rubrics = new Hono();

rubrics.get("/", rubricController.getAllRubrics);
rubrics.get("/:id", rubricController.getRubricById);
rubrics.post("/", rubricController.createRubric);
rubrics.put("/:id", rubricController.updateRubric);
rubrics.delete("/:id", rubricController.deleteRubric);

export default rubrics;