import { db } from "../../../db/db.ts";
import { users } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

export const getUsers = async () => {
    return await db.select().from(users);
};

export const getUserById = async (id: number) => {
    return await db.select().from(users).where(eq(users.id, id));
};

export const createUser = async (user: typeof users.$inferInsert) => {
    return await db.insert(users).values(user).returning();
};