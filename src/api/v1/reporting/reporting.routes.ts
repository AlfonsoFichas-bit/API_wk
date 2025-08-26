import { Hono } from "@hono/hono";
import * as reportingController from "./reporting.controller.ts";

const reporting = new Hono();

reporting.get("/reports", reportingController.getAllReports);
reporting.get("/reports/:id", reportingController.getReportById);
reporting.post("/reports", reportingController.createReport);
reporting.put("/reports/:id", reportingController.updateReport);
reporting.delete("/reports/:id", reportingController.deleteReport);

reporting.get("/scheduled_reports", reportingController.getAllScheduledReports);
reporting.get("/scheduled_reports/:id", reportingController.getScheduledReportById);
reporting.post("/scheduled_reports", reportingController.createScheduledReport);
reporting.put("/scheduled_reports/:id", reportingController.updateScheduledReport);
reporting.delete("/scheduled_reports/:id", reportingController.deleteScheduledReport);

reporting.get("/project_metrics", reportingController.getAllProjectMetrics);
reporting.get("/project_metrics/:id", reportingController.getProjectMetricsById);
reporting.post("/project_metrics", reportingController.createProjectMetrics);
reporting.put("/project_metrics/:id", reportingController.updateProjectMetrics);
reporting.delete("/project_metrics/:id", reportingController.deleteProjectMetrics);

reporting.get("/sprint_metrics", reportingController.getAllSprintMetrics);
reporting.get("/sprint_metrics/:id", reportingController.getSprintMetricsById);
reporting.post("/sprint_metrics", reportingController.createSprintMetrics);
reporting.put("/sprint_metrics/:id", reportingController.updateSprintMetrics);
reporting.delete("/sprint_metrics/:id", reportingController.deleteSprintMetrics);

reporting.get("/user_metrics", reportingController.getAllUserMetrics);
reporting.get("/user_metrics/:id", reportingController.getUserMetricsById);
reporting.post("/user_metrics", reportingController.createUserMetrics);
reporting.put("/user_metrics/:id", reportingController.updateUserMetrics);
reporting.delete("/user_metrics/:id", reportingController.deleteUserMetrics);

export default reporting;