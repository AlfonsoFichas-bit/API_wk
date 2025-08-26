import { db } from "../../../db/db.ts";
import { reports, scheduledReports, projectMetrics, sprintMetrics, userMetrics } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllReports = async () => {
    return await db.select().from(reports);
};

export const getReportById = async (id: number) => {
    return await db.select().from(reports).where(eq(reports.id, id));
};

export const createReport = async (report: any) => {
    return await db.insert(reports).values(report).returning();
};

export const updateReport = async (id: number, report: any) => {
    return await db.update(reports).set(report).where(eq(reports.id, id)).returning();
};

export const deleteReport = async (id: number) => {
    return await db.delete(reports).where(eq(reports.id, id)).returning();
};

export const getAllScheduledReports = async () => {
    return await db.select().from(scheduledReports);
};

export const getScheduledReportById = async (id: number) => {
    return await db.select().from(scheduledReports).where(eq(scheduledReports.id, id));
};

export const createScheduledReport = async (scheduledReport: any) => {
    return await db.insert(scheduledReports).values(scheduledReport).returning();
};

export const updateScheduledReport = async (id: number, scheduledReport: any) => {
    return await db.update(scheduledReports).set(scheduledReport).where(eq(scheduledReports.id, id)).returning();
};

export const deleteScheduledReport = async (id: number) => {
    return await db.delete(scheduledReports).where(eq(scheduledReports.id, id)).returning();
};

export const getAllProjectMetrics = async () => {
    return await db.select().from(projectMetrics);
};

export const getProjectMetricsById = async (id: number) => {
    return await db.select().from(projectMetrics).where(eq(projectMetrics.id, id));
};

export const createProjectMetrics = async (projectMetrics: any) => {
    return await db.insert(projectMetrics).values(projectMetrics).returning();
};

export const updateProjectMetrics = async (id: number, projectMetrics: any) => {
    return await db.update(projectMetrics).set(projectMetrics).where(eq(projectMetrics.id, id)).returning();
};

export const deleteProjectMetrics = async (id: number) => {
    return await db.delete(projectMetrics).where(eq(projectMetrics.id, id)).returning();
};

export const getAllSprintMetrics = async () => {
    return await db.select().from(sprintMetrics);
};

export const getSprintMetricsById = async (id: number) => {
    return await db.select().from(sprintMetrics).where(eq(sprintMetrics.id, id));
};

export const createSprintMetrics = async (sprintMetrics: any) => {
    return await db.insert(sprintMetrics).values(sprintMetrics).returning();
};

export const updateSprintMetrics = async (id: number, sprintMetrics: any) => {
    return await db.update(sprintMetrics).set(sprintMetrics).where(eq(sprintMetrics.id, id)).returning();
};

export const deleteSprintMetrics = async (id: number) => {
    return await db.delete(sprintMetrics).where(eq(sprintMetrics.id, id)).returning();
};

export const getAllUserMetrics = async () => {
    return await db.select().from(userMetrics);
};

export const getUserMetricsById = async (id: number) => {
    return await db.select().from(userMetrics).where(eq(userMetrics.id, id));
};

export const createUserMetrics = async (userMetrics: any) => {
    return await db.insert(userMetrics).values(userMetrics).returning();
};

export const updateUserMetrics = async (id: number, userMetrics: any) => {
    return await db.update(userMetrics).set(userMetrics).where(eq(userMetrics.id, id)).returning();
};

export const deleteUserMetrics = async (id: number) => {
    return await db.delete(userMetrics).where(eq(userMetrics.id, id)).returning();
};