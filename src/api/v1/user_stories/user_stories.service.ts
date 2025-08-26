import { db } from "../../../db/db.ts";
import { userStories } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getAllUserStories = async () => {
    return await db.select().from(userStories);
};

export const getUserStoryById = async (id: number) => {
    return await db.select().from(userStories).where(eq(userStories.id, id));
};

export const createUserStory = async (userStory: any) => {
    return await db.insert(userStories).values(userStory).returning();
};

export const updateUserStory = async (id: number, userStory: any) => {
    return await db.update(userStories).set(userStory).where(eq(userStories.id, id)).returning();
};

export const deleteUserStory = async (id: number) => {
    return await db.delete(userStories).where(eq(userStories.id, id)).returning();
};