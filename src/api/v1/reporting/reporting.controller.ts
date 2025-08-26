import { Context } from "@hono/hono";
import * as reportingService from "./reporting.service.ts";

export const getAllReports = async (c: Context) => {
    const reports = await reportingService.getAllReports();
    return c.json(reports);
};

export const getReportById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const report = await reportingService.getReportById(id);
    if (!report) {
        return c.json({ message: "Report not found" }, 404);
    }
    return c.json(report);
};

export const createReport = async (c: Context) => {
    const report = await c.req.json();
    const newReport = await reportingService.createReport(report);
    return c.json(newReport, 201);
};

export const updateReport = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const report = await c.req.json();
    const updatedReport = await reportingService.updateReport(id, report);
    if (!updatedReport) {
        return c.json({ message: "Report not found" }, 404);
    }
    return c.json(updatedReport);
};

export const deleteReport = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await reportingService.deleteReport(id);
    if (!deleted) {
        return c.json({ message: "Report not found" }, 404);
    }
    return c.json({ message: "Report deleted successfully" });
};

export const getAllScheduledReports = async (c: Context) => {
    const scheduledReports = await reportingService.getAllScheduledReports();
    return c.json(scheduledReports);
};

export const getScheduledReportById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const scheduledReport = await reportingService.getScheduledReportById(id);
    if (!scheduledReport) {
        return c.json({ message: "Scheduled Report not found" }, 404);
    }
    return c.json(scheduledReport);
};

export const createScheduledReport = async (c: Context) => {
    const scheduledReport = await c.req.json();
    const newScheduledReport = await reportingService.createScheduledReport(scheduledReport);
    return c.json(newScheduledReport, 201);
};

export const updateScheduledReport = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const scheduledReport = await c.req.json();
    const updatedScheduledReport = await reportingService.updateScheduledReport(id, scheduledReport);
    if (!updatedScheduledReport) {
        return c.json({ message: "Scheduled Report not found" }, 404);
    }
    return c.json(updatedScheduledReport);
};

export const deleteScheduledReport = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await reportingService.deleteScheduledReport(id);
    if (!deleted) {
        return c.json({ message: "Scheduled Report not found" }, 404);
    }
    return c.json({ message: "Scheduled Report deleted successfully" });
};

export const getAllProjectMetrics = async (c: Context) => {
    const projectMetrics = await reportingService.getAllProjectMetrics();
    return c.json(projectMetrics);
};

export const getProjectMetricsById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const projectMetrics = await reportingService.getProjectMetricsById(id);
    if (!projectMetrics) {
        return c.json({ message: "Project Metrics not found" }, 404);
    }
    return c.json(projectMetrics);
};

export const createProjectMetrics = async (c: Context) => {
    const projectMetrics = await c.req.json();
    const newProjectMetrics = await reportingService.createProjectMetrics(projectMetrics);
    return c.json(newProjectMetrics, 201);
};

export const updateProjectMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const projectMetrics = await c.req.json();
    const updatedProjectMetrics = await reportingService.updateProjectMetrics(id, projectMetrics);
    if (!updatedProjectMetrics) {
        return c.json({ message: "Project Metrics not found" }, 404);
    }
    return c.json(updatedProjectMetrics);
};

export const deleteProjectMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await reportingService.deleteProjectMetrics(id);
    if (!deleted) {
        return c.json({ message: "Project Metrics not found" }, 404);
    }
    return c.json({ message: "Project Metrics deleted successfully" });
};

export const getAllSprintMetrics = async (c: Context) => {
    const sprintMetrics = await reportingService.getAllSprintMetrics();
    return c.json(sprintMetrics);
};

export const getSprintMetricsById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const sprintMetrics = await reportingService.getSprintMetricsById(id);
    if (!sprintMetrics) {
        return c.json({ message: "Sprint Metrics not found" }, 404);
    }
    return c.json(sprintMetrics);
};

export const createSprintMetrics = async (c: Context) => {
    const sprintMetrics = await c.req.json();
    const newSprintMetrics = await reportingService.createSprintMetrics(sprintMetrics);
    return c.json(newSprintMetrics, 201);
};

export const updateSprintMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const sprintMetrics = await c.req.json();
    const updatedSprintMetrics = await reportingService.updateSprintMetrics(id, sprintMetrics);
    if (!updatedSprintMetrics) {
        return c.json({ message: "Sprint Metrics not found" }, 404);
    }
    return c.json(updatedSprintMetrics);
};

export const deleteSprintMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await reportingService.deleteSprintMetrics(id);
    if (!deleted) {
        return c.json({ message: "Sprint Metrics not found" }, 404);
    }
    return c.json({ message: "Sprint Metrics deleted successfully" });
};

export const getAllUserMetrics = async (c: Context) => {
    const userMetrics = await reportingService.getAllUserMetrics();
    return c.json(userMetrics);
};

export const getUserMetricsById = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const userMetrics = await reportingService.getUserMetricsById(id);
    if (!userMetrics) {
        return c.json({ message: "User Metrics not found" }, 404);
    }
    return c.json(userMetrics);
};

export const createUserMetrics = async (c: Context) => {
    const userMetrics = await c.req.json();
    const newUserMetrics = await reportingService.createUserMetrics(userMetrics);
    return c.json(newUserMetrics, 201);
};

export const updateUserMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const userMetrics = await c.req.json();
    const updatedUserMetrics = await reportingService.updateUserMetrics(id, userMetrics);
    if (!updatedUserMetrics) {
        return c.json({ message: "User Metrics not found" }, 404);
    }
    return c.json(updatedUserMetrics);
};

export const deleteUserMetrics = async (c: Context) => {
    const id = parseInt(c.req.param("id"));
    const deleted = await reportingService.deleteUserMetrics(id);
    if (!deleted) {
        return c.json({ message: "User Metrics not found" }, 404);
    }
    return c.json({ message: "User Metrics deleted successfully" });
};